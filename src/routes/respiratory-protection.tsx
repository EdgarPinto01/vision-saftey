import { createFileRoute } from "@tanstack/react-router";
import { RespiratoryPage } from "@/components/ContentPages";

export const Route = createFileRoute("/respiratory-protection")({
  head: () => ({ meta: [
    { title: "Respiratory Protection | Vision Safety India" },
    { name: "description", content: "Explore Vsafe masks and Vision Air SCBA, PAPR, BA trolley and breathing cylinder services." },
    { property: "og:title", content: "Respiratory Protection | Vision Safety India" },
    { property: "og:description", content: "Explore Vsafe masks and Vision Air SCBA, PAPR, BA trolley and breathing cylinder services." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: RespiratoryPage,
});
