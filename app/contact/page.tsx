import Link from "next/link";

const channels = [
  ["TikTok Shop", "Xem mẫu đang lên và giá cập nhật", "Xem trên TikTok Shop", "#online-channels"],
  ["Shopee", "Gian hàng online dạng placeholder", "Mở Shopee", "#online-channels"],
  ["Instagram", "Xem phối đồ, feedback và story mới", "Mở Instagram", "#online-channels"],
  ["Facebook / Zalo", "Nhắn shop để được tư vấn trước khi ghé", "Nhắn shop tư vấn", "#online-channels"],
];

export default function ContactPage() {
  return (
    <main className="container-shell pb-20 pt-32">
      <section className="mb-16 text-center">
        <span className="label-caps mb-4 block text-subtle">Cửa hàng trực tuyến</span>
        <h1 className="section-title">Kênh mua hàng BEAR18</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
          Xem phụ kiện BEAR18 qua các nền tảng online hoặc liên hệ để được tư vấn. Website này chỉ là catalog và link hub, không xử lý thanh toán trực tiếp.
        </p>
      </section>
      <section id="online-channels" className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="grid gap-6 md:col-span-8 sm:grid-cols-2">
          {channels.map(([title, text, cta, href], index) => (
            <Link
              key={title}
              href={href}
              aria-label={`${cta} - placeholder liên hệ BEAR18`}
              className={`${index > 1 ? "sm:col-span-1" : ""} group ambient-card rounded-lg p-6 text-black transition hover:border-black hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-black`}
            >
              <div className="mb-6 aspect-square overflow-hidden rounded bg-surface-container">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white via-zinc-200 to-zinc-500 font-heading text-4xl font-black text-black">
                  {title.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="h3-title">{title}</h2>
                  <p className="mt-2 text-muted">{text}</p>
                  <p className="mt-5 text-xs font-black uppercase tracking-widest text-black">{cta}</p>
                </div>
                <span className="text-2xl text-black transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
        <aside className="rounded-lg bg-primary p-8 text-white md:col-span-4">
          <h2 className="section-title text-white">Offline Store</h2>
          <div className="mt-8 space-y-8">
            <div>
              <span className="label-caps block text-inverse-subtle">Địa chỉ</span>
              <p className="mt-2 text-lg leading-7">Placeholder shop offline tại Cần Thơ. Vui lòng nhắn shop để xác nhận địa chỉ trước khi ghé.</p>
            </div>
            <div>
              <span className="label-caps block text-inverse-subtle">Giờ mở cửa</span>
              <p className="mt-2 text-lg">Đang cập nhật</p>
            </div>
            <div>
              <span className="label-caps block text-inverse-subtle">Liên hệ</span>
              <p className="mt-2 text-lg">Facebook / Zalo placeholder</p>
            </div>
          </div>
          <div className="mt-8 grid aspect-video place-items-center rounded bg-zinc-800 text-center text-sm text-inverse-muted">
            Map placeholder Cần Thơ
          </div>
        </aside>
      </section>
      <section className="mt-20 grid gap-6 md:grid-cols-3">
        {[
          ["Tư vấn phối đồ", "Nhắn shop kèm outfit hoặc vibe bạn muốn mặc."],
          ["Xem giá mới", "Giá nên kiểm tra trực tiếp trên TikTok Shop hoặc kênh bán hiện tại."],
          ["Ghé shop Cần Thơ", "Liên hệ trước để xác nhận địa chỉ và giờ mở cửa."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-lg border border-outline-variant p-8">
            <h3 className="h3-title mb-3">{title}</h3>
            <p className="leading-7 text-muted">{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
