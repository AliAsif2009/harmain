import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Haramain Royal Fabrics" },
      { name: "description", content: "Visit our shop or order unstitched suits on WhatsApp." },
      { property: "og:title", content: "Contact Haramain Royal Fabrics" },
      { property: "og:description", content: "Visit our shop or order on WhatsApp." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <h1 className="animate-rise text-6xl md:text-7xl">Let's talk fabric.</h1>
      <p className="animate-rise mx-auto mt-6 max-w-lg text-muted-foreground" style={{ animationDelay: "120ms" }}>
        Message us for prices, wholesale orders or to check a color in stock.
      </p>
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
        className="animate-rise mt-10 inline-block bg-primary px-10 py-5 text-xs uppercase tracking-widest text-primary-foreground transition hover:bg-foreground" style={{ animationDelay: "240ms" }}>
        Chat on WhatsApp
      </a>
      <div className="animate-rise mt-20 grid gap-8 border-t pt-12 text-left md:grid-cols-3" style={{ animationDelay: "360ms" }}>
        <div><p className="text-xs uppercase tracking-widest text-gold">Address</p><p className="mt-2 font-display text-2xl">Shop #G1-51, Ground Floor, Millennium Mall, Gulistan-e-Johar, Karachi</p></div>
        <div><p className="text-xs uppercase tracking-widest text-gold">Contact</p><a className="mt-2 block font-display text-2xl" href="tel:+923151272097">0315-1272097</a><a className="block font-display text-2xl" href="tel:+923372548782">0337-2548782</a></div>
        <div><p className="text-xs uppercase tracking-widest text-gold">Location</p><a className="mt-2 inline-block underline underline-offset-4" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/hbSWfGXhtrKTy34BA">Get directions on Google Maps</a></div>
      </div>
    </section>
  );
}
