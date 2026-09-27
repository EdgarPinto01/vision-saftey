import { createFileRoute } from "@tanstack/react-router";
import { FarmsPage } from "@/components/ContentPages";

export const Route = createFileRoute("/vision-farms")({
  head: () => ({ meta: [
    { title: "Vision Farms | Vision Safety India" },
    { name: "description", content: "Learn about Vision Farms, Vision Safety India’s farming and community initiative." },
    { property: "og:title", content: "Vision Farms | Vision Safety India" },
    { property: "og:description", content: "Learn about Vision Farms, Vision Safety India’s farming and community initiative." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FarmsPage,
});
