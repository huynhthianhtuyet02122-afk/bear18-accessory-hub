import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { Hero } from "@/components/Hero";
import { NeedPicker } from "@/components/NeedPicker";
import { ProductCard } from "@/components/ProductCard";
import { ReviewCard } from "@/components/ReviewCard";
import { VibePicker } from "@/components/VibePicker";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="container-shell py-20">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="section-title">Chọn nhanh món bạn cần</h2>
            <p className="mt-3 text-muted">Dễ dàng tìm phụ kiện phù hợp cho outfit của bạn.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="ambient-card group flex min-h-32 flex-col items-center justify-center gap-4 rounded-lg p-5 text-center text-black transition hover:border-black hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-surface-container text-lg font-black transition group-hover:scale-110">
                {category.shortName.slice(0, 1)}
              </span>
              <span className="label-caps text-primary">{category.shortName}</span>
            </Link>
          ))}
        </div>
      </section>

      <NeedPicker />

      <section className="container-shell py-20">
        <div className="mb-12">
          <h2 className="section-title">Chọn phụ kiện theo vibe</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Bấm từng vibe để xem gợi ý phụ kiện phù hợp, giữ layout card lớn và overlay tinh gọn theo Stitch.
          </p>
        </div>
        <VibePicker compact />
      </section>

      <section className="bg-white py-20">
        <div className="container-shell">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="section-title">Mẫu dễ phối được chọn nhiều</h2>
            <Link className="hidden border-b-2 border-black pb-1 font-bold md:block" href="/categories">
              Xem tất cả
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-shell grid gap-10 md:grid-cols-3">
          {[
            ["Tuyển chọn kỹ lưỡng", "BEAR18 chọn mẫu theo độ dễ phối, độ bền sử dụng và gu trẻ trung."],
            ["Giá dễ tiếp cận", "Tập trung phụ kiện hợp túi tiền, phù hợp học sinh, sinh viên và người mới tập phối."],
            ["Shop phụ kiện Cần Thơ", "Có kênh online và thông tin ghé shop offline dạng placeholder để bạn liên hệ trước."],
          ].map(([title, text]) => (
            <article key={title} className="text-center">
              <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm">✓</div>
              <h3 className="h3-title mb-4">{title}</h3>
              <p className="leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-20">
        <h2 className="section-title mb-12 text-center">Feedback khách hàng</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-20 text-white">
        <div className="container-shell relative z-10 text-center">
          <h2 className="section-title mx-auto mb-6 max-w-3xl text-white">Kênh mua hàng BEAR18</h2>
          <p className="mx-auto mb-10 max-w-2xl text-inverse-muted">
            Xem mẫu mới, hỏi tư vấn phối phụ kiện hoặc ghé shop Cần Thơ sau khi liên hệ xác nhận thông tin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              ["TikTok Shop", "/contact"],
              ["Shopee", "/contact"],
              ["Instagram", "/contact"],
              ["Facebook / Zalo", "/contact"],
              ["Ghé shop Cần Thơ", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="btn-base btn-inverse rounded-full px-6 py-3 text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
