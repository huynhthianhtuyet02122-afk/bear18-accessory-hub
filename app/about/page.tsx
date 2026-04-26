import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container-shell pb-20 pt-32">
      <section className="mb-20">
        <span className="label-caps mb-6 inline-block rounded-full bg-surface-container-high px-4 py-2 text-subtle">
          Cần Thơ | Curated accessories
        </span>
        <h1 className="hero-title max-w-4xl text-primary">BEAR18 là shop phụ kiện có gu từ Cần Thơ</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          BEAR18 là shop phụ kiện nhỏ từ Cần Thơ, tập trung tuyển chọn mẫu dễ phối, giá dễ tiếp cận, hợp khách trẻ.
          Shop không trực tiếp sản xuất, không tự chế tác và không định vị như một luxury jewelry atelier.
        </p>
      </section>
      <section className="mb-20 grid grid-cols-12 gap-6">
        <div className="relative col-span-12 h-[500px] overflow-hidden rounded-xl border border-outline-variant md:col-span-7">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcCWPy87sl8_qX7DNfD2kpZvwZZ2h6VC326_wF2-mE-5lZx0BjmNkrVUBzJHYA6S3X1iuOia78b1rm4MHoS8--K6_oCsZXgTLW9r943l0dLUALlXm-efG50cIYfgpKcSvBOWc080RMB7kK82ez26eNKgXMQfi9T3D8ekpC6KaiwbZESQPqR6OdsJI7wZn1RGbxDWGHfGMQOvYoUBFN3LTGmaK-kY8Z3HzEF3M_zbA0n47Ev_s-wvp312VlNpeYfHpPpSBaxgDsdfk"
            alt="Không gian phụ kiện BEAR18"
            className="h-full w-full object-cover"
          />
          <div className="image-readability absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-8 text-white">
            <span className="label-caps text-inverse-subtle">Câu chuyện BEAR18</span>
            <h2 className="h3-title mt-2">Từ một shop nhỏ đến nơi chọn phụ kiện dễ phối</h2>
          </div>
        </div>
        <div className="col-span-12 flex flex-col justify-center gap-6 md:col-span-5">
          {[
            ["Tuyển chọn thay vì tự sản xuất", "BEAR18 chọn mẫu từ nhiều nguồn phù hợp tiêu chí: dễ phối, dễ tiếp cận, hợp xu hướng trẻ."],
            ["Gu rõ nhưng không xa cách", "Tinh thần clean premium giúp sản phẩm nhìn gọn, sáng, có chất mà vẫn gần gũi với khách Gen Z."],
          ].map(([title, text]) => (
            <article key={title} className="ambient-card rounded-xl p-8">
              <h3 className="h3-title mb-4">{title}</h3>
              <p className="leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mb-20 grid gap-6 md:grid-cols-3">
        {[
          ["Dễ phối", "Ưu tiên phụ kiện có thể đi cùng nhiều outfit thay vì chỉ hợp một trend."],
          ["Giá dễ tiếp cận", "Gợi ý mẫu phù hợp học sinh, sinh viên và người mới bắt đầu chơi phụ kiện."],
          ["Tư vấn thật", "Gợi ý theo vibe, nhu cầu và món bạn đã có, không đẩy website thành luồng thanh toán."],
        ].map(([title, text]) => (
          <article key={title} className="ambient-card rounded-xl p-8">
            <h3 className="h3-title mb-4">{title}</h3>
            <p className="leading-7 text-muted">{text}</p>
          </article>
        ))}
      </section>
      <section className="overflow-hidden rounded-2xl bg-primary text-white md:flex">
        <div className="p-8 md:w-1/2 md:p-12">
          <span className="label-caps text-inverse-subtle">Visit us</span>
          <h2 className="section-title mt-4 text-white">Ghé shop Cần Thơ</h2>
          <p className="mt-5 leading-7 text-inverse-muted">Thông tin địa chỉ cụ thể đang để placeholder. Bạn nên nhắn shop xác nhận trước khi ghé.</p>
          <Link href="/contact" className="btn-base btn-inverse mt-8 px-8 py-4 text-sm">
            Kênh mua hàng
          </Link>
        </div>
        <div className="min-h-[360px] md:w-1/2">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbziXk7VSCGU1mfiWkLQgMcIxgD9isNxWGtwmvRl913af0F0itPiW01f8EilvW2m5ki7-yQBqHA1Q8tP0hPXjR_3ZC4Q3_77eL8cH--jtpkgupgkzCq2BxfCeKVxNJx8MP7h34a7ptD1-F86cJos0D3HXqePTqy2H1s6X96KSTqoMirnXINUnzLt6I61LC_YIzwRVO3kFt3I1TWLTRPjmWVP6WAtN63R0r9O8XZGq1dtzWRtQX1Wyx6pgiOzT6EBtxnkSI1gBnCJw"
            alt="Shop phụ kiện"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
