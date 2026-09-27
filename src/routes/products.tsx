import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/ContentPages";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Fire Safety Products | Vision Safety India" },
    { name: "description", content: "Explore Vision Safety India fire extinguishers, hydrants, hose reels, alarms and breathing apparatus." },
    { property: "og:title", content: "Fire Safety Products | Vision Safety India" },
    { property: "og:description", content: "Explore Vision Safety India fire extinguishers, hydrants, hose reels, alarms and breathing apparatus." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProductsPage,
});
