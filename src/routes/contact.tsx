import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/ContentPages";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Vision Safety India | Vision Safety India" },
    { name: "description", content: "Contact Vision Safety India in Verna, Goa for fire safety products, services and respiratory protection." },
    { property: "og:title", content: "Contact Vision Safety India | Vision Safety India" },
    { property: "og:description", content: "Contact Vision Safety India in Verna, Goa for fire safety products, services and respiratory protection." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});
