import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CaseStudies } from "../../components/ui/case-studies"
import { Navigation } from "@/components/navigation"
import { Space } from 'lucide-react'

import GeometricAnimation from "@/components/GeometricAnimation"
import { AnimatedSection } from "@/components/AnimatedSection"
import { AchievementSection, ServiceOverviewSection } from "@/components/website-sections"

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

          {/* Section 1: Yotaro Channel PR */}
          <AnimatedSection direction="left">
            <Card className="p-8 bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                      1
                    </div>
                    <CardTitle className="text-3xl text-white">よーたろch PRプラン</CardTitle>
                  </div>
                  <a href="/CIOプラン.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-300 hover:text-blue-100 underline">Forever Amusement</a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-center text-blue-200">
                    代表メディアを活用し、決裁者層へ直接リーチ
                  </h3>
                  <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-300">
                    総フォロワー60万人の「よーたろch」を通じて、商品やサービスを自然な文脈で紹介します。
                    視聴者が実際に「使ってみたい」「行ってみたい」と感じられる企画に落とし込み、
                    認知拡大から問い合わせ・購買につながるPRを設計します。
                  </p>
                  <div className="flex justify-center gap-12 mt-8">
                    <Image
                      src="/13.png"
                      alt="JR East Logo"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                    <Image
                      src="/12.png"
                      alt="Meoha-tok Logo"
                      width={200}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Section 2: Executive Branding */}
          <AnimatedSection direction="right">
            <Card className="p-8 bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                      2
                    </div>
                    <CardTitle className="text-3xl text-white">経営者ブランディング</CardTitle>
                  </div>
                  <a href="/CIOプラン.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-300 hover:text-blue-100 underline">Forever Amusement</a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-center text-blue-200">
                    経営者自身の発信を、採用・営業・信頼構築につなげる
                  </h3>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Image
                      src="/8.png"
                      alt="SNS Examples"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-emerald-400">思想・専門性・事業の強みを伝える</h4>
                      <p className="text-lg leading-relaxed text-gray-300">
                        ターゲット分析、ポジショニング、台本制作、撮影ディレクションまで支援します。
                        経営者の知見や価値観をコンテンツ化し、採用・営業・投資家向けの信頼形成を加速させます。
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Section 3: Team Coaching */}
          <AnimatedSection direction="left">
            <Card className="p-8 bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                      3
                    </div>
                    <CardTitle className="text-3xl text-white">チームコーチング</CardTitle>
                  </div>
                  <a href="/CIOプラン.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-300 hover:text-blue-100 underline">Forever Amusement</a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-center text-blue-200">
                    複数メンバーで継続できるSNS運用体制を作る
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="p-6 space-y-4 bg-opacity-60 bg-gray-800">
                      <CardTitle className="text-xl text-center text-blue-300">週次コーチング</CardTitle>
                      <p className="text-sm text-gray-300">
                        発信者ごとに課題を整理し、台本・撮影・編集・投稿の改善点を継続的にフィードバックします。
                      </p>
                    </Card>

                    <Card className="p-6 space-y-4 bg-opacity-60 bg-gray-800">
                      <CardTitle className="text-xl text-center text-blue-300">編集ガイドライン</CardTitle>
                      <p className="text-sm text-gray-300">
                        誰が担当しても一定品質を保てるように、ブランドトーンや編集基準を整備します。
                      </p>
                    </Card>

                    <Card className="p-6 space-y-4 bg-opacity-60 bg-gray-800">
                      <CardTitle className="text-xl text-center text-blue-300">営業導線設計</CardTitle>
                      <p className="text-sm text-gray-300">
                        SNSで獲得した認知を、問い合わせ・商談・成約につなげる導線まで設計します。
                      </p>
                    </Card>

                    <Card className="p-6 space-y-4 bg-opacity-60 bg-gray-800">
                      <CardTitle className="text-xl text-center text-blue-300">運用体制設計</CardTitle>
                      <p className="text-sm text-gray-300">
                        KPI設計、投稿管理、分析レポートまで、社内で回るワークフローを作ります。
                      </p>
                    </Card>
                  </div>

                  <p className="text-center text-lg mt-8 text-blue-200">
                    個人依存ではなく、組織全体に発信力を残すための支援です。
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <Card className="p-8 bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                      4
                    </div>
                    <CardTitle className="text-3xl text-white">商品PR・Web制作</CardTitle>
                  </div>
                  <a href="/CIOプラン.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-300 hover:text-blue-100 underline">Forever Amusement</a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-center text-blue-200">
                    PR動画・SNS運用・Web制作まで実行支援
                  </h3>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Image
                      src="/web-site.png"
                      alt="Website Creation Examples"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-emerald-400">発信から受け皿まで整える</h4>
                      <p className="text-lg leading-relaxed text-gray-300">
                        商品PR動画やSNS運用だけでなく、問い合わせにつながるWebサイトやLPの制作まで対応します。
                        認知を取る施策と、受け皿となる導線をセットで整えることで、事業成果につながる状態を作ります。
                        弊社が制作した<a href="https://main.dlflvcz3ifacg.amplifyapp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 underline">ウェブサイトの実例</a>をご覧ください。
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Case Studies Section */}
          <AchievementSection theme="light" />

          <section className="pt-20">
            <CaseStudies />
          </section>
        </div>
      </div>
    </div>
  )
}
