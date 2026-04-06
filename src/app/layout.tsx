import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "OLYM COMMUNICATIONS — We can make a DIFFERENCE",
  description:
    "올림커뮤니케이션즈는 사용자 분석과 스토리텔링을 결합하여, 브랜드 정체성을 보여주는 온라인 경험을 설계합니다.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
