export type Category = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  image: string;
  heroImage: string;
  accent: "dark" | "light" | "center" | "bottom" | "split";
  vibes: string[];
  tips: string[];
};

export const categories: Category[] = [
  {
    slug: "kinh",
    name: "Kính",
    shortName: "Kính",
    eyebrow: "Essentials",
    description: "Form kính dễ phối cho đi học, đi chơi, chụp hình và đi biển.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjH-eH6puyJk2LxlXKksKymaG5hdjAgVyfpA3vzSeFEVmwBNIlm2eCpUvQ3PwD-fVn0_-92qT7KYkmuelqntBcA70tZinWOYA53t196Gt47B505QMr_G-vQ6Ynp1heGyoLh8X2G99jUfR5Zg4WzuGWWLvL8sWE23HschuMRKzQ4k1uAL3_KGw8LGrqx6-gI5K1rowBR4LNycj81c1WbNZfuBZoQdmLtLpxK-GFfPkSmqZqS7ev_orKCv_QkVb0dZbeMcCVi5OrP_0",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLGY4XpuqAuHHdTm5UUK_OvdKVqxNJu4iFsP5WH9ehyTb22jM68qJZAfr4ew8A3GZLvWSu2AkPZ8xAtk28zwMPhshmGK8wZTzrOcyAE2MMhkMJZ_ARlmndt6YmUPzuvFmP2GvVwM1C4maW-bw9zKCFJ8ydlQgebJaK-B3-186LDBx-G5K86FbRus64kbFyVe2hxTkGWevPOo4S02ji3CxCD8hyswfWf8gGNiNPmFRnuesm8xhAhSjdHoTosBM7sG-9NzbOsp2Afqk",
    accent: "dark",
    vibes: ["Basic", "Streetwear", "Đi biển", "Unisex"],
    tips: ["Kính đen basic hợp áo thun trắng, sơ mi và outfit denim.", "Kính dáng mảnh giúp tổng thể nhẹ hơn khi phối nhiều phụ kiện bạc."],
  },
  {
    slug: "day-chuyen",
    name: "Dây chuyền",
    shortName: "Dây chuyền",
    eyebrow: "Layering",
    description: "Dây mảnh, dây bạc basic và kiểu layer tạo điểm nhấn phần cổ.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB87J4twIf8pkzPLnU2ZUX7H2WvI1nbt-Ot1d88aXcpQXlADhF27uwLIor2B1_wJLp5hiQdH9w7u2rBaUkcME7pziqaaGyMywtJmk4f0KqLWevEl0H1LOfoMlFwzlInEuVEuIN-qIbtU7TgpL02f4THk20jU4AXyUMHG3undqy_7QLe8OciTCSKpgv4AdSvxL5ALvNs4dviuxayH6Xv8LwCcrtNXjUsUSGaZq6e-0qKMLC6YF9FRMCnDW5C1FGXwCSvbC9xPTngSEk",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Zi1DGCqB3s34fuS90fnCHbfY6X1LttWok2Kldo1zzm9P11wEZnuF_iyq-jcSq8kX6v9s5XrCJrg6n4dzXBxQonPpcMWiEPsrOcQ-IJd6rEnK74G1ay3UQqcPkJAbixqxuyGtFn0_c0Lzdk-spyGP4iex1i2Wu7wgMO-7VyFRVvU8_HYjVFOolpiGib8rgReHK9kMkP18c1tiADhLhd-188pasNzPImRlri-yGMZ_47mJk4hoJCd6YD0wUmsb1-jZBebJvmMUsrs",
    accent: "center",
    vibes: ["Basic", "Streetwear", "Y2K", "Couple"],
    tips: ["Áo cổ tròn hợp dây ngắn hoặc mặt nhỏ.", "Áo cổ mở có thể layer 2 dây để phần cổ nhìn có chủ đích hơn."],
  },
  {
    slug: "vong-tay",
    name: "Vòng tay / lắc tay",
    shortName: "Vòng tay",
    eyebrow: "Wrist edit",
    description: "Vòng tay tối giản và lắc tay bạc dễ phối mỗi ngày.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2xsFx5VDOdzOAsOBt9T25wrVFyOLXGJyxGLqJqwaW3PfoHYWSqN_N67pAqWT09a0e9gtMlzclN9ZIiWTgfTegs869KaGAfxcvxhg4u0UcRsBSdKcQDDj8q_ft4GM1Z5gUR1it9b1e2CDJib4pMDQZjY9sC1g3818vrRqSus0oHbwlpPBJRCmhws54KRiMbCEt1xcf3j18SWq2hNAHcmxYxUNmXVU8z91Zkjekq3LmjkuU4TpLeKpOldARDTl2RJwVz3v3AbdeBrE",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNE18PYkDwADWGAvbE1cG-0W-qeGSFnOtjPu8pBbEaX9qn1a8AQaMwtSdDdVTj6q5xRZIJQYRRrK82zpQo2n6WCXzoSB5LYpo2B-HycdJF7P3gaE4oZRdFreza4sfyqVEtg4dX6zeAgmMHdROpYnti04ArQXuR_bgteIxwr4X86sAVlPPfDM7XYO1sQ-DoOyE6mArY5lpZQ9-Ci078TtgSVP4wyOF8EaJQYTZLGdS3lm2fodk-ov2_bfHy-TVzWfS_yq-FpzgjJ60",
    accent: "bottom",
    vibes: ["Basic", "Unisex", "Couple"],
    tips: ["Một vòng mảnh đủ hợp outfit gọn gàng.", "Khi đeo đồng thời nhẫn và vòng tay, nên giữ cùng tone bạc hoặc đen."],
  },
  {
    slug: "nhan",
    name: "Nhẫn",
    shortName: "Nhẫn",
    eyebrow: "Statement",
    description: "Nhẫn trơn, nhẫn cá tính và set nhẫn giúp tay có điểm nhấn.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2XyIfligNbKNkoqtxRKxGHu0B2HNwQUW97WvRld0DWxCT_Vksn6KzLKZ3KkK-POYm1JhRL7kFCaeyZuuecqXgWjLOf6WMXfmJnX9Xav_ICXQle35UT6mwyflswSgvfBOwdBP1R8elBQTggpD0WAJoJrIt4V5lEpVLCmokEPzPSDaSrkc_z08CajlYGZm5kwAtxgysjXqC9bU-sQK96zdVc5tlianShPamGRHKbDXmOsKx0GiawPikhx562gQHpr7tQ4azGSj3vGs",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApxPJSNoRUesuWaHRiOgj97TC1EgBFLEqDlBe9bXtQN1J45aQUV703pW0KvMxU_sX1-rYwkNDCR-K8RWti-SHbFtnnVt-gH_viBQw96X73ymLoXbfFkproWW8L_zuhrb2yp6IpPExTxCwMfmMiXOZ0uDL_9V_Db-0NHhSox-CkL79MRHHLJElR04tazTK1FH3Ew0pe1oH-q7aYL4v6y_m6MzRKhER9guLE3CCz7TcGgKznYF2j_AQ8TsbXdyyYJo-vZLuIjZZT4dg",
    accent: "light",
    vibes: ["Basic", "Streetwear", "Y2K", "Unisex"],
    tips: ["Bắt đầu với 1-2 nhẫn trơn nếu bạn mới phối phụ kiện.", "Set nhẫn bản khác nhau hợp ảnh chụp cận tay, mirror selfie."],
  },
  {
    slug: "khuyen-tai",
    name: "Khuyên tai",
    shortName: "Khuyên tai",
    eyebrow: "Face frame",
    description: "Khuyên nhỏ, hoop và mẫu bắt sáng giúp khuôn mặt nổi bật hơn.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfPvYrlyNi0cghLDy-pw-882zIRuglWyPnTAieOIkH0puWUSYOS7Tdxrl1czfgf1yhCAuDiUzqilGytLCS8CjWw71M3FrPNwEyxfzAJD2xQBeS9SsdVeJQ0pBSeCk7Tg6t1PQp7f0bYEeNTK8qnpDl497B7ezpOVW5YGSM_Dn90fX4g9OuS9Md-3Yy8v5_m0ZUUpBmlYTvUtBmXKxPIn686p1-cDBYSQT4t0S5SwX8GJzUYSFOMQP1I2v_uYOenDB5Ys2H-naV5Sg",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfPvYrlyNi0cghLDy-pw-882zIRuglWyPnTAieOIkH0puWUSYOS7Tdxrl1czfgf1yhCAuDiUzqilGytLCS8CjWw71M3FrPNwEyxfzAJD2xQBeS9SsdVeJQ0pBSeCk7Tg6t1PQp7f0bYEeNTK8qnpDl497B7ezpOVW5YGSM_Dn90fX4g9OuS9Md-3Yy8v5_m0ZUUpBmlYTvUtBmXKxPIn686p1-cDBYSQT4t0S5SwX8GJzUYSFOMQP1I2v_uYOenDB5Ys2H-naV5Sg",
    accent: "bottom",
    vibes: ["Basic", "Y2K", "Đi biển", "Couple"],
    tips: ["Khuyên nhỏ hợp đi học và đi làm vì gọn nhưng vẫn bắt sáng.", "Hoop bạc hợp tóc búi, áo ba lỗ hoặc sơ mi mở cổ."],
  },
  {
    slug: "non",
    name: "Nón",
    shortName: "Nón",
    eyebrow: "Street layer",
    description: "Nón lưỡi trai, bucket và form streetwear cho ngày cần gọn nhanh.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrhHz0BX-QDqkS-AzLkXdtqaA4Q29eLy0W_oe67gIQCfKpcv5EmOFqJ8Qyg_heWQZD1ePEuLdrzho-4VN3bn16iKJaw5VHdEtDmBzhjV4s0MAco3npGZViuUjff5lNttoH_ENe6cMpthDBVZ5jD0TwmlZbGtI2NdS9eBOOIBeLi2wAL3xjYlnM72RzJBnIGj7R1H-XzHnZbeTMYFvVelqharmZonA0fjE2HuTbgymS-O0wm_2ZL-Eejpr8qoaL1OAk4g7yvVASkpg",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuJuWM8p2AXv5uWIsfyZz46WSDM0kgwqIRVSLS0dVNPGzKuLksFzLEIZbuGPQeHY8ebIAAvBEn3OPYfYdV9tYyMj8ZwIbDVUr_DZi65JGYvpZGSEcmQE1YCtc5rYyrMuswVuM63eW3CU4hQqoaBaH8zkrA21zECVBMue9GIb4Q6-SPF8XQOw2bG_dDPSeasC5GgDKkJ2jTkhL1U8R_4_VsebDZVb1l8GyQIZw7hk42NZ8ciIDHtS3TrWe1eHiXiSKP8dGU3DF-6Ck",
    accent: "split",
    vibes: ["Streetwear", "Đi biển", "Unisex"],
    tips: ["Nón đen basic dễ phối với kính, dây chuyền bạc.", "Đi biển nên chọn tone sáng hoặc chất liệu thoáng hơn."],
  },
  {
    slug: "chain-quan",
    name: "Chain quần / móc khóa quần",
    shortName: "Chain quần",
    eyebrow: "Streetwear signature",
    description: "Chain quần và móc khóa quần tạo điểm nhấn mạnh cho outfit streetwear.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmNGCbGlESsmjdFC7VwTvMyWWRE2R2F6yMSgP9QUWxgbb00rSGuPESXGuTcssKMW0tEa0My2ZqnQ36JhGTh580UVfqz8sWhdC7jLRFfxsG0VvGn6SS7KAVTKYhV5mM_yvq7UjW-wYhcCGh7vGOhO4rpnzlEtnhRXQJeLXcu26sKziSHafcK9VYpnL-WGlzNfslBJ0CR_7XMa-F9l5P8_MwfTomCg4SlO8z9x-P5PSg9lf5Pwha17uYB4X_iZstm6zc8Y6zkm3u6Uo",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2FkHiK5z_etg9lP6rtcv0cQXiBAkb2zU7LhOSjv2-3k4Vyg0YETTtW8wgo_8eQFlOeMgbvVEwgm9-F96lIJdpyUmi-qs9Vu-2EJpI3UltTGhQSYP3ICJK_U6vjIUGFgEn3cnEh-PGkAcoeURtIPm-7_qJVr-5907BorwCtnuJKV8a0EIMp9sy0LJQzIfvFO9T6kiJTPvs-A5_d-dZsPnso4gnBEm30DxKfgbpQW18hNm8CZxZabUJQ1i76lI3uffx6p8-BAKG25s",
    accent: "split",
    vibes: ["Streetwear", "Y2K", "Unisex"],
    tips: ["Chain quần hợp quần jeans, cargo hoặc quần ống rộng.", "Nếu chain đã nổi, nên giữ dây chuyền và nhẫn vừa đủ."],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
