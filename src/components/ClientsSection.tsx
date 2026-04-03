import { useEffect, useRef, useState } from "react";
import clientUaf from "@/assets/client-uaf.png";
import clientHolmen from "@/assets/client-holmen.webp";
import clientMellanskog from "@/assets/client-mellanskog.png";
import clientSca from "@/assets/client-sca.png";
import clientLudvig from "@/assets/client-ludvig.png";

const clients = [
  { name: "Uppsala Akademiförvaltning", logo: clientUaf },
  { name: "Holmen", logo: clientHolmen },
  { name: "Mellanskog", logo: clientMellanskog },
  { name: "SCA", logo: clientSca },
  { name: "Ludvig & Co", logo: clientLudvig },
];

const ClientsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -30% 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
            Förtroende
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Tidigare uppdragsgivare
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`transition-all duration-700 ${
                isVisible
                  ? "grayscale-0 opacity-100"
                  : "grayscale opacity-50"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
