import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-4 py-14 sm:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <Link href="/" className="font-heading text-lg font-black uppercase text-black">
            BEAR18
          </Link>
          <p className="mt-3 font-heading text-xs uppercase tracking-wide text-subtle">
            © 2026 BEAR18. Curated accessories from Cần Thơ.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-heading text-xs uppercase tracking-wide text-subtle">
          <Link className="text-subtle transition hover:text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black" href="/about">
            Về shop
          </Link>
          <Link className="text-subtle transition hover:text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black" href="/categories">
            Danh mục
          </Link>
          <Link className="text-subtle transition hover:text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black" href="/styling">
            Phối đồ
          </Link>
          <Link className="text-subtle transition hover:text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black" href="/contact">
            Kênh mua hàng
          </Link>
        </div>
        <div className="flex gap-3">
          <Link className="grid h-10 w-10 place-items-center rounded-full border border-zinc-300 text-black transition hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" href="/contact">
            ig
          </Link>
          <Link className="grid h-10 w-10 place-items-center rounded-full border border-zinc-300 text-black transition hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2" href="/contact">
            fb
          </Link>
        </div>
      </div>
    </footer>
  );
}
