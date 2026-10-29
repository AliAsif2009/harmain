import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import model1 from "@/assets/model-look-1.jpg";
import model2 from "@/assets/model-look-2.jpg";
import model3 from "@/assets/model-look-3.jpg";
import model4 from "@/assets/model-look-4.jpg";
import fabricsImg from "@/assets/fabrics.jpg";
import { ProductCard, Reveal } from "@/components/site";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Haramain Royal Fabrics — Unstitched Shalwar Kameez" },
      { name: "description", content: "Premium unstitched men's kurta shalwar fabric in rich colors: cotton, wash & wear, boski and karandi." },
      { property: "og:title", content: "Haramain Royal Fabrics" },
      { property: "og:description", content: "Premium unstitched men's shalwar kameez fabric." },
    ],
  }),
  component: Index,
});

const heroLooks = [
  { src: hero, alt: "Model wearing a white shalwar kameez" },
  { src: model1, alt: "Model wearing a white shalwar kameez" },
  { src: model2, alt: "Model wearing a black shalwar kameez" },
  { src: model3, alt: "Model wearing a beige shalwar kameez" },
  { src: model4, alt: "Model wearing a pale blue shalwar kameez" },
];
function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="animate-rise text-xs uppercase tracking-[0.4em] text-gold">Est. Quality · Since Generations</p>
          <h1 className="hero-title-entrance mt-6 text-6xl leading-[0.95] md:text-8xl">
            <span className="hero-title-line" style={{ animationDelay: "3.55s" }}>Royal cloth</span>
            <em className="hero-title-line text-primary" style={{ animationDelay: "3.8s" }}>for every</em>
            <span className="hero-title-line" style={{ animationDelay: "4.05s" }}>occasion.</span>
          </h1>
          <p className="animate-rise mt-8 max-w-md text-muted-foreground" style={{ animationDelay: "260ms" }}>
            Hand-picked unstitched fabric for men's kurta shalwar — from crisp summer cottons to warm winter karandi.
          </p>
          <div className="animate-rise mt-10 flex gap-4" style={{ animationDelay: "400ms" }}>
            <Link to="/collection" className="bg-primary px-8 py-4 text-xs uppercase tracking-widest text-primary-foreground transition hover:bg-foreground">Shop Collection</Link>
            <Link to="/about" className="border border-foreground px-8 py-4 text-xs uppercase tracking-widest transition hover:bg-foreground hover:text-background">Our Story</Link>
          </div>
        </div>
        <div className="hero-look-window" aria-label="Shalwar kameez styles in different colors">
          <div className="hero-look-slideshow">
            {heroLooks.map((look, i) => (
              <div className="hero-look-slide" key={i} style={{ animationDelay: `${i * 5}s` }}>
                <img src={look.src} alt={look.alt} loading={i === 0 ? "eager" : "lazy"} />
              </div>
            ))}
          </div>
          <div className="hero-slide-dots" aria-hidden="true">{heroLooks.map((_, i) => <span key={i} />)}</div>
          <div className="hero-look-caption">Signature colors · Timeless style</div>
        </div>
      </section>

      <div className="overflow-hidden border-y bg-primary py-5 text-primary-foreground">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl italic">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Egyptian Cotton", "Wash & Wear", "Boski Silk", "Karandi", "Khaddar", "Latha Cotton"].map((t) => (
              <span key={k + t}>{t} <span className="text-gold">✦</span></span>
            )),
          )}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="mb-14 flex items-end justify-between">
          <h2 className="text-5xl">New arrivals</h2>
          <Link to="/collection" className="text-xs uppercase tracking-widest underline underline-offset-8">View all</Link>
        </Reveal>
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 12).map((p, i) => <Reveal key={p.id} delay={(i % 4) * 90}><ProductCard p={p} /></Reveal>)}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <Reveal><img src={fabricsImg} alt="Fabric stacks in our shop" className="fabric-editorial-image aspect-[4/3] w-full object-cover" loading="lazy" /></Reveal>
        <Reveal delay={150}>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">The Craft</p>
          <h2 className="mt-4 text-5xl">Fabric chosen thread by thread.</h2>
          <p className="mt-6 text-muted-foreground">Every suit is 4.5 meters of carefully selected cloth, ready for your tailor. Soft hand-feel, lasting color and a finish fit for Eid, weddings and every day.</p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t pt-8">
            {[["4.5m", "Per suit"], ["100%", "Colorfast"], ["1000s", "Happy clients"]].map(([a, b]) => (
              <div key={b}><p className="font-display text-3xl text-primary">{a}</p><p className="text-xs uppercase tracking-widest text-muted-foreground">{b}</p></div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
