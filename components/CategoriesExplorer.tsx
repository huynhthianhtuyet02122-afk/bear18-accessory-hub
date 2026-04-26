"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CategoryCard } from "@/components/CategoryCard";
import { SearchBar } from "@/components/SearchBar";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

const filters = ["Tất cả", "Basic", "Streetwear", "Y2K", "Đi biển", "Unisex", "Couple"];

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function CategoriesExplorer({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const keyword = normalize(query);

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => {
      const matchesFilter = activeFilter === "Tất cả" || category.vibes.includes(activeFilter);
      const text = [category.name, category.shortName, category.description, category.eyebrow, ...category.vibes].join(" ").toLowerCase();
      return matchesFilter && (!keyword || text.includes(keyword));
    });
  }, [activeFilter, keyword]);

  const filteredProducts = useMemo(() => {
    if (!keyword) {
      return [];
    }

    return products.filter((product) => {
      const matchesFilter = activeFilter === "Tất cả" || product.vibe === activeFilter;
      const text = [product.name, product.categoryName, product.description, product.vibe, product.tag].join(" ").toLowerCase();
      return matchesFilter && text.includes(keyword);
    });
  }, [activeFilter, keyword]);

  const hasResults = filteredCategories.length > 0 || filteredProducts.length > 0;

  return (
    <>
      <section className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <h1 className="hero-title text-primary">Bạn đang tìm phụ kiện nào?</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Khám phá bộ phụ kiện được BEAR18 tuyển chọn để dễ phối, hợp Gen Z và dùng được nhiều dịp.
          </p>
        </div>
        <SearchBar value={query} onChange={setQuery} placeholder="Tìm phụ kiện..." />
      </section>

      <section className="soft-scroll mb-14 flex gap-3 overflow-x-auto pb-2" aria-label="Lọc danh mục theo vibe">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`label-caps whitespace-nowrap rounded-full px-6 py-3 transition focus:outline-none focus:ring-2 focus:ring-black ${
                isActive ? "bg-black text-white" : "chrome-chip hover:bg-zinc-200 hover:text-black"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </section>

      {hasResults ? (
        <>
          <section className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {filteredCategories.map((category, index) => (
              <CategoryCard key={category.slug} category={category} featured={index === 0 && filteredCategories.length > 2} />
            ))}
          </section>

          {filteredProducts.length > 0 ? (
            <section className="mt-16">
              <h2 className="h3-title mb-6">Sản phẩm khớp tìm kiếm</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/categories/${product.categorySlug}`}
                    className="rounded-lg border border-outline-variant bg-white p-5 text-black transition hover:border-black hover:bg-zinc-50"
                  >
                    <span className="label-caps text-subtle">{product.categoryName}</span>
                    <h3 className="mt-2 font-heading text-xl font-bold">{product.name}</h3>
                    <p className="mt-2 text-sm text-muted">{product.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <section className="rounded-2xl border border-outline-variant bg-white p-10 text-center">
          <h2 className="h3-title">Không tìm thấy phụ kiện phù hợp</h2>
          <p className="mt-3 text-muted">Thử từ khóa ngắn hơn hoặc đổi filter vibe.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveFilter("Tất cả");
            }}
            className="mt-6 rounded-lg bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-zinc-800"
          >
            Xem tất cả
          </button>
        </section>
      )}
    </>
  );
}
