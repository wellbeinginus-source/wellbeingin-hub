import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wellbeingin.us"),
  title: {
    default: "웰빙이너스 | AI가 건네는 생활의 가벼움",
    template: "%s | 웰빙이너스",
  },
  description:
    "웰빙, 우리 안에서 시작됩니다. 주식회사 웰빙이너스의 AI 기반 생활·업무 서비스를 한 곳에서 만나보세요.",
  keywords: [
    "웰빙이너스",
    "wellbeingin",
    "AI 서비스",
    "운세한입",
    "AI 블로그 작성기",
    "노무사 계산기",
    "하루틴",
    "영양제 추천",
  ],
  openGraph: {
    title: "웰빙이너스 | Wellness, built into your day",
    description: "웰빙, 우리 안에서 시작됩니다. AI 기반 생활·업무 서비스 허브.",
    type: "website",
    locale: "ko_KR",
    url: "https://wellbeingin.us",
    siteName: "웰빙이너스",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
