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
        className="btn-base btn-primary px-7 py-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
      >
        {primaryLabel}
      </Link>
      <Link
        href={secondaryHref}
        className="btn-base btn-secondary px-7 py-4 text-sm"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
