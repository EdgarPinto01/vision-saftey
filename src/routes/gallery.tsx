import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/ContentPages";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Image Gallery | Vision Safety India" },
    { name: "description", content: "Browse images of fire safety equipment and people at work with Vision Safety India." },
    { property: "og:title", content: "Image Gallery | Vision Safety India" },
    { property: "og:description", content: "Browse images of fire safety equipment and people at work with Vision Safety India." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: GalleryPage,
});
