import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ServiceSection() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Image
              src="/placeholder.svg"
              alt="Service Logo"
              width={200}
              height={80}
              className="mb-8"
            />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">SNSでつながる採用。</h2>
            <p className="text-gray-800 leading-relaxed mb-6">
              バズリクは、ショート動画を軸としたSNSでの発信を通じてミスマッチのないWin-Winな採用を実現します。
            </p>
            <Button size="lg">詳細を見る</Button>
          </div>
          
          <div>
            <Image
              src="/placeholder.svg"
              alt="Person using service"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

