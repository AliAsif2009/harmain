import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard, Reveal } from "@/components/site";
import { fabrics, products } from "@/lib/products";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Collection — Haramain Royal Fabrics" },
      { name: "description", content: "Browse unstitched shalwar kameez fabric in 12 colors and 6 fabric types." },
      { property: "og:title", content: "Collection — Haramain Royal Fabrics" },
      { property: "og:description", content: "Unstitched men's suits in cotton, boski, karandi and more." },
    ],
  }),
  component: Collection,
});

function Collection() {
  const [f, setF] = useState("All");
  const list = f === "All" ? products : products.filter((p) => p.fabric === f);
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="animate-rise text-6xl md:text-7xl">The Collection</h1>
      <div className="animate-rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "150ms" }}>
        {fabrics.map((x) => (
          <button key={x} onClick={() => setF(x)}
            className={`border px-5 py-2 text-xs uppercase tracking-widest transition ${f === x ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground"}`}>
            {x}
          </button>
        ))}
      </div>
      <div key={f} className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p, i) => <Reveal key={p.id} delay={(i % 4) * 100}><ProductCard p={p} /></Reveal>)}
      </div>
    </section>
  );
}
