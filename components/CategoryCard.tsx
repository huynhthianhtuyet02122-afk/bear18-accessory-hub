import Link from "next/link";
import type { Category } from "@/data/categories";
import { cn } from "@/lib/utils";

export function CategoryCard({ category, featured = false }: { category: Category; featured?: boolean }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-outline-variant bg-white transition duration-500 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
        featured ? "md:col-span-8 aspect-[16/9]" : "md:col-span-4 aspect-square"
      )}
    >
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className={cn("absolute inset-0", featured ? "bg-gradient-to-t from-black/80 via-black/35 to-transparent" : "bg-black/18")} />
      {featured ? (
        <div className="image-readability absolute bottom-0 left-0 p-6 sm:p-8">
          <span className="label-caps mb-3 block w-fit rounded bg-black/35 px-3 py-1 text-white backdrop-blur-md">
            {category.eyebrow}
          </span>
          <h3 className="font-heading text-3xl font-black text-white">{category.shortName}</h3>
          <p className="mt-2 max-w-md text-inverse-muted">{category.description}</p>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="border border-zinc-200 bg-white/92 px-7 py-4 text-center backdrop-blur-sm">
            <h3 className="font-heading text-2xl font-bold text-black">{category.shortName}</h3>
          </div>
        </div>
      )}
    </Link>
  );
}
