import { createFileRoute } from "@tanstack/react-router";
import { VideosPage } from "@/components/ContentPages";

export const Route = createFileRoute("/videos")({
  head: () => ({ meta: [
    { title: "Video Gallery | Vision Safety India" },
    { name: "description", content: "Watch for upcoming PAPR demonstrations and installation videos from Vision Safety India." },
    { property: "og:title", content: "Video Gallery | Vision Safety India" },
    { property: "og:description", content: "Watch for upcoming PAPR demonstrations and installation videos from Vision Safety India." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: VideosPage,
});
