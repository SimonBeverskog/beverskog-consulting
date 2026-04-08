import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface CareerApplication {
  name: string;
  email: string;
  phone: string;
  cvPath: string;
  coverLetterPath?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, cvPath, coverLetterPath }: CareerApplication = await req.json();

    if (!name || !email || !cvPath) {
      return new Response(
        JSON.stringify({ error: "Namn, e-post och CV krävs." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Generate signed URLs for the uploaded files
    const { data: cvUrl } = await supabase.storage
      .from("career-applications")
      .createSignedUrl(cvPath, 60 * 60 * 24 * 30); // 30 days

    let coverLetterUrl = null;
    if (coverLetterPath) {
      const { data } = await supabase.storage
        .from("career-applications")
        .createSignedUrl(coverLetterPath, 60 * 60 * 24 * 30);
      coverLetterUrl = data;
    }

    const emailBody = `
Ny karriäransökan från hemsidan:

Namn: ${name}
E-post: ${email}
Telefon: ${phone || "Ej angivet"}

CV: ${cvUrl?.signedUrl || "Kunde inte generera länk"}
${coverLetterPath ? `Personligt brev: ${coverLetterUrl?.signedUrl || "Kunde inte generera länk"}` : "Personligt brev: Ej bifogat"}
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Karriäransökan <noreply@beverskog.com>",
        to: ["lynx@beverskog.com"],
        subject: `Ny karriäransökan från ${name}`,
        text: emailBody,
        reply_to: email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      throw new Error(`Failed to send email: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending career application:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
