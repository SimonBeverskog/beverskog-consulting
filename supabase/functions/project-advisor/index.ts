import { createOpenAI } from "npm:@ai-sdk/openai";
import { streamText } from "npm:ai";
import { z } from "npm:zod";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Expose-Headers": "X-Lovable-AIG-Run-ID",
};

const SERVICES = [
  ["naturvardesinventering", "Naturvärdesinventering (NVI)"],
  ["fagelinventeringar", "Fågelinventeringar"],
  ["artinventeringar", "Artinventeringar & artskydd"],
  ["nyckelbiotoper", "Nyckelbiotoper & naturvärden"],
  ["hansynsforslag", "Hänsyns- & åtgärdsförslag"],
  ["strategisk-radgivning", "Strategisk rådgivning"],
  ["utbildningar", "Utbildningar & föreläsningar"],
  ["mkb-exploateringsunderlag", "MKB & exploateringsunderlag"],
];

const Body = z.object({ description: z.string().trim().min(15).max(2000) });

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

const instructions = `Du är en assistent på Beverskog Consulting AB (naturvårdskonsult, skogsvetare, specialist på fåglar, artskydd och naturvärdesinventering i hela Sverige).
En potentiell kund beskriver sitt projekt. Svara på svenska med JSON.
Välj 1–3 relevanta tjänster ENDAST från denna lista (använd exakt slug): ${SERVICES.map(([s, t]) => `${s} = ${t}`).join("; ")}.
Ge för varje tjänst en kort motivering (max 2 meningar). Lista 4–7 konkreta uppgifter kunden bör ta med i sin förfrågan (t.ex. plats/fastighetsbeteckning, areal, tidplan, typ av åtgärd, krav från myndighet eller certifiering, befintliga underlag). Ge en kort sammanfattning (1–2 meningar). Lova inga priser eller juridiska utfall.`;

const schema = {
  type: "object",
  additionalProperties: false,
  required: ["summary", "services", "checklist"],
  properties: {
    summary: { type: "string" },
    services: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["slug", "reason"],
        properties: { slug: { type: "string", enum: SERVICES.map(([s]) => s) }, reason: { type: "string" } },
      },
    },
    checklist: { type: "array", items: { type: "string" } },
  },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return json({ error: "Beskriv ditt projekt med minst några meningar." }, 400);

  const apiKey = Deno.env.get("LOVABLE_API_KEY");
  if (!apiKey) return json({ error: "AI-tjänsten är inte konfigurerad." }, 500);

  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
  });

  try {
    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      system: instructions,
      messages: [{ role: "user", content: parsed.data.description }],
      abortSignal: req.signal,
      providerOptions: {
        openai: {
          store: false,
          forceReasoning: true,
          reasoningEffort: "low",
          textVerbosity: "low",
          include: ["reasoning.encrypted_content"],
          // strict JSON schema output
          // @ts-ignore provider option passthrough
          text: { format: { type: "json_schema", name: "advice", strict: true, schema } },
        },
      },
      responseFormat: undefined,
    } as any);
    const text = await result.text;
    const data = JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1));
    const titles = Object.fromEntries(SERVICES);
    data.services = (data.services ?? []).filter((s: any) => titles[s.slug]).map((s: any) => ({ ...s, title: titles[s.slug] }));
    return json(data);
  } catch (e: any) {
    const status = e?.statusCode ?? e?.lastError?.statusCode;
    console.error("advisor error", status, e?.message);
    if (status === 429) return json({ error: "Många förfrågningar just nu, försök igen om en stund." }, 429);
    if (status === 402) return json({ error: "AI-tjänsten är tillfälligt otillgänglig." }, 402);
    return json({ error: "Kunde inte ta fram förslag just nu. Kontakta mig gärna direkt." }, 500);
  }
});
