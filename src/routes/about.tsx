import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/ContentPages";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Vision Safety India | Vision Safety India" },
    { name: "description", content: "Learn about Vision Safety India, a Goa-based fire safety and respiratory protection provider established in 1997." },
    { property: "og:title", content: "About Vision Safety India | Vision Safety India" },
    { property: "og:description", content: "Learn about Vision Safety India, a Goa-based fire safety and respiratory protection provider established in 1997." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});
