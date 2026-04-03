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
  return (
    <section className="py-16 md:py-24 bg-muted/30">
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
          {clients.map((client) => (
            <div
              key={client.name}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
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
