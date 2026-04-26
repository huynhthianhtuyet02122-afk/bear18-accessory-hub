import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryProductExplorer } from "@/components/CategoryProductExplorer";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return { title: "Không tìm thấy danh mục | BEAR18" };
  }

  return {
    title: `${category.name} | BEAR18`,
    description: category.description,
  };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const visibleProducts = getProductsByCategory(category.slug);

  return (
    <main className="pb-20 pt-20">
      <section className="relative flex min-h-[580px] items-center overflow-hidden bg-white">
        <img src={category.heroImage} alt={category.name} className="absolute inset-0 h-full w-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
        <div className="container-shell relative z-10">
          <span className="label-caps mb-4 block text-subtle">{category.eyebrow}</span>
          <h1 className="hero-title mb-6 text-primary">{category.name} BEAR18</h1>
          <p className="max-w-xl text-lg leading-8 text-muted">{category.description}</p>
        </div>
      </section>

      <CategoryProductExplorer category={category} products={visibleProducts} />

      <section className="container-shell mb-20">
        <div className="grid min-h-[360px] overflow-hidden rounded-2xl bg-zinc-950 text-white md:grid-cols-2">
          <div className="p-8 md:p-12">
            <span className="label-caps text-inverse-subtle">Styling tips</span>
            <h2 className="section-title mt-4 text-white">Phối {category.shortName.toLowerCase()} sao cho dễ đẹp?</h2>
            <div className="mt-8 space-y-5">
              {category.tips.map((tip, index) => (
                <p key={tip} className="flex gap-4 text-inverse-muted">
                  <span className="font-heading text-2xl font-black text-inverse-subtle">0{index + 1}</span>
                  {tip}
                </p>
              ))}
            </div>
          </div>
          <div className="min-h-[320px]">
            <img src={category.image} alt={category.name} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-4 md:grid-cols-3">
        {["Xem trên TikTok Shop", "Shopee", "Nhắn shop tư vấn"].map((label) => (
          <Link key={label} href="/contact" className="rounded-lg border border-outline-variant bg-white p-6 text-center font-heading text-lg font-bold text-black transition hover:border-black hover:bg-zinc-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
            {label} ↗
          </Link>
        ))}
      </section>
    </main>
  );
}
