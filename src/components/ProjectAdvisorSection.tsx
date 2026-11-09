import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2, Sparkles, CheckCircle2 } from "lucide-react";

interface Advice {
  summary: string;
  services: { slug: string; title: string; reason: string }[];
  checklist: string[];
}

const ProjectAdvisorSection = () => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [advice, setAdvice] = useState<Advice | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAdvice(null);
    const { data, error } = await supabase.functions.invoke("project-advisor", { body: { description } });
    setLoading(false);
    if (error || data?.error) {
      let msg = data?.error;
      try { msg = msg ?? (await (error as any)?.context?.json())?.error; } catch { /* ignore */ }
      setError(msg ?? "Kunde inte ta fram förslag just nu. Kontakta mig gärna direkt.");
      return;
    }
    setAdvice(data as Advice);
  };

  return (
    <section id="projektguide" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body text-center">Projektguide</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Vilken tjänst passar ditt projekt?
        </h2>
        <p className="text-muted-foreground font-body text-center mb-8">
          Beskriv kort ditt skogs- eller naturvårdsprojekt så får du AI-förslag på relevanta tjänster och vad du bör ta med i din förfrågan.
        </p>
        <form onSubmit={submit} className="space-y-4">
          <label htmlFor="advisor-desc" className="sr-only">Beskriv ditt projekt</label>
          <Textarea
            id="advisor-desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            maxLength={2000}
            placeholder="T.ex. Vi planerar en avverkning på 20 ha i Gävleborg och har fått frågor om tjäder och hackspett i området…"
            className="bg-background font-body"
          />
          <Button type="submit" size="lg" disabled={loading || description.trim().length < 15}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            {loading ? "Analyserar…" : "Få förslag"}
          </Button>
        </form>

        {error && <p className="mt-6 text-destructive font-body" role="alert">{error}</p>}

        {advice && (
          <div className="mt-10 rounded-lg border border-border bg-background p-6 md:p-8 shadow-sm space-y-6" aria-live="polite">
            <p className="font-body text-foreground">{advice.summary}</p>
            <div>
              <h3 className="font-heading text-xl font-semibold mb-3">Föreslagna tjänster</h3>
              <ul className="space-y-3">
                {advice.services.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/tjanster/${s.slug}`} className="font-semibold text-primary hover:underline">{s.title}</Link>
                    <p className="text-muted-foreground font-body text-sm">{s.reason}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold mb-3">Ta gärna med i din förfrågan</h3>
              <ul className="space-y-2">
                {advice.checklist.map((c, i) => (
                  <li key={i} className="flex gap-2 font-body text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />{c}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-muted-foreground font-body">Förslagen är AI-genererade och ersätter inte en bedömning av Lynx.</p>
            <Button asChild><a href="#contact">Begär offert<ArrowRight className="ml-2 h-4 w-4" /></a></Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectAdvisorSection;
