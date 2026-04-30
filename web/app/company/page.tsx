import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { CompanyHero } from "@/components/company-hero"
import { CompanyInfo } from "@/components/company-info"
import ProfileSection from "@/components/profile-section"
import { MembersSection } from "@/components/website-sections"

export const metadata: Metadata = {
  title: "会社概要・代表 よーたろ（松永陽太郎）",
  description:
    "Forever Amusement（フォーエバーアミューズメント）の会社概要と、代表よーたろ（松永陽太郎）のプロフィールを掲載しています。",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "会社概要・代表 よーたろ（松永陽太郎）｜Forever Amusement",
    description:
      "Forever Amusement株式会社の会社概要、代表よーたろ（松永陽太郎）のプロフィール、SNSクリエイター活動の実績を紹介します。",
    url: "/company",
  },
}

export default function CompanyPage() {
  return (
    <main>
      <Navigation />
      <CompanyHero />
      <ProfileSection />
      <MembersSection />
      <CompanyInfo />
    </main>
  )
}
