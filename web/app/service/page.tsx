import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CaseStudies } from "../../components/ui/case-studies"

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* Section 1: Product PR */}
        <Card className="p-8">
          <CardHeader>
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-3xl">商品PR・広告事業</CardTitle>
              </div>
              <div className="text-xl">Forever Amusement Inc.</div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center">
                クリエイター活動に絡めた商品PRが可能
              </h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                クリエイター活動で築いてきたノウハウを存分に活用して、視聴者が実際に「使ってみたい」
                「行ってみたい」を思えるような動画を作成します。
                またよーたろ自身が使いたいと思う商品を厳選して視聴者にお届けしている為、
                視聴回数・お申し込み回数共にクライアント様の期待値を超える成果をお届けしております。
              </p>
              <div className="flex justify-center gap-12 mt-8">
                <Image
                  src="/13.png"
                  alt="JR East Logo"
                  width={200}
                  height={200}
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

        {/* Section 2: SNS Management */}
        <Card className="p-8">
          <CardHeader>
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-3xl">SNS運用代行</CardTitle>
              </div>
              <div className="text-xl">Forever Amusement Inc.</div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center">
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
                  <h4 className="text-2xl font-bold text-emerald-600">SNS活用で認知力を向上</h4>
                  <p className="text-lg leading-relaxed">
                    SNSを活用し、定期的な投稿を実施。
                    認知拡大とファンを増加させます。
                    アカウントがない場合は、新規作成も代理で行いますので、安心しておまかせください。
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: New Business Development */}
        <Card className="p-8">
          <CardHeader>
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-3xl">新規企画開発事業</CardTitle>
              </div>
              <div className="text-xl">Forever Amusement Inc.</div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center">
                ミッション実現の為、日夜新たな企画へチャレンジ
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 space-y-4">
                  <Image
                    src="/11.png"
                    alt="Youtuber Development"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <CardTitle className="text-xl text-center text-blue-500">Youtuber育成</CardTitle>
                  <p className="text-sm">
                    これまでの経験を元に伸びるアカウントをプロデュースする企画。
                    第1弾で実容系Youtuberを育成。第2弾で筋トレ×大変身でYoutuberを育成する。
                  </p>
                </Card>

                <Card className="p-6 space-y-4">
                  <Image
                    src="/1.png"
                    alt="AI Channel Management"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <CardTitle className="text-xl text-center text-blue-500">AI活用したチャンネル運用</CardTitle>
                  <p className="text-sm">
                    生成AIを活用した台本から編集までを一気通貫したチャンネル運用を構築中。再現性あり且つコスト低い運用をハック中。
                  </p>
                </Card>

                <Card className="p-6 space-y-4">
                  <Image
                    src="/2.png"
                    alt="Inbound Channel"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <CardTitle className="text-xl text-center text-blue-500">インバウンド向けチャンネル</CardTitle>
                  <p className="text-sm">
                    円安が高まる中インバウンド向けのチャンネルを開設。日本人市場のみならず海外でマーケットも支援ができる体制を構築中。
                  </p>
                </Card>

                <Card className="p-6 space-y-4">
                  <Image
                    src="/3.png"
                    alt="Travel Agency"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <CardTitle className="text-xl text-center text-blue-500">旅行代理店</CardTitle>
                  <p className="text-sm">
                    視聴者を動画からリアルな活動へ行動変容させる旅行代理店企画。
                    過去には視聴者向けのバスツアー企画なども開催し計100名を集客。
                  </p>
                </Card>
              </div>

              <p className="text-center text-lg mt-8">
                ※新企画へのスポンサードや連携などのご相談も受付中です。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Case Studies Section */}
        <section className="pt-20">
          <CaseStudies />
        </section>
      </div>
    </div>
  )
}

