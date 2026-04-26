"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { vibes } from "@/data/vibes";

type VibePickerProps = {
  compact?: boolean;
};

function vibeMatches(productVibe: string, vibeName: string) {
  if (vibeName.includes("Basic")) return productVibe === "Basic";
  if (vibeName.includes("Couple")) return productVibe === "Couple" || productVibe === "Basic";
  return productVibe === vibeName;
}

export function VibePicker({ compact = false }: VibePickerProps) {
  const [activeSlug, setActiveSlug] = useState(vibes[0].slug);
  const activeVibe = vibes.find((vibe) => vibe.slug === activeSlug) ?? vibes[0];

  const suggestions = useMemo(() => {
    const matched = products.filter((product) => vibeMatches(product.vibe, activeVibe.name));
    return (matched.length > 0 ? matched : products).slice(0, compact ? 3 : 4);
  }, [activeVibe.name, compact]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3" aria-label="Chọn vibe phụ kiện">
        {vibes.map((vibe) => {
          const isActive = activeSlug === vibe.slug;
          return (
            <button
              key={vibe.slug}
              type="button"
              onClick={() => setActiveSlug(vibe.slug)}
              className={`rounded-full px-6 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-black ${
                isActive ? "chip-active" : "chip-inactive"
              }`}
            >
              {vibe.name.replace(" hằng ngày", "").replace(" / quà tặng", "")}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <article className="relative min-h-[500px] overflow-hidden rounded-2xl md:col-span-6">
          <img src={activeVibe.image} alt={activeVibe.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute left-6 top-6 max-w-[320px] rounded-lg bg-white/92 p-6 text-black backdrop-blur-md">
            <span className="label-caps text-subtle">{activeVibe.eyebrow}</span>
            <h3 className="h3-title mt-2">{activeVibe.name}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{activeVibe.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {activeVibe.accessories.map((item) => (
                <span key={item} className="chrome-chip px-3 py-1 text-xs font-bold">
                  {item}
                </span>
              ))}
            </div>
            <Link
              href="/styling"
              className="btn-base btn-primary mt-6 px-5 py-3 text-xs"
            >
              Xem gợi ý phối
            </Link>
          </div>
        </article>

        <div className="grid gap-6 md:col-span-6 sm:grid-cols-2">
          {suggestions.map((product) => (
            <Link
              key={product.slug}
              href={`/categories/${product.categorySlug}`}
              className="ambient-card overflow-hidden rounded-2xl transition hover:border-black"
            >
              <div className="h-44 overflow-hidden">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="label-caps text-subtle">{product.vibe}</span>
                <h3 className="mt-2 font-heading text-xl font-bold text-black">{product.name}</h3>
                <p className="mt-2 text-sm text-muted">{product.categoryName}</p>
              </div>
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-2xl border border-zinc-950 bg-zinc-950 p-6 text-white transition hover:border-zinc-800 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:col-span-2"
          >
            <h3 className="h3-title">Cần shop phối giúp?</h3>
            <p className="mt-2 text-sm text-inverse-muted">Nhắn outfit hoặc vibe bạn muốn, BEAR18 sẽ gợi ý combo phụ kiện phù hợp.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
