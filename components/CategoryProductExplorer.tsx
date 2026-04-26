"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import type { Category } from "@/data/categories";
import type { Product } from "@/data/products";

export function CategoryProductExplorer({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  const filters = ["Tất cả", ...category.vibes];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const filteredProducts = useMemo(() => {
    if (activeFilter === "Tất cả") {
      return products;
    }

    return products.filter((product) => product.vibe === activeFilter || product.tag === activeFilter);
  }, [activeFilter, products]);

  return (
    <>
      <section className="sticky top-20 z-30 border-b border-zinc-100 bg-white/85 py-5 backdrop-blur-md">
        <div className="container-shell soft-scroll flex gap-3 overflow-x-auto">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-black ${
                  isActive ? "chip-active" : "chip-inactive"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="container-shell py-20">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-outline-variant bg-white p-10 text-center">
            <h2 className="h3-title">Chưa có mẫu khớp filter này</h2>
            <p className="mt-3 text-muted">Bạn có thể đổi vibe hoặc nhắn shop để được gợi ý mẫu đang có.</p>
            <Link href="/contact" className="btn-base btn-primary mt-6 px-6 py-3 text-sm">
              Nhắn shop tư vấn
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
