import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Space } from 'lucide-react'

import GeometricAnimation from "@/components/GeometricAnimation"
import {
  AchievementSection,
  CaseStudyResultsSection,
  ServiceOverviewSection,
} from "@/components/website-sections"

export const metadata: Metadata = {
  title: "サービス",
  description:
    "Forever Amusement（フォーエバーアミューズメント）のよーたろch PR、経営者ブランディング、チームコーチング、商品PR・Web制作サービスをご紹介します。",
  alternates: {
    canonical: "/service",
  },
  openGraph: {
    title: "サービス｜Forever Amusement",
    description:
      "代表よーたろのクリエイター活動を活かしたPR、経営者ブランディング、チームコーチング、制作支援のサービス内容です。",
    url: "/service",
  },
}

export default function ServicePage() {
  return (
    <div className="min-h-screen space-background relative overflow-hidden">
      {/* Geometric Animation */}
      <GeometricAnimation />
      
      {/* Stars effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <div className="relative z-20">
        <Navigation />
        <Space className="w-full h-20" />
        <div className="container mx-auto px-4 py-12 space-y-24">
          <ServiceOverviewSection />

          <AchievementSection theme="light" />
          <CaseStudyResultsSection theme="light" />
        </div>
      </div>
    </div>
  )
}
