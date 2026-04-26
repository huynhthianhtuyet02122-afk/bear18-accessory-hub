import Link from "next/link";

type CTAButtonsProps = {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  centered?: boolean;
};

export function CTAButtons({
  primaryHref = "/categories",
  primaryLabel = "Xem danh mục",
  secondaryHref = "/contact",
  secondaryLabel = "Kênh mua hàng",
  centered = false,
}: CTAButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}>
      <Link
        href={primaryHref}
        className="rounded-lg bg-black px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 active:scale-95"
      >
        {primaryLabel}
      </Link>
      <Link
        href={secondaryHref}
        className="rounded-lg border border-outline-variant bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:border-black hover:bg-zinc-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 active:scale-95"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
