import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google'
import "./globals.css";

const siteUrl = "https://foreveramusement.com";
const siteTitle = "Forever Amusement（フォーエバーアミューズメント）｜代表 よーたろ";
const siteDescription =
  "Forever Amusement（フォーエバーアミューズメント）は、代表よーたろ（松永陽太郎）が運営するSNS・PR・事業開発会社です。すべての大人に、ワクワクを。";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Forever Amusement株式会社",
  alternateName: [
    "Forever Amusement",
    "フォーエバーアミューズメント",
  ],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  founder: {
    "@type": "Person",
    name: "松永陽太郎",
    alternateName: ["よーたろ", "Yotaro Matsunaga"],
    jobTitle: "代表取締役社長",
  },
  sameAs: [
    "https://youtube.com/@yotaro_japantravel",
    "https://www.instagram.com/yotaro_education",
    "https://x.com/yotaro_travel",
    "https://www.tiktok.com/@yotaro_education",
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "松永陽太郎",
  alternateName: ["よーたろ", "Yotaro Matsunaga"],
  jobTitle: "Forever Amusement株式会社 代表取締役社長",
  worksFor: {
    "@type": "Organization",
    name: "Forever Amusement株式会社",
    url: siteUrl,
  },
  url: `${siteUrl}/company`,
  image: `${siteUrl}/profile.png`,
  sameAs: [
    "https://youtube.com/@yotaro_japantravel",
    "https://www.instagram.com/yotaro_education",
    "https://x.com/yotaro_travel",
    "https://www.tiktok.com/@yotaro_education",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Forever Amusement",
  title: {
    default: siteTitle,
    template: "%s｜Forever Amusement",
  },
  description: siteDescription,
  keywords: [
    "Forever Amusement",
    "フォーエバーアミューズメント",
    "forever amusement",
    "よーたろ",
    "松永陽太郎",
    "Yotaro Matsunaga",
    "SNS運用代行",
    "SNS PR",
    "YouTube",
    "TikTok",
    "Instagram",
  ],
  authors: [{ name: "Forever Amusement株式会社", url: siteUrl }],
  creator: "Forever Amusement株式会社",
  publisher: "Forever Amusement株式会社",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "Forever Amusement",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/logo.png",
        width: 256,
        height: 239,
        alt: "Forever Amusement logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: 'ciWda9Lyp_NgjbrsgLbzYOBu4LoeYeTCJb0TmqNRzZQ',
  },
};


const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, personJsonLd]),
          }}
        />
        {children}
      </body>
    </html>
  )
}
