export function ReviewCard({ review }: { review: { name: string; place: string; text: string } }) {
  return (
    <article className="ambient-card rounded-xl p-7">
      <div className="mb-4 text-sm tracking-[0.22em]">★★★★★</div>
      <p className="mb-6 text-sm italic leading-6 text-primary">"{review.text}"</p>
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-zinc-200" />
        <div>
          <p className="font-bold">{review.name}</p>
          <p className="text-xs uppercase tracking-wide text-subtle">{review.place}</p>
        </div>
      </div>
    </article>
  );
}
