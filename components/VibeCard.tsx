import type { Vibe } from "@/data/vibes";
import { cn } from "@/lib/utils";

export function VibeCard({ vibe }: { vibe: Vibe }) {
  const span =
    vibe.layout === "tall"
      ? "md:col-span-4 md:row-span-2 h-[520px] md:h-[600px]"
      : vibe.layout === "wide"
        ? "md:col-span-8 h-[360px]"
        : vibe.layout === "half"
          ? "md:col-span-6 h-[380px]"
          : "md:col-span-4 h-[420px]";

  return (
    <article
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-lg border border-outline-variant/50 bg-white transition duration-500 hover:shadow-xl",
        span
      )}
    >
      <img
        src={vibe.image}
        alt={vibe.name}
        className={cn(
          "h-full w-full object-cover transition duration-700 group-hover:scale-105",
          vibe.slug === "basic" || vibe.slug === "unisex" ? "grayscale group-hover:grayscale-0" : "brightness-75 group-hover:brightness-100"
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-transparent" />
      <div className="image-readability absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <span className="label-caps mb-2 block text-inverse-subtle">{vibe.eyebrow}</span>
        <h3 className="font-heading text-3xl font-black text-white">{vibe.name}</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-inverse-muted">{vibe.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {vibe.accessories.map((item) => (
            <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
