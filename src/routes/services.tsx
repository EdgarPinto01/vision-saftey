import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/ContentPages";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Fire Safety Services | Vision Safety India" },
    { name: "description", content: "Explore consultancy, design, installation, testing, commissioning and compliance support from Vision Safety India." },
    { property: "og:title", content: "Fire Safety Services | Vision Safety India" },
    { property: "og:description", content: "Explore consultancy, design, installation, testing, commissioning and compliance support from Vision Safety India." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServicesPage,
});
