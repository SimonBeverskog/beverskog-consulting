import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Loader2, Upload, FileText, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const CareerContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cvInputRef = useRef<HTMLInputElement>(null);
  const coverLetterInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (f: File | null) => void
  ) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 10 * 1024 * 1024) {
      toast({
        title: "Filen är för stor",
        description: "Max filstorlek är 10 MB.",
        variant: "destructive",
      });
      return;
    }
    setter(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      toast({
        title: "CV saknas",
        description: "Vänligen bifoga ditt CV.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const timestamp = Date.now();
      const safeName = form.name.replace(/[^a-zA-Z0-9åäöÅÄÖ]/g, "_");

      // Upload CV
      const cvPath = `${safeName}_${timestamp}/cv_${cvFile.name}`;
      const { error: cvError } = await supabase.storage
        .from("career-applications")
        .upload(cvPath, cvFile);
      if (cvError) throw cvError;

      // Upload cover letter if provided
      let coverLetterPath: string | undefined;
      if (coverLetterFile) {
        coverLetterPath = `${safeName}_${timestamp}/brev_${coverLetterFile.name}`;
        const { error: clError } = await supabase.storage
          .from("career-applications")
          .upload(coverLetterPath, coverLetterFile);
        if (clError) throw clError;
      }

      // Send email via edge function
      const { error } = await supabase.functions.invoke("send-career-application", {
        body: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          cvPath,
          coverLetterPath,
        },
      });
      if (error) throw error;

      toast({
        title: "Ansökan skickad!",
        description: "Tack för din ansökan. Vi återkommer så snart vi kan.",
      });
      setForm({ name: "", email: "", phone: "" });
      setCvFile(null);
      setCoverLetterFile(null);
    } catch (err) {
      console.error("Career application error:", err);
      toast({
        title: "Något gick fel",
        description: "Ansökan kunde inte skickas. Försök igen senare.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
            Ansök
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground">
            Skicka din ansökan
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="Ditt namn"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
              className="bg-card"
            />
            <Input
              type="email"
              placeholder="E-postadress"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
              className="bg-card"
            />
            <Input
              type="tel"
              placeholder="Telefonnummer"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={20}
              className="bg-card"
            />

            {/* CV upload */}
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                CV <span className="text-destructive">*</span>
              </label>
              <input
                ref={cvInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => handleFileSelect(e, setCvFile)}
              />
              {cvFile ? (
                <div className="flex items-center gap-2 bg-card border border-border rounded-md px-3 py-2">
                  <FileText className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground truncate flex-1">{cvFile.name}</span>
                  <button
                    type="button"
                    onClick={() => { setCvFile(null); if (cvInputRef.current) cvInputRef.current.value = ""; }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => cvInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 bg-card border border-dashed border-border rounded-md px-3 py-3 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Välj fil (PDF, DOC)
                </button>
              )}
            </div>

            {/* Cover letter upload */}
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Personligt brev <span className="text-muted-foreground text-xs">(valfritt)</span>
              </label>
              <input
                ref={coverLetterInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => handleFileSelect(e, setCoverLetterFile)}
              />
              {coverLetterFile ? (
                <div className="flex items-center gap-2 bg-card border border-border rounded-md px-3 py-2">
                  <FileText className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground truncate flex-1">{coverLetterFile.name}</span>
                  <button
                    type="button"
                    onClick={() => { setCoverLetterFile(null); if (coverLetterInputRef.current) coverLetterInputRef.current.value = ""; }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => coverLetterInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 bg-card border border-dashed border-border rounded-md px-3 py-3 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Välj fil (PDF, DOC)
                </button>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Skickar...
                </>
              ) : (
                "Skicka ansökan"
              )}
            </Button>
          </form>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">E-post</h4>
                <p className="text-muted-foreground text-sm font-body">Lynx@beverskog.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Telefon</h4>
                <p className="text-muted-foreground text-sm font-body">+46708896588</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerContactSection;
