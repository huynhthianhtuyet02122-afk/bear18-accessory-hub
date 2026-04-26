import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/categories/${product.categorySlug}`}
        className="mb-5 aspect-[3/4] overflow-hidden rounded-lg border border-zinc-200/70 bg-zinc-100 transition focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="font-heading text-lg font-bold text-primary">{product.name}</h3>
        <span className="chrome-chip px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
          {product.tag}
        </span>
      </div>
      <p className="mb-4 text-sm italic text-subtle">Vibe: {product.vibe}</p>
      <p className="mb-5 text-sm text-muted">{product.description}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
        <span className="font-bold text-primary">{product.price}</span>
        <Link
          href={`/categories/${product.categorySlug}`}
          className="text-xs font-black uppercase tracking-widest text-black underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-black"
        >
          Xem chi tiết ↗
        </Link>
      </div>
    </article>
  );
}
