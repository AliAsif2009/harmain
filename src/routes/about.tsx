import { createFileRoute } from "@tanstack/react-router";
import fabricsImg from "@/assets/fabrics.jpg";
import { Reveal } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Haramain Royal Fabrics" },
      { name: "description", content: "The story of Haramain Royal Fabrics, a trusted name in men's unstitched fabric." },
      { property: "og:title", content: "About Haramain Royal Fabrics" },
      { property: "og:description", content: "A trusted name in men's unstitched fabric." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="animate-rise text-xs uppercase tracking-[0.4em] text-gold">Our Story</p>
      <h1 className="animate-rise mt-4 text-6xl md:text-7xl" style={{ animationDelay: "120ms" }}>Tradition, woven with care.</h1>
      <img src={fabricsImg} alt="Our fabric shop" className="animate-reveal mt-12 aspect-[16/9] w-full object-cover" />
      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {[
          ["Quality first", "We source only fabric we'd wear ourselves — tested for softness, strength and color."],
          ["Honest prices", "Fair rates for every customer, from a single suit to wholesale orders."],
          ["Personal service", "Visit us or message on WhatsApp — we'll help you find the perfect cloth."],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={i * 150}>
            <p className="font-display text-5xl text-gold">0{i + 1}</p>
            <h3 className="mt-2 text-2xl">{t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
