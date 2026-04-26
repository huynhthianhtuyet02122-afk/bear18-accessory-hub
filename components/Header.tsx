"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/categories", label: "Danh mục" },
  { href: "/styling", label: "Phối đồ" },
  { href: "/about", label: "Về BEAR18" },
  { href: "/contact", label: "Liên hệ" },
];

export function Header() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
      return [];
    }

    const categoryResults = categories
      .filter((category) =>
        [category.name, category.shortName, category.description, category.eyebrow, ...category.vibes]
          .join(" ")
          .toLowerCase()
          .includes(keyword)
      )
      .map((category) => ({
        href: `/categories/${category.slug}`,
        label: category.name,
        meta: "Danh mục",
      }));

    const productResults = products
      .filter((product) =>
        [product.name, product.categoryName, product.description, product.vibe, product.tag]
          .join(" ")
          .toLowerCase()
          .includes(keyword)
      )
      .map((product) => ({
        href: `/categories/${product.categorySlug}`,
        label: product.name,
        meta: product.categoryName,
      }));

    return [...categoryResults, ...productResults].slice(0, 6);
  }, [query]);

  function openSearch() {
    setIsSearchOpen(true);
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const keyword = query.trim();

    if (keyword) {
      setIsSearchOpen(false);
      setIsMenuOpen(false);
      router.push(`/categories?q=${encodeURIComponent(keyword)}`);
    } else {
      openSearch();
    }
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-8">
        <Link href="/" className="font-heading text-2xl font-black tracking-tight text-black">
          BEAR18
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-sm font-bold uppercase text-subtle transition hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="relative flex items-center gap-2 sm:gap-4">
          <form
            onSubmit={submitSearch}
            className={`relative hidden transition md:block ${isSearchOpen ? "w-72 opacity-100" : "w-10 opacity-100"}`}
          >
            {isSearchOpen ? (
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onBlur={() => {
                  if (!query.trim()) {
                    window.setTimeout(() => setIsSearchOpen(false), 120);
                  }
                }}
                className="w-full rounded-full border border-outline-variant bg-white px-4 py-2.5 pr-10 text-sm text-black placeholder:text-subtle outline-none transition focus:border-black focus:ring-4 focus:ring-zinc-200"
                placeholder="Tìm phụ kiện..."
                type="search"
              />
            ) : (
              <button
                type="button"
                onClick={openSearch}
                aria-label="Mở tìm kiếm phụ kiện"
                className="grid h-10 w-10 place-items-center rounded-full text-xl text-black transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-black"
              >
                ⌕
              </button>
            )}
            {isSearchOpen ? (
              <button
                type="submit"
                aria-label="Tìm kiếm"
                className="absolute right-1 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black text-white transition hover:bg-zinc-800"
              >
                →
              </button>
            ) : null}
            {isSearchOpen && query.trim() ? (
              <div className="absolute right-0 top-12 w-80 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl">
                {results.length > 0 ? (
                  results.map((result) => (
                    <Link
                      key={`${result.href}-${result.label}`}
                      href={result.href}
                      onMouseDown={() => setIsSearchOpen(false)}
                      className="block border-b border-zinc-100 px-4 py-3 transition last:border-b-0 hover:bg-zinc-50 focus:bg-zinc-50"
                    >
                      <span className="block font-heading text-sm font-bold text-black">{result.label}</span>
                      <span className="label-caps mt-1 block text-subtle">{result.meta}</span>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-4 text-sm text-muted">Không thấy gợi ý phù hợp. Nhấn Enter để xem trang danh mục.</div>
                )}
              </div>
            ) : null}
          </form>

          <button
            type="button"
            onClick={openSearch}
            aria-label="Mở tìm kiếm phụ kiện"
            className="grid h-10 w-10 place-items-center rounded-full text-xl text-black transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-black md:hidden"
          >
            ⌕
          </button>
          <Link
            href="/contact"
            className="hidden rounded-lg bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 active:scale-95 sm:inline-flex"
          >
            Kênh mua hàng
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-label="Mở menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 text-black transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-black md:hidden"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {(isMenuOpen || isSearchOpen) && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <form onSubmit={submitSearch} className="relative mb-4">
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-lg border border-outline-variant bg-white px-4 py-3 pr-12 text-black placeholder:text-subtle outline-none focus:border-black focus:ring-4 focus:ring-zinc-200"
              placeholder="Tìm danh mục hoặc sản phẩm..."
              type="search"
            />
            <button type="submit" className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg bg-black text-white">
              →
            </button>
          </form>
          {query.trim() && results.length > 0 ? (
            <div className="mb-4 overflow-hidden rounded-lg border border-zinc-200">
              {results.slice(0, 4).map((result) => (
                <Link
                  key={`${result.href}-${result.label}-mobile`}
                  href={result.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsSearchOpen(false);
                  }}
                  className="block border-b border-zinc-100 px-4 py-3 last:border-b-0"
                >
                  <span className="block font-heading font-bold text-black">{result.label}</span>
                  <span className="label-caps mt-1 block text-subtle">{result.meta}</span>
                </Link>
              ))}
            </div>
          ) : null}
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 font-heading text-sm font-bold uppercase text-black transition hover:bg-zinc-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-lg bg-black px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-zinc-800"
            >
              Kênh mua hàng
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
