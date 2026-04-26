export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  vibe: string;
  tag: string;
  price: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "kinh-basic-den",
    name: "Kính basic đen",
    categorySlug: "kinh",
    categoryName: "Kính",
    vibe: "Basic",
    tag: "Minimalist",
    price: "Từ 79.000đ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9JQxR6cmTnO3KXgQhVonKtW8_MJq5pNA40qvmJElP0cIKrX3yMr4hZEdwxrs5m9EhABfrm3jqQ5S2JCz6DyU-cFjUIa0WIfqc4KJ6csv5WjN8MMFozqpE2CX2St8vy7JkROuLZmXmmJZMHP8vhdNbA6RnWVXZ9yuMWe5vIoUsmi-oQyKDC8EP_T9OAbaIPs2s4I77Jk0vJRlIWuhieJ2d0hR1tBkkUZ_53QZXj46YsLCFEwbmCUVYKyu8P6C420zc4VTnRddmw7o",
    description: "Gọng đen dễ phối cho outfit hằng ngày.",
  },
  {
    slug: "day-chuyen-bac-basic",
    name: "Dây chuyền bạc basic",
    categorySlug: "day-chuyen",
    categoryName: "Dây chuyền",
    vibe: "Basic",
    tag: "Essential",
    price: "Từ 89.000đ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcP_Cv4oGY-dXvExEpNwA3pxfoPvPoOGofrOMfERXk4g5bWpfXNGkatLHaTV1fPF9annZdQb0IfOoH_gSfr1jmsd5dc6fDmWljDrumW4POy67tzbGtJS8xLURO-ImgVU9hx0192WHBah0Zgu8bWXgzdZA_u02tzAcUerHvYMvw_6zodgWDRRuI4MZQ2kzMsZejzUic0BlN5xGddO7cSCs66u2irQMqq-JdjwOzLVQCwje7IcTRIC7bQdE26N9ah-HC3nGs9IubaWA",
    description: "Dây mảnh tone bạc, hợp áo thun và sơ mi.",
  },
  {
    slug: "nhan-ca-tinh",
    name: "Nhẫn cá tính",
    categorySlug: "nhan",
    categoryName: "Nhẫn",
    vibe: "Streetwear",
    tag: "Statement",
    price: "Từ 99.000đ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdr_c_m3OH8hBpO44v-hH4mQW2I6JRhtVCAkzucG9lHKaV0OYUJyr2BQtasaSjJvz6IVkGNeYZudB0IDwpd69HTgOiDw1CTSGiWdIUg2cm7Y_5ROeOr7Db2GFfpKuAc-Ev8GYXcqOXp_r0Qx_YdZfpaoMUdun15BE1dxVjxlQp4S8bkBrOhR2Hee75HpAn5xr4iL8uPF_C7rDG-5D4oomQieI2GXv7mXgLguuphapnj_ShmMg3cQXrmIq7dV3QF3scPzypeJWBosc",
    description: "Nhẫn bản vừa, tạo điểm nhấn rõ khi chụp hình.",
  },
  {
    slug: "vong-tay-don-gian",
    name: "Vòng tay đơn giản",
    categorySlug: "vong-tay",
    categoryName: "Vòng tay / lắc tay",
    vibe: "Unisex",
    tag: "Clean",
    price: "Từ 79.000đ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNE18PYkDwADWGAvbE1cG-0W-qeGSFnOtjPu8pBbEaX9qn1a8AQaMwtSdDdVTj6q5xRZIJQYRRrK82zpQo2n6WCXzoSB5LYpo2B-HycdJF7P3gaE4oZRdFreza4sfyqVEtg4dX6zeAgmMHdROpYnti04ArQXuR_bgteIxwr4X86sAVlPPfDM7XYO1sQ-DoOyE6mArY5lpZQ9-Ci078TtgSVP4wyOF8EaJQYTZLGdS3lm2fodk-ov2_bfHy-TVzWfS_yq-FpzgjJ60",
    description: "Mảnh, gọn, dễ dùng cùng nhẫn hoặc đồng hồ riêng của bạn.",
  },
  {
    slug: "non-streetwear",
    name: "Nón streetwear",
    categorySlug: "non",
    categoryName: "Nón",
    vibe: "Streetwear",
    tag: "Daily cap",
    price: "Từ 109.000đ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuJuWM8p2AXv5uWIsfyZz46WSDM0kgwqIRVSLS0dVNPGzKuLksFzLEIZbuGPQeHY8ebIAAvBEn3OPYfYdV9tYyMj8ZwIbDVUr_DZi65JGYvpZGSEcmQE1YCtc5rYyrMuswVuM63eW3CU4hQqoaBaH8zkrA21zECVBMue9GIb4Q6-SPF8XQOw2bG_dDPSeasC5GgDKkJ2jTkhL1U8R_4_VsebDZVb1l8GyQIZw7hk42NZ8ciIDHtS3TrWe1eHiXiSKP8dGU3DF-6Ck",
    description: "Form nón gọn cho những ngày muốn outfit có chất nhanh.",
  },
  {
    slug: "chain-quan",
    name: "Chain quần",
    categorySlug: "chain-quan",
    categoryName: "Chain quần / móc khóa quần",
    vibe: "Streetwear",
    tag: "Hardware",
    price: "Từ 79.000đ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2FkHiK5z_etg9lP6rtcv0cQXiBAkb2zU7LhOSjv2-3k4Vyg0YETTtW8wgo_8eQFlOeMgbvVEwgm9-F96lIJdpyUmi-qs9Vu-2EJpI3UltTGhQSYP3ICJK_U6vjIUGFgEn3cnEh-PGkAcoeURtIPm-7_qJVr-5907BorwCtnuJKV8a0EIMp9sy0LJQzIfvFO9T6kiJTPvs-A5_d-dZsPnso4gnBEm30DxKfgbpQW18hNm8CZxZabUJQ1i76lI3uffx6p8-BAKG25s",
    description: "Phụ kiện mạnh cho quần jeans, cargo và outfit Y2K.",
  },
  {
    slug: "khuyen-tai-hoop-nho",
    name: "Khuyên tai hoop nhỏ",
    categorySlug: "khuyen-tai",
    categoryName: "Khuyên tai",
    vibe: "Y2K",
    tag: "Face light",
    price: "Xem giá trên TikTok Shop",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfPvYrlyNi0cghLDy-pw-882zIRuglWyPnTAieOIkH0puWUSYOS7Tdxrl1czfgf1yhCAuDiUzqilGytLCS8CjWw71M3FrPNwEyxfzAJD2xQBeS9SsdVeJQ0pBSeCk7Tg6t1PQp7f0bYEeNTK8qnpDl497B7ezpOVW5YGSM_Dn90fX4g9OuS9Md-3Yy8v5_m0ZUUpBmlYTvUtBmXKxPIn686p1-cDBYSQT4t0S5SwX8GJzUYSFOMQP1I2v_uYOenDB5Ys2H-naV5Sg",
    description: "Bắt sáng nhẹ, hợp đi chơi hoặc làm quà.",
  },
];

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug);
}
