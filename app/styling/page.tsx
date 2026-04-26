import Link from "next/link";
import { VibePicker } from "@/components/VibePicker";

export default function StylingPage() {
  return (
    <main className="container-shell pb-20 pt-32">
      <header className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="section-title">Chọn phụ kiện theo vibe của bạn</h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Không biết bắt đầu từ món nào? Chọn vibe outfit, BEAR18 gợi ý phụ kiện dễ phối cho bạn.
        </p>
      </header>
      <section>
        <VibePicker />
      </section>
      <section className="mt-20 border-y border-zinc-200 py-16 text-center">
        <h2 className="section-title mb-4">Vẫn chưa tìm thấy vibe của bạn?</h2>
        <p className="mx-auto mb-8 max-w-xl text-muted">Nhắn BEAR18 để được gợi ý combo phụ kiện hợp outfit bạn đang có.</p>
        <Link href="/contact" className="btn-base btn-primary px-10 py-4 text-sm tracking-widest">
          Nhắn shop tư vấn
        </Link>
      </section>
    </main>
  );
}
