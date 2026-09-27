import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/vision-safety-logo.png.asset.json";

const links = [
  { label: "About", to: "/about" }, { label: "Products", to: "/products" },
  { label: "Services", to: "/services" }, { label: "Respiratory Protection", to: "/respiratory-protection" },
  { label: "Projects", to: "/projects" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="overflow-x-hidden">
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="site-container flex h-[86px] items-center justify-between gap-6">
        <Link to="/" aria-label="Vision Safety India home" className="flex shrink-0 items-center"><img src={logoAsset.url} alt="Vision Safety" className="h-[66px] w-auto object-contain" width="62" height="66" /></Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">{links.map(item => <Link key={item.to} to={item.to} activeProps={{ className: "text-primary" }} className="nav-link text-[13px] font-medium">{item.label}</Link>)}</nav>
        <div className="ml-auto hidden items-center gap-5 md:flex"><a href="tel:+919326127464" className="flex items-center gap-2 text-[13px] font-semibold"><Phone className="size-4 text-primary" /> +91 93261 27464</a><Button asChild size="lg" className="h-11 rounded-sm px-5 shadow-none"><Link to="/contact">Get in touch <ArrowUpRight /></Link></Button></div>
        <Button className="md:hidden" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav aria-label="Mobile navigation" className="site-container flex flex-col border-t border-border py-4 md:hidden">{links.map(item => <Link className="border-b border-border py-3 text-sm font-medium" key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="py-3 text-sm font-semibold text-primary" to="/contact" onClick={() => setOpen(false)}>Get in touch →</Link></nav>}
    </header>
    <main>{children}</main>
    <footer className="bg-dark-surface text-on-dark"><div className="site-container border-t border-on-dark/20 pt-12"><div className="grid gap-10 pb-14 md:grid-cols-[1.7fr_1fr_1fr_1fr]"><div><Link to="/" className="font-display text-2xl font-semibold">VISION <span className="text-primary">SAFETY</span></Link><p className="mt-4 max-w-xs text-sm leading-6 text-on-dark-muted">Protecting Human Lives at Workplace since 1997.</p></div><div><h3 className="text-xs font-bold uppercase tracking-[.16em]">Explore</h3><div className="mt-5 flex flex-col gap-3 text-sm text-on-dark-muted"><Link to="/about" className="hover:text-on-dark">About us</Link><Link to="/products" className="hover:text-on-dark">Products</Link><Link to="/services" className="hover:text-on-dark">Services</Link><Link to="/team" className="hover:text-on-dark">Team</Link></div></div><div><h3 className="text-xs font-bold uppercase tracking-[.16em]">More</h3><div className="mt-5 flex flex-col gap-3 text-sm text-on-dark-muted"><Link to="/respiratory-protection" className="hover:text-on-dark">Respiratory Protection</Link><Link to="/projects" className="hover:text-on-dark">Projects</Link><Link to="/gallery" className="hover:text-on-dark">Image gallery</Link><Link to="/videos" className="hover:text-on-dark">Video gallery</Link><Link to="/vision-farms" className="hover:text-on-dark">Vision Farms</Link></div></div><div><h3 className="text-xs font-bold uppercase tracking-[.16em]">Based in Goa</h3><p className="mt-5 text-sm leading-6 text-on-dark-muted">Verna Industrial Estate<br />Goa, India</p><Link to="/contact" className="mt-4 inline-flex text-sm text-on-dark hover:text-primary">Contact us <ArrowUpRight className="ml-2 size-4" /></Link></div></div><div className="flex flex-col justify-between gap-4 border-t border-on-dark/20 py-6 text-xs text-on-dark-muted md:flex-row"><span>© {new Date().getFullYear()} Vision Safety India. All rights reserved.</span><Link to="/" className="hover:text-on-dark">Back to home ↑</Link></div></div></footer>
  </div>;
}
