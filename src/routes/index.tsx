import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Award, Briefcase, Check, ChevronRight, CircleCheck, Flame, HardHat, Mail, MapPin, Menu, Phone, ShieldCheck, Users, Wind, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";
import technicianImage from "@/assets/technician-workshop.jpg";
import equipmentImage from "@/assets/equipment-shelf.jpg";
import respiratoryImage from "@/assets/respiratory.jpg";
import logoAsset from "@/assets/vision-safety-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Vision Safety India | Fire & Respiratory Protection" },
    { name: "description", content: "End-to-end fire safety and respiratory protection solutions since 1997. Consultancy, products, installation and compliance from Verna, Goa." },
    { property: "og:title", content: "Vision Safety India | Fire & Respiratory Protection" },
    { property: "og:description", content: "Protecting human lives at work since 1997. Explore fire safety products, services and respiratory protection solutions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Respiratory Protection", href: "#respiratory" },
  { label: "Projects", href: "#projects" },
];

const products = [
  { number: "01", title: "Fire extinguishers", detail: "Portable protection for diverse workplace environments.", icon: Flame },
  { number: "02", title: "Hydrants & hose reels", detail: "Reliable first-response equipment for your facility.", icon: ShieldCheck },
  { number: "03", title: "Fire alarm systems", detail: "Early warning and detection when every second counts.", icon: CircleCheck },
  { number: "04", title: "Breathing apparatus", detail: "Equipment built for critical air-supply situations.", icon: Wind },
];

const services = [
  { number: "01", title: "Consultancy & design", detail: "Practical, site-specific fire protection planning." },
  { number: "02", title: "Supply & installation", detail: "From the right equipment to a properly installed system." },
  { number: "03", title: "Testing & commissioning", detail: "Verifying systems are ready to perform when needed." },
  { number: "04", title: "Maintenance & compliance", detail: "Ongoing servicing and support for NOC requirements." },
];

const marqueeItems = ["Consultancy & Design", "Supply & Installation", "Testing & Commissioning", "Maintenance & Compliance", "Fire Safety Systems", "Respiratory Protection"];

const stats = [
  { icon: Briefcase, value: "Tailored", suffix: "", label: "Projects, not templates" },
  { icon: Users, value: "On-site", suffix: "", label: "Team, not call centres" },
  { icon: Award, value: "25", suffix: "+", label: "Years in business" },
];

const cases = [
  { type: "Our facility", title: "Where protection starts, in Verna, Goa", image: heroImage },
  { type: "Service & maintenance", title: "On-site expertise, where it matters", image: technicianImage },
  { type: "Safety equipment", title: "The right equipment for every risk", image: equipmentImage },
  { type: "Breathing air", title: "Air you can depend on", image: respiratoryImage },
];

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="max-w-3xl"><span className="eyebrow">{eyebrow}</span><div className="mt-6 overflow-hidden"><h2 data-line-reveal className="section-title">{title}</h2></div>{description && <p data-reveal className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">{description}</p>}</div>;
}

