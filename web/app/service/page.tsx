import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CaseStudies } from "../../components/ui/case-studies"
import { Navigation } from "@/components/navigation"
import { Space } from 'lucide-react'

import GeometricAnimation from "@/components/GeometricAnimation"
import { AnimatedSection } from "@/components/AnimatedSection"

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
          {/* Section 1: Product PR */}
          <AnimatedSection direction="left">
            <Card className="p-8 bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                      1
                    </div>
                    <CardTitle className="text-3xl text-white">商品PR・広告事業</CardTitle>
                  </div>
                  <a href="/CIOプラン.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-300 hover:text-blue-100 underline">Forever Amusement</a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-center text-blue-200">
                    クリエイター活動に絡めた商品PRが可能
                  </h3>
                  <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-300">
                    クリエイター活動で築いてきたノウハウを存分に活用して、視聴者が実際に「使ってみたい」
                    「行ってみたい」を思えるような動画を作成します。
                    またよーたろ自身が使いたいと思う商品を厳選して視聴者にお届けしている為、
                    視聴回数・お申し込み回数共にクライアント様の期待値を超える成果をお届けしております。
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

          {/* Section 2: SNS Management */}
          <AnimatedSection direction="right">
            <Card className="p-8 bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                      2
                    </div>
                    <CardTitle className="text-3xl text-white">SNS運用代行</CardTitle>
                  </div>
                  <a href="/CIOプラン.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-300 hover:text-blue-100 underline">Forever Amusement</a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-center text-blue-200">
                    SNSの運用を様々なニーズに合わせて支援します。
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
                      <h4 className="text-2xl font-bold text-emerald-400">SNS活用で認知力を向上</h4>
                      <p className="text-lg leading-relaxed text-gray-300">
                        SNSを活用し、定期的な投稿を実施。
                        認知拡大とファンを増加させます。
                        アカウントがない場合は、新規作成も代理で行いますので、安心しておまかせください。
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Section 3: New Business Development */}
          <AnimatedSection direction="left">
            <Card className="p-8 bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                      3
                    </div>
                    <CardTitle className="text-3xl text-white">新規企画開発事業</CardTitle>
                  </div>
                  <a href="/CIOプラン.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-300 hover:text-blue-100 underline">Forever Amusement</a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-center text-blue-200">
                    ミッション実現の為、日夜新たな企画へチャレンジ
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="p-6 space-y-4 bg-opacity-60 bg-gray-800">
                      <Image
                        src="/11.png"
                        alt="Youtuber Development"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                      <CardTitle className="text-xl text-center text-blue-300">Youtuber育成</CardTitle>
                      <p className="text-sm text-gray-300">
                        これまでの経験を元に伸びるアカウントをプロデュースする企画。
                        第1弾で実容系Youtuberを育成。第2弾で筋トレ×大変身でYoutuberを育成する。
                      </p>
                    </Card>

                    <Card className="p-6 space-y-4 bg-opacity-60 bg-gray-800">
                      <Image
                        src="/1.png"
                        alt="AI Channel Management"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                      <CardTitle className="text-xl text-center text-blue-300">AI活用したチャンネル運用</CardTitle>
                      <p className="text-sm text-gray-300">
                        生成AIを活用した台本から編集までを一気通貫したチャンネル運用を構築中。再現性あり且つコスト低い運用をハック中。
                      </p>
                    </Card>

                    <Card className="p-6 space-y-4 bg-opacity-60 bg-gray-800">
                      <Image
                        src="/2.png"
                        alt="Inbound Channel"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                      <CardTitle className="text-xl text-center text-blue-300">インバウンド向けチャンネル</CardTitle>
                      <p className="text-sm text-gray-300">
                        円安が高まる中インバウンド向けのチャンネルを開設。日本人市場のみならず海外でマーケットも支援ができる体制を構築中。
                      </p>
                    </Card>

                    <Card className="p-6 space-y-4 bg-opacity-60 bg-gray-800">
                      <Image
                        src="/3.png"
                        alt="Travel Agency"
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                      <CardTitle className="text-xl text-center text-blue-300">旅行代理店</CardTitle>
                      <p className="text-sm text-gray-300">
                        視聴者を動画からリアルな活動へ行動変容させる旅行代理店企画。
                        過去には視聴者向けのバスツアー企画なども開催し計100名を集客。
                      </p>
                    </Card>
                  </div>

                  <p className="text-center text-lg mt-8 text-blue-200">
                    ※新企画へのスポンサードや連携などのご相談も受付中です。
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
                    <CardTitle className="text-3xl text-white">ウェブサイト作成事業</CardTitle>
                  </div>
                  <a href="/CIOプラン.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-300 hover:text-blue-100 underline">Forever Amusement</a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-center text-blue-200">
                    お客様のニーズに合わせた最適なウェブサイトを制作
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
                      <h4 className="text-2xl font-bold text-emerald-400">ウェブサイトで事業の可能性を広げる</h4>
                      <p className="text-lg leading-relaxed text-gray-300">
                        モダンな技術とデザインで、スマートフォンにも最適化された高品質なウェブサイトを制作します。
                        コーポレートサイトから、ECサイト、ランディングページまで、幅広いニーズにお応えします。
                        弊社が制作した<a href="https://main.dlflvcz3ifacg.amplifyapp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 underline">ウェブサイトの実例</a>をご覧ください。
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Case Studies Section */}
          <section className="pt-20">
            <CaseStudies />
          </section>
        </div>
      </div>
    </div>
  )
}

