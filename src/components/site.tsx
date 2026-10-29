import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import weave from "@/assets/weave.jpg";
import { orderLink, type Product } from "@/lib/products";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setV(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`scroll-in ${v ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/collection", label: "Collection" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="leading-none">
          <span className="block font-display text-2xl font-semibold text-primary">Haramain</span>
          <span className="text-[10px] tracking-[0.35em] text-muted-foreground">ROYAL FABRICS</span>
        </Link>
        <nav className="hidden gap-10 text-sm tracking-widest uppercase md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full [&.active]:text-primary [&.active]:after:w-full">
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-sm uppercase tracking-widest" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t px-6 py-6 md:hidden animate-rise">
          {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display text-2xl">{n.label}</Link>)}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl">Haramain Royal Fabrics</p>
          <p className="mt-3 text-sm opacity-75">Premium unstitched shalwar kameez fabric for men.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-widest">Visit our shop</p>
          <p>Shop #G1-51, Ground Floor, Millennium Mall, Gulistan-e-Johar, Karachi</p>
          <a className="footer-contact-link block" href="tel:+923151272097">0315-1272097</a>
          <a className="footer-contact-link block" href="tel:+923372548782">0337-2548782</a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs uppercase tracking-widest">Explore</p>
          {nav.map((n) => <Link key={n.to} to={n.to} className="footer-contact-link block">{n.label}</Link>)}
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-widest">Find us</p>
          <iframe className="shop-map-frame" title="Haramain Royal Fabrics shop location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Millennium%20Mall%20Gulistan-e-Johar%20Karachi&output=embed" />
          <a className="footer-contact-link mt-3 inline-block text-sm" href="https://maps.app.goo.gl/hbSWfGXhtrKTy34BA" target="_blank" rel="noopener noreferrer">Open exact shop location on Google Maps</a>
        </div>
      </div>
      <p className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">© {new Date().getFullYear()} Haramain Royal Fabrics</p>
    </footer>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group product-tile">
      <div className="product-image-frame relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={`${p.name} ${p.fabric} fabric`}
          width={720}
          height={960}
          loading="lazy"
          decoding="async"
          className="product-image-photo"
        />
        {p.tag && <span className="absolute left-3 top-3 z-10 bg-background px-3 py-1 text-[10px] uppercase tracking-widest">{p.tag}</span>}
        <a className="product-order-overlay absolute inset-x-3 bottom-3 z-10 block bg-primary py-3 text-center text-xs uppercase tracking-widest text-primary-foreground" href={orderLink(p)} target="_blank" rel="noopener noreferrer" aria-label={`Order ${p.name} on WhatsApp`}>Order Now</a>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div><h3 className="font-display text-xl">{p.name}</h3><p className="text-xs uppercase tracking-widest text-muted-foreground">{p.fabric} · Unstitched</p></div>
        <p className="whitespace-nowrap font-medium">Rs {p.price.toLocaleString()}</p>
      </div>
    </article>
  );
}
