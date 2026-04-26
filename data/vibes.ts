export type Vibe = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  accessories: string[];
  image: string;
  layout: "tall" | "wide" | "small" | "half";
};

export const vibes: Vibe[] = [
  {
    slug: "basic",
    name: "Basic hằng ngày",
    eyebrow: "01 - Essential",
    description: "Gọn, sạch, dễ phối cho đi học hoặc đi làm.",
    accessories: ["Nhẫn trơn", "Dây chuyền mảnh", "Kính basic"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRro2h1ZWYsE3ZeooXDJn9blqH07NAIayOzkVr8sDvg_KlGqDyqtirqnzueGvKGGcrbmD76udxXvacJKOVHZIrZ8GfUhqsMnq0KQFWG_GKb4kFpcnkGgfHpbu_UaqAJjUSCodoxqCOKk-pqpdJJx_TTyYddtA2iHks6ZhwOQHeUnvjFTM7C8b1h5LB-pgjb-yPzs3MQJIL3nkfhx-1W57iyOX5Ea9RBiI_J-uivB54RYC61XqA9hVcpNZJXY3gCXHU-uQvdKYyoAQ",
    layout: "tall",
  },
  {
    slug: "streetwear",
    name: "Streetwear",
    eyebrow: "02 - Raw & Bold",
    description: "Dây bạc, chain quần và nón để outfit có lực hơn.",
    accessories: ["Chain quần", "Nhẫn cá tính", "Nón streetwear"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeUoi17likGyd5ER2fbd7MtCIuedLKIkb0HD7v21S89L9D-C5LZIHqc8eGFsSDEhgT5tW541W8eaxEy--3Q5JCSblxt79u88-Y3uUcPmOWtwTuuKmxqISJ0xF-kzlkmQC_xJGuhHBkWxDPxwlN4oWENUc2DoTnOwUx1MplzCaHevuKdSIBM9lTS8fFF38LN4cpIX03FqYeokWb254Ap6XG4C9i65vrMPYYVOcPpHU10V2pdrxM8S1NdpdkPXlidkiaIj8NZ9mDVH4",
    layout: "wide",
  },
  {
    slug: "y2k",
    name: "Y2K",
    eyebrow: "Retro-futurism",
    description: "Bắt sáng, vui hơn, hợp chụp hình và đi chơi.",
    accessories: ["Khuyên tai hoop", "Nhẫn nổi", "Kính trong"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYcJa0IY4aEOtaoubkDMjh1WzepL4omlFUeA8Xv5dvJvp8c4HRPWaAGFvFxhYptvBMtaSa_KZ4Ztsvs4CVExMfO0P1v1etbylNWY0R-JjDAa2xjCnw-zS_qJQMDPqo5LTr31WoDQZtYKp2JrccqDiRTPbXnVqIaKTfb4yrJgB5kda9OvJtNee8stPHHXg9jWJZZZtysDgcb7qfiorwGpTVb-jvoRjsPGvoboHhflDb6Gv5ZWAyucfnfKYdhLlizl_ZrSWwYi4enrY",
    layout: "small",
  },
  {
    slug: "di-bien",
    name: "Đi biển",
    eyebrow: "Ocean breeze",
    description: "Kính, nón và phụ kiện sáng để outfit nghỉ mát nhẹ hơn.",
    accessories: ["Kính đi biển", "Nón", "Khuyên tai nhỏ"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzl0zO-w8DFPYV-iieMWFl0zxcAaPRIFlPVMvBnz1_j2cJyAr8lw3xf8kD3vLWjU-rSBvSKWps2ntnilOQwWCElDTHJTC0ccnJKQxfoPHTqIGF262oVqZ-rtzZNYytD7upZZ2anIpTHYi8fKaXFYeQ9c-e-qZIVLyCrGTHSO_SbO2p8hlPwqsaTJkv_uYZBjqcZbk-_a4tZ-IQ0GnWMNsog0SfIJowCKVlY2Uk_tQgzIeJxd0zT-LnOoEn5RYO4i_v-Pd3xXHFMbk",
    layout: "small",
  },
  {
    slug: "unisex",
    name: "Unisex",
    eyebrow: "Genderless",
    description: "Form trung tính, dễ dùng chung, không quá cầu kỳ.",
    accessories: ["Vòng tay", "Dây chuyền bạc", "Nhẫn trơn"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5dGlHOMQFDVgdjcOfu3YF3bOuAuIrqhDNL09Cq2ikqfRLzOXBRFzn_YM7tVMAvMlyWQ2yeylE8XEPjKroagV89KNWV9oxUMLhZ4AVwvZAWVcpHAnt3E5i3qV2NX0xJRJrL2tGaITxkZR-tQ5IMN9MBVgywqv2l_0TWRUkUULjzjtXf6YiI56Dt81OW_L2dPKTLMArMw1f6v9mQyeSr1-hc-41IDpEoR-73cLOZ0Es-hryMgHPHcwMFDqbpl4VfweCC0iPphMdqK8",
    layout: "half",
  },
  {
    slug: "couple",
    name: "Couple / quà tặng",
    eyebrow: "Matching sets",
    description: "Các món dễ tặng, dễ đeo đôi và không kén người nhận.",
    accessories: ["Vòng tay đôi", "Dây chuyền mảnh", "Khuyên tai nhỏ"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJymv6pDqjwUKdyldewzt-CWZdKg00sNKZ1DVFSngIFjt_mkKgxOQgQv3rxfZoZDdG2r11qkcw5QlzH1GY7LhzZMx0fg03lfviwoYsX9PwJGCCoFFRpPZFj6xpt8FkcD6nuy005oMqWE4pQf5WXW2w2wjKJmFg4GZO7DBTcd04HbrvASxf2u7XEOph9Z9Klo9qyUsTENhViVB2_bEtLVR3rKmVbf3o4DqXhaWXgyymG17hYFK-9y3AQMm0KEG3T8NVR1CrYxeo3EU",
    layout: "half",
  },
];
