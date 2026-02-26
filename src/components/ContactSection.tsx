import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Meddelande skickat!",
      description: "Tack för att du hör av dig. Jag återkommer så snart jag kan."
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
            Hör av dig
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Kontakt
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                placeholder="Ditt namn"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                maxLength={100}
                className="bg-card" />

            </div>
            <div>
              <Input
                type="email"
                placeholder="E-postadress"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                maxLength={255}
                className="bg-card" />

            </div>
            <div>
              <Input
                type="tel"
                placeholder="Telefonnummer"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={20}
                className="bg-card" />

            </div>
            <div>
              <Textarea
                placeholder="Hur kan jag hjälpa dig?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                maxLength={1000}
                rows={5}
                className="bg-card resize-none" />

            </div>
            <Button type="submit" size="lg" className="w-full">
              Skicka meddelande
            </Button>
          </form>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">E-post</h4>
                <p className="text-muted-foreground text-sm font-body">Lynxbe@hotmail.com
                </p>
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

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Plats</h4>
                <p className="text-muted-foreground text-sm font-body">
                  Sverige
                  <br />
                  Tillgänglig för uppdrag i hela landet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default ContactSection;