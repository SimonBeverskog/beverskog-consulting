import { TreePine, Bird, Leaf, Map, FileCheck, Shield, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: TreePine,
    title: "Naturvärdesinventering (NVI)",
    slug: "naturvardesinventering",
    description:
      "Inventering av naturvärden i skogs- och markområden med vedertagen metodik och hög precision.",
  },
  {
    icon: Bird,
    title: "Fågelinventeringar",
    slug: "fagelinventeringar",
    description:
      "Inventering av häckfåglar, rovfåglar och känsliga arter med ledande metodik och artkunskap.",
  },
  {
    icon: Leaf,
    title: "Artinventeringar & artskydd",
    slug: "artinventeringar",
    description:
      "Artinventeringar och bedömning av artskydd kopplat till skogliga åtgärder och planering.",
  },
  {
    icon: Map,
    title: "Nyckelbiotoper & naturvärden",
    slug: "nyckelbiotoper",
    description:
      "Bedömning av naturvärden och nyckelbiotoper som underlag för beslut och hänsyn.",
  },
  {
    icon: FileCheck,
    title: "Hänsyns- & åtgärdsförslag",
    slug: "hansynsforslag",
    description:
      "Konkreta förslag inför avverkning eller andra skogliga insatser med balans mellan produktion och naturvärden.",
  },
  {
    icon: Shield,
    title: "Strategisk rådgivning",
    slug: "strategisk-radgivning",
    description:
      "Rådgivning i planering och strategiskt naturvårdsarbete för företag och organisationer.",
  },
  {
    icon: BookOpen,
    title: "Utbildningar & föreläsningar",
    slug: "utbildningar",
    description:
      "Utbildningar och föreläsningar inom naturvård, biologisk mångfald och skogsbruk.",
  },
];
