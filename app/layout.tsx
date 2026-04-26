import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BEAR18 | Phụ kiện thời trang Cần Thơ",
  description: "BEAR18 tuyển chọn phụ kiện dễ phối, hợp Gen Z, giá dễ tiếp cận từ Cần Thơ.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
