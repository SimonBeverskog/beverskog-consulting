import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface UploadedFile {
  name: string;
  contentBase64: string;
  contentType?: string;
}

interface CareerApplication {
  name: string;
  email: string;
  phone: string;
  cv: UploadedFile;
  coverLetter?: UploadedFile;
}

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_EXT = /\.(pdf|docx?|DOCX?|PDF)$/;

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
}

function base64ToBytes(b64: string): Uint8Array {
  const clean = b64.includes(",") ? b64.split(",")[1] : b64;
  const binary = atob(clean);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, cv, coverLetter }: CareerApplication = await req.json();

    if (!name || !email || !cv?.contentBase64 || !cv?.name) {
      return new Response(
        JSON.stringify({ error: "Namn, e-post och CV krävs." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate file types and sizes server-side
    const validateFile = (f: UploadedFile, label: string) => {
      if (!ALLOWED_EXT.test(f.name)) {
        throw new Error(`INVALID_FILE_TYPE:${label}`);
      }
      const bytes = base64ToBytes(f.contentBase64);
      if (bytes.byteLength === 0 || bytes.byteLength > MAX_FILE_BYTES) {
        throw new Error(`INVALID_FILE_SIZE:${label}`);
      }
      return bytes;
    };

    const cvBytes = validateFile(cv, "cv");
    const coverLetterBytes = coverLetter ? validateFile(coverLetter, "coverLetter") : null;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Server-generated, collision-resistant folder name — prevents path enumeration
    const folder = crypto.randomUUID();
    const cvPath = `${folder}/cv_${sanitizeFilename(cv.name)}`;
    const { error: cvUploadErr } = await supabase.storage
      .from("career-applications")
      .upload(cvPath, cvBytes, {
        contentType: cv.contentType || "application/octet-stream",
        upsert: false,
      });
    if (cvUploadErr) {
      console.error("CV upload error:", cvUploadErr);
      throw new Error("UPLOAD_FAILED");
    }

    let coverLetterPath: string | null = null;
    if (coverLetter && coverLetterBytes) {
      coverLetterPath = `${folder}/brev_${sanitizeFilename(coverLetter.name)}`;
      const { error: clErr } = await supabase.storage
        .from("career-applications")
        .upload(coverLetterPath, coverLetterBytes, {
          contentType: coverLetter.contentType || "application/octet-stream",
          upsert: false,
        });
      if (clErr) {
        console.error("Cover letter upload error:", clErr);
        throw new Error("UPLOAD_FAILED");
      }
    }

    const { data: cvUrl } = await supabase.storage
      .from("career-applications")
      .createSignedUrl(cvPath, 60 * 60 * 24 * 30);

    let coverLetterUrl: { signedUrl: string } | null = null;
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
      throw new Error("EMAIL_SEND_FAILED");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending career application:", error);
    const msg = error instanceof Error ? error.message : "";
    let userMessage = "Ansökan kunde inte skickas. Försök igen senare.";
    let status = 500;
    if (msg.startsWith("INVALID_FILE_TYPE")) {
      userMessage = "Endast PDF eller Word-dokument tillåts.";
      status = 400;
    } else if (msg.startsWith("INVALID_FILE_SIZE")) {
      userMessage = "Filen är för stor eller tom (max 10 MB).";
      status = 400;
    }
    return new Response(JSON.stringify({ error: userMessage }), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
