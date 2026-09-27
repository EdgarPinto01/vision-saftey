import { createFileRoute } from "@tanstack/react-router";
import { TeamPage } from "@/components/ContentPages";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Our Team | Vision Safety India" },
    { name: "description", content: "Meet the people and practical expertise behind Vision Safety India’s workplace protection services." },
    { property: "og:title", content: "Our Team | Vision Safety India" },
    { property: "og:description", content: "Meet the people and practical expertise behind Vision Safety India’s workplace protection services." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TeamPage,
});
