"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { needs } from "@/data/needs";
import { products } from "@/data/products";

export function NeedPicker() {
  const [activeId, setActiveId] = useState(needs[0].id);
  const active = needs.find((need) => need.id === activeId) ?? needs[0];
  const suggestions = useMemo(
    () => active.suggestions.map((slug) => products.find((product) => product.slug === slug)).filter(Boolean),
    [active]
  );

  return (
    <section className="bg-surface-container-low py-20">
      <div className="container-shell">
        <h2 className="section-title mb-12 text-center">Hôm nay bạn cần outfit gì?</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {needs.map((need) => (
            <button
              type="button"
              key={need.id}
              onClick={() => setActiveId(need.id)}
              className={`group relative aspect-[3/4] overflow-hidden rounded-xl text-left transition ${activeId === need.id ? "ring-2 ring-black ring-offset-4 ring-offset-surface-container-low" : ""}`}
            >
              <img src={need.image} alt={need.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <div className="image-readability absolute bottom-0 p-6 text-white">
                <span className="font-heading text-2xl font-black">{need.shortTitle}</span>
                <span className="mt-1 block text-sm text-inverse-muted">{need.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 rounded-2xl border border-outline-variant bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.03)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div>
            <span className="label-caps text-subtle">Gợi ý theo nhu cầu</span>
            <h3 className="mt-3 font-heading text-3xl font-black text-primary">{active.title}</h3>
            <p className="mt-4 leading-7 text-muted">{active.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {active.accessories.map((item) => (
                <span key={item} className="chrome-chip px-4 py-2 text-sm font-semibold">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/styling" className="btn-base btn-primary px-6 py-3 text-sm">
                Xem gợi ý
              </Link>
              <Link href="/contact" className="btn-base btn-secondary px-6 py-3 text-sm">
                Kênh mua hàng
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {suggestions.map((product) =>
              product ? (
                <Link key={product.slug} href={`/categories/${product.categorySlug}`} className="group overflow-hidden rounded-lg border border-zinc-200 bg-surface">
                  <div className="aspect-square overflow-hidden">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <p className="label-caps text-subtle">{product.categoryName}</p>
                    <h4 className="mt-2 font-heading font-bold">{product.name}</h4>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
