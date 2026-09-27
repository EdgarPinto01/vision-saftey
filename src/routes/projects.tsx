import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/ContentPages";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects & Field Work | Vision Safety India" },
    { name: "description", content: "See how Vision Safety India approaches workplace fire safety and respiratory protection in practice." },
    { property: "og:title", content: "Projects & Field Work | Vision Safety India" },
    { property: "og:description", content: "See how Vision Safety India approaches workplace fire safety and respiratory protection in practice." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProjectsPage,
});
