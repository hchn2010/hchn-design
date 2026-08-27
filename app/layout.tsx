import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hchn 工业设计作品集 · 博物馆版",
  description: "Hchn 当代设计博物馆风格工业设计作品集。为梦想的世界而设计。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
