import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans_KR({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const serif = Noto_Serif_KR({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "오덕 — 프론트엔드 개발자",
  description:
    "아이디어와 코드 사이를 빠르게 잇는 프론트엔드 개발자 오덕의 소개 페이지입니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${sans.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
    >
      <head>
        {/* AdSense 소유권 확인: Google이 요구하는 대로 <head>에 원본 script 삽입 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8334512491249788"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
