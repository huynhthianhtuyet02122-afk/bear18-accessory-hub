import { CTAButtons } from "@/components/CTAButtons";

const heroImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCNhTge2T72J_guZDR95h7OJ-TJZNsgRtAzCMa8efDZRfNRpRqigF9axUaftpMnPvf47tF4x5ETBNrJOInkVUoSxwE7Y5SumQCY3ndn59ggslecQqKHhDGzqF9aCp0JDwZKknAHjo1Z5ELMDVD82WAIdhlHiisyCT_hs6NRwKIpXXlM9QoRZzhySAaRjIEdRIhSIKgRrVxOlqF8VC8uw2SZZlXbwTlYlBKgN18oIatVnd11hWOEpOrrnVtE7Eq0bxefFx7RrAdcItE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Zi1DGCqB3s34fuS90fnCHbfY6X1LttWok2Kldo1zzm9P11wEZnuF_iyq-jcSq8kX6v9s5XrCJrg6n4dzXBxQonPpcMWiEPsrOcQ-IJd6rEnK74G1ay3UQqcPkJAbixqxuyGtFn0_c0Lzdk-spyGP4iex1i2Wu7wgMO-7VyFRVvU8_HYjVFOolpiGib8rgReHK9kMkP18c1tiADhLhd-188pasNzPImRlri-yGMZ_47mJk4hoJCd6YD0wUmsb1-jZBebJvmMUsrs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuApxPJSNoRUesuWaHRiOgj97TC1EgBFLEqDlBe9bXtQN1J45aQUV703pW0KvMxU_sX1-rYwkNDCR-K8RWti-SHbFtnnVt-gH_viBQw96X73ymLoXbfFkproWW8L_zuhrb2yp6IpPExTxCwMfmMiXOZ0uDL_9V_Db-0NHhSox-CkL79MRHHLJElR04tazTK1FH3Ew0pe1oH-q7aYL4v6y_m6MzRKhER9guLE3CCz7TcGgKznYF2j_AQ8TsbXdyyYJo-vZLuIjZZT4dg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBNE18PYkDwADWGAvbE1cG-0W-qeGSFnOtjPu8pBbEaX9qn1a8AQaMwtSdDdVTj6q5xRZIJQYRRrK82zpQo2n6WCXzoSB5LYpo2B-HycdJF7P3gaE4oZRdFreza4sfyqVEtg4dX6zeAgmMHdROpYnti04ArQXuR_bgteIxwr4X86sAVlPPfDM7XYO1sQ-DoOyE6mArY5lpZQ9-Ci078TtgSVP4wyOF8EaJQYTZLGdS3lm2fodk-ov2_bfHy-TVzWfS_yq-FpzgjJ60",
];

export function Hero() {
  return (
    <section className="container-shell grid min-h-[760px] grid-cols-1 items-center gap-12 pt-28 lg:grid-cols-12 lg:pt-20">
      <div className="z-10 lg:col-span-6">
        <span className="label-caps mb-6 block text-subtle">Premium accessories collection</span>
        <h1 className="hero-title mb-8 max-w-2xl text-primary">Phụ kiện nhỏ, outfit có điểm nhấn hơn</h1>
        <p className="mb-10 max-w-xl text-lg leading-8 text-muted">
          BEAR18 tuyển chọn kính, dây chuyền, vòng tay, nhẫn, khuyên tai, nón và chain quần theo các vibe basic,
          streetwear, Y2K, đi biển và unisex.
        </p>
        <CTAButtons />
      </div>
      <div className="relative h-[520px] lg:col-span-6 lg:h-[600px]">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-xl bg-surface-container ${index === 1 ? "mt-10" : ""} ${index === 2 ? "-mt-10" : ""}`}
            >
              <img src={image} alt="Phụ kiện BEAR18" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
