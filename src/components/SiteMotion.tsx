import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function SiteMotion() {
  const pathname = useLocation({ select: location => location.pathname });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    const tiltListeners: Array<() => void> = [];
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
        gsap.utils.toArray<HTMLElement>("[data-horizontal-scroll]").forEach((section) => {
          const track = section.querySelector<HTMLElement>("[data-horizontal-track]");
          const viewport = section.querySelector<HTMLElement>("[data-horizontal-viewport]");
          if (!track || !viewport) return;
          const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: { trigger: section, pin: true, scrub: 1, end: () => `+=${distance()}`, invalidateOnRefresh: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-line-reveal]").forEach((element) => {
          gsap.fromTo(element, { yPercent: 108, skewY: 3 }, {
            yPercent: 0, skewY: 0, duration: 1.05, ease: "power3.out", clearProps: "all",
            scrollTrigger: { trigger: element, start: "top 90%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((element) => {
          const target = Number(element.dataset["counter"] ?? "0");
          const suffix = element.dataset["counterSuffix"] ?? "";
          const counter = { value: 0 };
          gsap.to(counter, {
            value: target, duration: 1.6, ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 90%", once: true },
            onUpdate: () => { element.textContent = Math.round(counter.value) + suffix; },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-scale-reveal]").forEach((element) => {
          gsap.fromTo(element, { scale: .92, opacity: 0 }, {
            scale: 1, opacity: 1, duration: .9, ease: "power2.out", clearProps: "all",
            scrollTrigger: { trigger: element, start: "top 90%", once: true },
          });
        });

        const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (canHover) {
          gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach((element) => {
            const strength = Number(element.dataset["tiltStrength"] ?? "10");
            const quickX = gsap.quickTo(element, "rotateY", { duration: .5, ease: "power3.out" });
            const quickY = gsap.quickTo(element, "rotateX", { duration: .5, ease: "power3.out" });
            const lift = gsap.quickTo(element, "y", { duration: .5, ease: "power3.out" });
            const onMove = (event: PointerEvent) => {
              const rect = element.getBoundingClientRect();
              const px = (event.clientX - rect.left) / rect.width - .5;
              const py = (event.clientY - rect.top) / rect.height - .5;
              quickX(px * strength);
              quickY(py * -strength);
              lift(-4);
            };
            const onLeave = () => { quickX(0); quickY(0); lift(0); };
            element.style.transformStyle = "preserve-3d";
            element.style.willChange = "transform";
            element.addEventListener("pointermove", onMove);
            element.addEventListener("pointerleave", onLeave);
            tiltListeners.push(() => { element.removeEventListener("pointermove", onMove); element.removeEventListener("pointerleave", onLeave); });
          });
        }
      });
      ScrollTrigger.refresh();
      cleanup = () => { tiltListeners.forEach(remove => remove()); ctx.revert(); };
    });
    return () => { disposed = true; cleanup?.(); };
  }, [pathname]);
  return null;
}
