import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const LIMITS: Record<string, number> = {
  name: 100,
  organization: 150,
  email: 255,
  phone: 30,
  assignmentType: 100,
  area: 150,
  plannedAction: 300,
  extent: 100,
  timeline: 100,
  message: 2000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const raw = (await req.json()) as Record<string, unknown>;

    // Dolt fält som bara robotar fyller i: svara "ok" utan att skicka något.
    if (typeof raw.website === "string" && raw.website.trim() !== "") {
      return json({ success: true });
    }

    const f: Record<string, string> = {};
    for (const key of Object.keys(LIMITS)) {
      const value = raw[key];
      f[key] = typeof value === "string" ? value.trim() : "";
      if (f[key].length > LIMITS[key]) {
        return json({ error: `Fältet ${key} är för långt.` }, 400);
      }
    }

    if (!f.name || !f.email || !f.message) {
      return json({ error: "Namn, e-post och meddelande krävs." }, 400);
    }
    if (!EMAIL_RE.test(f.email)) {
      return json({ error: "Ogiltig e-postadress." }, 400);
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const v = (s: string) => s || "Ej angivet";
    const emailBody = `
Ny förfrågan från hemsidan:

Namn: ${f.name}
Organisation/företag: ${v(f.organization)}
E-post: ${f.email}
Telefon: ${v(f.phone)}

Typ av uppdrag: ${v(f.assignmentType)}
Kommun/område: ${v(f.area)}
Planerad åtgärd: ${v(f.plannedAction)}
Ungefärlig areal/sträckning: ${v(f.extent)}
Önskad tidplan: ${v(f.timeline)}

Meddelande:
${f.message}
    `.trim();

    const subjectType = f.assignmentType ? ` – ${f.assignmentType}` : "";
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Kontaktformulär <noreply@beverskog.com>",
        to: ["lynx@beverskog.com"],
        subject: `Förfrågan från ${f.name}${subjectType}`.slice(0, 200),
        text: emailBody,
        reply_to: f.email,
      }),
    });

    if (!res.ok) {
      const data = await res.text();
      console.error(`Resend error [${res.status}]: ${data}`);
      throw new Error("EMAIL_SEND_FAILED");
    }

    return json({ success: true });
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    return json({ error: "Meddelandet kunde inte skickas. Försök igen senare." }, 500);
  }
});