function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const moveCases = (direction: number) => scrollRef.current?.scrollBy({ left: direction * 440, behavior: "smooth" });

  return <>
    <main id="top">
      <section className="relative flex min-h-[680px] items-end overflow-hidden bg-dark-surface text-on-dark md:min-h-[760px]">
        <img src={heroImage} alt="Vision Safety India's office and workshop building in Verna Industrial Estate, Goa" data-drift className="photo-treatment absolute inset-0 h-full w-full object-cover object-center" width="1536" height="1024" />
        <div className="hero-shade absolute inset-0" />
        <div className="hero-vignette absolute inset-0" />
        <div className="grain-overlay absolute inset-0" />
        <div className="pointer-events-none absolute inset-5 hidden border border-on-dark/15 md:block lg:inset-8" />
        <div className="site-container relative z-10 pb-20 pt-32 md:pb-28">
          <div className="max-w-[760px]">
            <span data-hero-reveal className="eyebrow rounded-full border border-on-dark/20 bg-on-dark/5 px-4 py-2 !text-on-dark backdrop-blur-sm before:!bg-primary">ESTABLISHED IN GOA · 1997</span>
            <h1 data-hero-reveal className="mt-8 font-display text-[clamp(46px,6vw,88px)] font-medium leading-[1.03] tracking-[-0.01em]">Protection for what <span className="relative text-primary [text-shadow:0_0_54px_oklch(0.52_0.205_25/.4)]">matters most.</span></h1>
            <p data-hero-reveal className="mt-7 max-w-[560px] text-base leading-7 text-on-dark/85 md:text-lg md:leading-8">End-to-end fire safety and respiratory protection, engineered around the people and places you depend on.</p>
            <div data-hero-reveal className="mt-10 flex flex-wrap items-center gap-7">
              <Button asChild size="lg" className="group h-13 rounded-sm px-7 shadow-none"><a href="/services">Explore our solutions <ArrowUpRight className="arrow-nudge" /></a></Button>
              <a href="/about" className="line-link text-on-dark">Discover our story <ArrowDown className="size-4" /></a>
            </div>
          </div>
        </div>
        <div data-hero-reveal className="absolute bottom-9 right-6 z-10 hidden max-w-[280px] rounded-sm border border-on-dark/15 bg-dark-surface/40 p-6 backdrop-blur-md lg:right-10 lg:block">
          <p className="text-[11px] font-semibold uppercase tracking-[.16em] text-on-dark-muted">Recognised by</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-sm font-medium">
            <span>FSAI</span><span className="text-on-dark-muted">·</span><span>NFPA</span><span className="text-on-dark-muted">·</span><span>National Safety Council</span>
          </div>
        </div>
        <div className="absolute bottom-9 left-6 z-10 hidden items-center gap-3 md:flex lg:left-10">
          <span className="scroll-cue-line" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-on-dark-muted">Scroll</span>
        </div>
      </section>

      <section className="bg-dark-surface text-on-dark">
        <div className="marquee-row overflow-hidden border-b border-on-dark/10 py-4">
          <div className="marquee-track flex w-max items-center gap-12">
            {[...marqueeItems, ...marqueeItems].map((item, i) => <span key={i} className="flex shrink-0 items-center gap-12 text-xs font-semibold uppercase tracking-[.2em] text-on-dark-muted"><span className="text-primary">✦</span>{item}</span>)}
          </div>
        </div>
        <div data-stagger className="site-container grid grid-cols-1 divide-y divide-on-dark/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map(({ icon: Icon, value, suffix, label }) => <div key={label} className="group flex items-start gap-5 py-9 first:pt-9 sm:px-10 sm:py-14 sm:first:pl-0 sm:last:pr-0">
            <Icon className="icon-pop mt-1 size-7 shrink-0 text-primary" strokeWidth={1.3} />
            <div><div className="font-display text-3xl font-medium transition-colors duration-300 group-hover:text-primary md:text-4xl">{value === "25" ? <><span data-counter="25">25</span><span className="text-primary">{suffix}</span></> : value}</div><p className="mt-2 text-xs uppercase tracking-[.14em] text-on-dark-muted md:text-sm">{label}</p></div>
          </div>)}
        </div>
      </section>

      <section id="about" className="section-space scroll-mt-20"><div className="site-container grid items-center gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-24"><div data-reveal><SectionIntro eyebrow="Who we are" title="A safer workplace starts with the right partner." description="Since 1997, Vision Safety India has helped organisations protect their people through thoughtful safety planning, dependable equipment and hands-on support." /><p className="mt-6 max-w-xl leading-7 text-muted-foreground">From our base in Verna, Goa, we bring consultancy, design, supply, installation, testing and compliance together under one roof.</p><a className="line-link mt-9 text-primary" href="/contact">Talk to our team <ArrowUpRight className="size-4" /></a></div><div data-image-reveal className="group relative shine overflow-hidden"><img src={technicianImage} alt="Safety technicians inspecting a fire protection control panel" className="photo-treatment aspect-[1.22] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" width="1200" height="912" loading="lazy" /><div className="absolute bottom-0 left-0 bg-primary px-5 py-4 text-sm font-medium text-primary-foreground transition-transform duration-500 group-hover:-translate-y-1 md:px-7">Protecting human lives at workplace.</div></div></div></section>

      <section className="border-y border-border bg-surface py-12 md:py-16"><div data-stagger className="site-container grid gap-8 md:grid-cols-3 md:gap-0"><div className="card-lift border border-transparent px-1 py-1 md:border-r md:border-border md:pr-10"><span className="text-xs font-bold uppercase tracking-[.17em] text-primary">01 / Mission</span><p className="mt-4 text-lg leading-7">Making reliable safety solutions accessible, practical and built to last.</p></div><div className="card-lift border border-transparent px-1 py-1 md:border-r md:border-border md:px-10"><span className="text-xs font-bold uppercase tracking-[.17em] text-primary">02 / Vision</span><p className="mt-4 text-lg leading-7">Workplaces where every person can do their job with confidence.</p></div><div className="card-lift border border-transparent px-1 py-1 md:pl-10"><span className="text-xs font-bold uppercase tracking-[.17em] text-primary">03 / Credentials</span><p className="mt-4 text-lg leading-7">Connected to the wider safety community through FSAI, NFPA and NSC.</p></div></div></section>

      <section data-reveal id="products" className="section-space scroll-mt-20"><div className="site-container"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionIntro eyebrow="Our products" title="Equipment you can count on." description="A considered range of essentials to help protect people, assets and operations." /><Link to="/products" className="line-link text-primary">View all products <ArrowUpRight className="size-4" /></Link></div><div data-stagger className="perspective-host mt-12 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-4">{products.map(item => <article data-tilt data-tilt-strength="6" key={item.number} className="card-lift group relative z-0 flex min-h-[300px] flex-col justify-between border-r border-b border-border bg-background p-7 hover:z-10 hover:bg-surface md:min-h-[340px]"><div className="flex items-start justify-between"><item.icon className="icon-pop size-9 stroke-[1.25] text-primary" /><span className="text-xs text-muted-foreground">{item.number} / 04</span></div><div><h3 className="font-display text-2xl font-medium">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p><Link to="/products" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.13em] text-primary"><span className="arrow-nudge inline-flex items-center gap-2">Explore <ArrowUpRight className="size-4" /></span></Link></div></article>)}</div></div></section>

      <section data-reveal id="services" className="section-space scroll-mt-20 bg-dark-surface text-on-dark"><div className="site-container"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><span className="eyebrow">Our services</span><div className="mt-6 overflow-hidden"><h2 data-line-reveal className="section-title">From first plan to final check.</h2></div><p className="mt-6 max-w-md leading-7 text-on-dark-muted">One experienced team alongside you at every step, from designing the right system to keeping it ready for tomorrow.</p><Button asChild variant="outline" className="group mt-9 h-11 rounded-sm border-on-dark/40 bg-transparent px-6 text-on-dark shadow-none hover:bg-on-dark hover:text-foreground"><a href="/contact">Discuss your project <ArrowUpRight className="arrow-nudge" /></a></Button></div><div data-stagger className="border-t border-on-dark/20">{services.map(item => <div key={item.number} className="group grid grid-cols-[38px_1fr_24px] items-start gap-3 border-b border-on-dark/20 py-6 transition-all duration-300 hover:border-primary/50 hover:pl-3 md:grid-cols-[54px_1fr_24px] md:py-7"><span className="pt-1 text-xs text-primary transition-transform duration-300 group-hover:scale-110">{item.number}</span><div><h3 className="font-display text-xl font-medium transition-colors duration-300 group-hover:text-primary md:text-2xl">{item.title}</h3><p className="mt-2 text-sm leading-6 text-on-dark-muted">{item.detail}</p></div><ChevronRight className="arrow-nudge mt-1 size-5 text-primary" /></div>)}</div></div><Link to="/services" className="line-link mt-10 text-on-dark">Explore all services <ArrowUpRight className="size-4" /></Link></div></section>

      <section data-reveal id="respiratory" className="section-space scroll-mt-20"><div className="site-container"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-20"><SectionIntro eyebrow="Specialist solutions" title="Respiratory Protection" description="The right breathing protection for the work at hand, from everyday environments to demanding operations." /><div data-image-reveal className="group shine overflow-hidden"><img src={respiratoryImage} alt="Respiratory protection including breathing apparatus, PAPR and masks" className="photo-treatment aspect-[1.8] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" width="1200" height="912" loading="lazy" /></div></div><div data-stagger className="perspective-host mt-12 grid gap-5 md:grid-cols-2"><article data-tilt data-tilt-strength="5" className="card-lift group border border-border bg-surface p-8 md:p-10"><div className="flex items-start justify-between"><span className="font-display text-3xl font-semibold">Vsafe<span className="text-primary">.</span></span><Wind className="icon-pop size-7 stroke-[1.3] text-primary" /></div><p className="mt-8 max-w-sm leading-7 text-muted-foreground">Everyday respiratory protection designed around comfort and confidence.</p><div className="mt-9 border-t border-border pt-5 text-sm font-medium"><Check className="mr-2 inline size-4 text-primary" /> N95 masks</div></article><article data-tilt data-tilt-strength="5" className="card-lift group border border-border bg-surface p-8 md:p-10"><div className="flex items-start justify-between"><span className="font-display text-3xl font-semibold">Vision Air<span className="text-primary">.</span></span><ShieldCheck className="icon-pop size-7 stroke-[1.3] text-primary" /></div><p className="mt-8 max-w-sm leading-7 text-muted-foreground">Specialist breathing-air equipment and support for high-stakes work.</p><div className="mt-9 grid gap-3 border-t border-border pt-5 text-sm font-medium sm:grid-cols-2">{["SCBA", "BA trolley", "NIOSH-approved PAPR", "Breathing cylinder refilling"].map(x => <span key={x}><Check className="mr-2 inline size-4 text-primary" />{x}</span>)}</div></article></div><Link to="/respiratory-protection" className="line-link mt-10 text-primary">Explore respiratory protection <ArrowUpRight className="size-4" /></Link></div></section>

      <section data-reveal className="section-space border-y border-border bg-surface"><div className="site-container"><SectionIntro eyebrow="Built for your environment" title="Protection wherever work happens." /><div data-stagger className="perspective-host mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{[{name:"Industrial",icon:HardHat,text:"Safeguarding people and processes across demanding facilities."},{name:"Marine",icon:Wind,text:"Practical solutions for environments where readiness matters."},{name:"Commercial",icon:ShieldCheck,text:"Thoughtful protection for the spaces people share every day."},{name:"Healthcare",icon:CircleCheck,text:"Dependable safety planning for essential environments."}].map(item => <div key={item.name} data-tilt data-tilt-strength="5" className="card-lift group relative z-0 min-h-[235px] bg-background p-7 hover:z-10"><item.icon className="icon-pop size-8 stroke-[1.3] text-primary" /><h3 className="mt-10 font-display text-xl font-medium">{item.name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></div>)}</div></div></section>

      <section data-reveal id="projects" className="section-space scroll-mt-20"><div className="site-container"><div className="flex items-end justify-between gap-6"><SectionIntro eyebrow="In the field" title="Safety, in practice." description="A look at the spaces, equipment and people behind the work." /><div className="hidden gap-2 sm:flex"><Button variant="outline" size="icon" className="size-11 rounded-full shadow-none" aria-label="Previous projects" onClick={() => moveCases(-1)}><ArrowLeft /></Button><Button size="icon" className="size-11 rounded-full shadow-none" aria-label="Next projects" onClick={() => moveCases(1)}><ArrowRight /></Button></div></div><div ref={scrollRef} data-stagger className="case-scroll -mr-6 mt-11 flex gap-5 overflow-x-auto pr-6 md:-mr-0 md:pr-0">{cases.map(item => <article key={item.title} className="case-item group min-w-[82vw] sm:min-w-[390px] lg:min-w-[410px]"><div className="shine relative aspect-[1.25] overflow-hidden bg-surface"><img src={item.image} alt={item.title} className="photo-treatment h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" width="1200" height="912" loading="lazy" /><div className="image-shade absolute inset-0 pointer-events-none" /><span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[.15em] text-on-dark">{item.type}</span></div><h3 className="mt-5 font-display text-xl font-medium transition-colors duration-300 group-hover:text-primary">{item.title}</h3></article>)}</div><div className="mt-6 flex justify-end gap-2 sm:hidden"><Button variant="outline" size="icon" className="size-11 rounded-full shadow-none" aria-label="Previous projects" onClick={() => moveCases(-1)}><ArrowLeft /></Button><Button size="icon" className="size-11 rounded-full shadow-none" aria-label="Next projects" onClick={() => moveCases(1)}><ArrowRight /></Button></div><Link to="/projects" className="line-link mt-10 text-primary">View projects <ArrowUpRight className="size-4" /></Link></div></section>

      <section className="border-y border-border bg-surface py-16 md:py-20"><div className="site-container grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center"><div data-reveal><span className="eyebrow">Connected to standards</span><h2 className="mt-5 font-display text-3xl font-medium md:text-4xl">A commitment to doing it right.</h2></div><div data-scale-reveal className="grid grid-cols-3 border-l border-border">{[["FSAI","Professional member"],["NFPA","Member"],["NSC","Life member"]].map(([code, label], i) => <div key={code} className={`badge-glow border-border px-4 py-5 text-center md:px-7 ${i < 2 ? "border-r" : ""}`}><span className="font-display text-2xl font-semibold md:text-4xl">{code}</span><p className="mt-3 text-[11px] text-muted-foreground">{label}</p></div>)}</div></div></section>

      <section data-reveal className="py-14"><Link to="/vision-farms" className="group site-container flex flex-col justify-between gap-5 border-l-2 border-primary py-3 pl-6 transition-colors duration-300 hover:bg-surface md:flex-row md:items-center md:pl-8"><div><span className="text-xs font-bold uppercase tracking-[.16em] text-primary">Beyond the workplace</span><h2 className="mt-3 font-display text-2xl font-medium">Vision Farms</h2><p className="mt-2 text-sm text-muted-foreground">Our small contribution to a greener, more sustainable future.</p></div><span className="line-link text-primary">Discover Vision Farms <ArrowUpRight className="arrow-nudge size-4" /></span></Link></section>

      <section data-reveal id="contact" className="scroll-mt-20 bg-dark-surface py-20 text-on-dark md:py-28"><div className="site-container grid gap-12 lg:grid-cols-[1fr_.8fr] lg:gap-24"><div><span className="eyebrow">Let's talk safety</span><div className="mt-6 max-w-2xl overflow-hidden"><h2 data-line-reveal className="font-display text-[clamp(40px,5vw,68px)] font-medium leading-[1.1]">Ready to make safety a priority?</h2></div><p className="mt-6 max-w-lg leading-7 text-on-dark-muted">Tell us what you need. We'll help you find the right way forward.</p><Button asChild size="lg" className="group mt-9 h-12 rounded-sm px-7 shadow-none"><a href="mailto:info.visionsafetyindia@gmail.com?subject=Safety%20solutions%20enquiry">Send an enquiry <ArrowUpRight className="arrow-nudge" /></a></Button></div><div data-stagger className="grid content-center gap-8 border-t border-on-dark/20 pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0"><div className="group flex gap-4"><MapPin className="icon-pop mt-1 size-5 shrink-0 text-primary" /><div><p className="text-xs uppercase tracking-[.15em] text-on-dark-muted">Visit us</p><p className="mt-2">Verna Industrial Estate, Goa, India</p></div></div><div className="group flex gap-4"><Phone className="icon-pop mt-1 size-5 shrink-0 text-primary" /><div><p className="text-xs uppercase tracking-[.15em] text-on-dark-muted">Call us</p><div className="mt-2 flex flex-col gap-1"><a href="tel:+919326127464" className="w-fit transition-colors hover:text-primary">+91 93261 27464</a><a href="tel:+919326127199" className="w-fit transition-colors hover:text-primary">+91 93261 27199</a><a href="tel:+917798988905" className="w-fit transition-colors hover:text-primary">+91 77989 88905</a></div></div></div><div className="group flex gap-4"><Mail className="icon-pop mt-1 size-5 shrink-0 text-primary" /><div><p className="text-xs uppercase tracking-[.15em] text-on-dark-muted">Write to us</p><a href="mailto:info.visionsafetyindia@gmail.com" className="mt-2 block w-fit break-all transition-colors hover:text-primary">info.visionsafetyindia@gmail.com</a><p className="mt-2 text-sm text-on-dark-muted">9:00 AM – 6:00 PM</p></div></div></div></div></section>
    </main>

  </>;
}
