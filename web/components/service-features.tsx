import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ServiceFeatures() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Image
              src="/buzzrik-logo.png"
              alt="バズリク Logo"
              width={200}
              height={80}
              className="mb-8"
            />
            <h2 className="text-2xl font-bold text-gray-900">SNSでつながる採用。</h2>
            <p className="text-gray-800 leading-relaxed mb-6">
              バズリクは、ショート動画を軸としたSNSでの発信を通じてミスマッチのないWin-Winな採用を実現します。
              私たちは、企業と求職者の間に新しいコミュニケーションの形を創造し、
              より効果的で透明性の高い採用プロセスを提供します。
            </p>
            <Button size="lg" className="font-medium">
              詳細を見る
            </Button>
          </div>
          
          <div>
            <Image
              src="/office-worker.jpg"
              alt="Office worker using service"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-32">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">SNSマーケティング支援</h3>
              <p className="text-gray-800">
                効果的なSNS戦略の立案から実施まで、
                包括的なマーケティングソリューションを提供します。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">採用支援サービス</h3>
              <p className="text-gray-800">
                ショート動画を活用した採用ブランディングで、
                より魅力的な採用活動を実現します。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">コンテンツ制作</h3>
              <p className="text-gray-800">
                プロフェッショナルなクリエイターチームが、
                高品質な動画コンテンツを制作します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

