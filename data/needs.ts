export type Need = {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  image: string;
  accessories: string[];
  suggestions: string[];
};

export const needs: Need[] = [
  {
    id: "di-hoc",
    title: "Đi học gọn nhưng có điểm nhấn",
    shortTitle: "Đi học",
    subtitle: "Trẻ trung, gọn gàng",
    description: "Ưu tiên món nhẹ, dễ đeo cả ngày và không làm outfit bị quá tay.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvirzKAqe7APbXdgNsliEh9KuaPapaFJy3wpb10mYOkWFiHqhnGKgh17A4xC4pbtRHeRpSn_HHj1xlXpbyK7PLgvzLmWEW11Dhb4CuY0mbyS1rCe-qT-Y8SuwvKbXJm3Q_ZYfZu6jSFuZwsZkz7UBR2VWws1t-Jc8wJAwIWN-0b6rKlpAif-BMbfimoPjLyBL09t8ioafT9wbWqyLhgdud9zPyLhmw9xYYLPuB8SpPkw1twwVdmescyTytWkGacZUL5hUvcDriLho",
    accessories: ["Kính basic đen", "Dây chuyền mảnh", "Vòng tay đơn giản"],
    suggestions: ["kinh-basic-den", "day-chuyen-bac-basic", "vong-tay-don-gian"],
  },
  {
    id: "di-choi",
    title: "Đi chơi cuối tuần nổi hơn",
    shortTitle: "Đi chơi",
    subtitle: "Cá tính, nổi bật",
    description: "Thêm một món có chất để outfit cuối tuần nhìn khác hẳn ảnh thường ngày.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDA_6o9hL96alJRDimIWujncCYakU1dm6pQrxCbxT-iDooQDsMKIpzbMP3EMowtFNh5G763Flnm4bzpxccyc6OnHk52qAUnA3CBFKXhTdI6XQ3RMmugL4rpVkDqDSYeXDMGyfdKDk3LRcPBbwzXoj5Fdld2xlHw8j-rUDbtDgkHI8349jeKc0jcvfoAWZkxlENeWkvZMI5oaripNM9wKWD_BCo3wr3Ok2nkP1hFbjeedtiWLepZd6RHQ7NYDTLxU8wMWrTnBOh2U54",
    accessories: ["Nhẫn cá tính", "Chain quần", "Nón streetwear"],
    suggestions: ["nhan-ca-tinh", "chain-quan", "non-streetwear"],
  },
  {
    id: "chup-hinh",
    title: "Chụp hình cần bắt sáng",
    shortTitle: "Chụp hình",
    subtitle: "Nghệ thuật, ấn tượng",
    description: "Chọn phụ kiện có ánh bạc hoặc bề mặt phản sáng để lên ảnh rõ hơn.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdCCYjawvh7eAPkSna0B86UCR6xVYdrPRLr99e9RBNAEuLqtsVXPgP-aCsOMUoxmcs549ytWhqkHyqFOKvRWMxCH0o4mkoVV0t3SGEFQZCzr9rOB3ODM2hlQsuJlnQSyhUG6_A9_Cd6e0n1skXqUGoHc5W-5Qj6xTekZBUWsB6UWjoSdFmkouS6NmFeJ3HLL3TjE_fpsafvJirN4b3QWYk5J7GU6TS84IR3muX3dWX-cyE8uJk92zRDJKgwoZ5Gduu0SqsWsliXaQ",
    accessories: ["Nhẫn cá tính", "Khuyên tai hoop nhỏ", "Dây chuyền bạc basic"],
    suggestions: ["nhan-ca-tinh", "khuyen-tai-hoop-nho", "day-chuyen-bac-basic"],
  },
  {
    id: "qua-tang",
    title: "Tặng người thân, bạn thân hoặc người yêu",
    shortTitle: "Tặng quà",
    subtitle: "Tinh tế, ý nghĩa",
    description: "Nên chọn mẫu dễ đeo, ít kén style và có thể dùng được nhiều dịp.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzUw1UiydErfir-7TQb_0FT2gvfnT3QuRykyfs6bj0WAeynXbpzA1P2TxDq85mzmy47zcuLgaMavLyaBLPFK-HtKm3lV4udd64vjtAQWxpoYWjLyf2-rdLI8C6HtQpTbJuEJpYXeb7m4Gm-8AC7ZnRIlNk9nY-hZROCGtn9BZTT27ugKpLExiUJjf6ZM7zpn2FEx17pmtmo88Ob20PHkzwVZtFsLQ-jIrkAMZd59BUfBKa8oQTtl2BI42Ro5-4fLfb_KbHXj98-5c",
    accessories: ["Vòng tay đơn giản", "Dây chuyền bạc basic", "Khuyên tai hoop nhỏ"],
    suggestions: ["vong-tay-don-gian", "day-chuyen-bac-basic", "khuyen-tai-hoop-nho"],
  },
];
