import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function SiteMotion() {
  const pathname = useLocation({ select: location => location.pathname });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.fromTo("[data-hero-reveal]", { y: 56, opacity: 0 }, { y: 0, opacity: 1, duration: 1.15, stagger: 0.13, ease: "power3.out", clearProps: "all" });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(element, { y: 48, opacity: 0 }, {
            y: 0, opacity: 1, duration: .9, ease: "power2.out", clearProps: "all",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((element) => {
          gsap.fromTo(element, { clipPath: "inset(0 0 100% 0)", scale: 1.055 }, {
            clipPath: "inset(0 0 0% 0)", scale: 1, duration: 1.25, ease: "power3.inOut", clearProps: "all",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((element) => {
          gsap.fromTo(Array.from(element.children), { y: 38, opacity: 0 }, {
            y: 0, opacity: 1, duration: .8, stagger: .12, ease: "power2.out", clearProps: "all",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((element) => {
          gsap.to(element, { yPercent: -9, ease: "none", scrollTrigger: { trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: .7 } });
        });
      });
      ScrollTrigger.refresh();
      cleanup = () => ctx.revert();
    });
    return () => { disposed = true; cleanup?.(); };
  }, [pathname]);
  return null;
}
