// Vite bundles these images so product photos work on every route and in production.
import productImage_brown_earth from "@/assets/products/brown-earth.jpg";
import productImage_charcoal_grey from "@/assets/products/charcoal-grey.jpg";
import productImage_desert_beige from "@/assets/products/desert-beige.jpg";
import productImage_ivory_cream from "@/assets/products/ivory-cream.jpg";
import productImage_maroon_velvet from "@/assets/products/maroon-velvet.jpg";
import productImage_midnight_black from "@/assets/products/midnight-black.jpg";
import productImage_mint_breeze from "@/assets/products/mint-breeze.jpg";
import productImage_mustard_gold from "@/assets/products/mustard-gold.jpg";
import productImage_olive_green from "@/assets/products/olive-green.jpg";
import productImage_pearl_white from "@/assets/products/pearl-white.jpg";
import productImage_royal_navy from "@/assets/products/royal-navy.jpg";
import productImage_sky_blue from "@/assets/products/sky-blue.jpg";

export type Product = {
  id: string;
  name: string;
  fabric: string;
  color: string;
  price: number;
  tag?: string;
  description: string;
  image: string;
};

export const WHATSAPP = "923151272097";

export const products: Product[] = [
  { id: "1", name: "Pearl White", fabric: "Egyptian Cotton", color: "oklch(0.97 0.008 90)", price: 6500, image: productImage_pearl_white, description: "Egyptian cotton is made by spinning cotton fibers into yarn and weaving them into a breathable cloth with a smooth hand-feel.", tag: "Bestseller" },
  { id: "2", name: "Ivory Cream", fabric: "Wash & Wear", color: "oklch(0.93 0.03 85)", price: 4800, image: productImage_ivory_cream, description: "Wash & Wear fabric is woven from easy-care yarns and finished for a neat drape and reduced everyday ironing." },
  { id: "3", name: "Sky Blue", fabric: "Latha Cotton", color: "oklch(0.82 0.06 230)", price: 5200, image: productImage_sky_blue, description: "Latha cotton uses tightly woven cotton yarn for a crisp, smooth cloth that suits traditional tailoring.", tag: "New" },
  { id: "4", name: "Royal Navy", fabric: "Boski Silk", color: "oklch(0.3 0.08 260)", price: 8900, image: productImage_royal_navy, description: "Boski-style silk fabric is made from fine yarns woven for a soft feel and flowing drape." },
  { id: "5", name: "Charcoal Grey", fabric: "Wash & Wear", color: "oklch(0.38 0.01 250)", price: 4900, image: productImage_charcoal_grey, description: "Wash & Wear cloth is woven and finished for easy everyday care, with a smooth surface and clean fall." },
  { id: "6", name: "Desert Beige", fabric: "Karandi", color: "oklch(0.8 0.05 75)", price: 7200, image: productImage_desert_beige, description: "Karandi cloth is woven from textured yarns to create a substantial fabric suited to cooler weather.", tag: "Winter" },
  { id: "7", name: "Maroon Velvet", fabric: "Boski Silk", color: "oklch(0.35 0.11 18)", price: 9500, image: productImage_maroon_velvet, description: "Boski-style silk fabric uses fine yarns for a smooth, soft finish and elegant drape." },
  { id: "8", name: "Olive Green", fabric: "Khaddar", color: "oklch(0.5 0.07 120)", price: 5600, image: productImage_olive_green, description: "Khaddar is traditionally made by weaving yarns into a more textured, substantial fabric." },
  { id: "9", name: "Mustard Gold", fabric: "Latha Cotton", color: "oklch(0.72 0.13 85)", price: 5400, image: productImage_mustard_gold, description: "Latha cotton is created using closely woven cotton yarns for a crisp, traditional finish." },
  { id: "10", name: "Midnight Black", fabric: "Wash & Wear", color: "oklch(0.18 0.01 250)", price: 5000, image: productImage_midnight_black, description: "Wash & Wear fabric is woven from easy-care yarns and finished to keep daily dressing simple." },
  { id: "11", name: "Mint Breeze", fabric: "Egyptian Cotton", color: "oklch(0.88 0.05 165)", price: 6300, image: productImage_mint_breeze, description: "Egyptian cotton cloth is created from spun cotton yarns woven into a soft, breathable fabric." },
  { id: "12", name: "Brown Earth", fabric: "Khaddar", color: "oklch(0.45 0.06 55)", price: 5800, image: productImage_brown_earth, description: "Khaddar fabric is woven for a textured hand-feel and a more substantial drape for cooler days.", tag: "Winter" },
];

export const fabrics = ["All", ...Array.from(new Set(products.map((p) => p.fabric)))];

export const orderLink = (p: Product) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Assalam o Alaikum, I want to order ${p.name} (${p.fabric}) - Rs ${p.price}`,
  )}`;
