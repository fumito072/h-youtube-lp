export function CompanyInfo() {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-16">
              {/* Company Overview */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">会社概要</h2>
                <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] gap-4 text-gray-800">
                  <div className="font-medium">会社名</div>
                  <div>株式会社メディアエイド</div>
                  
                  <div className="font-medium">設立</div>
                  <div>2020年4月1日</div>
                  
                  <div className="font-medium">代表取締役</div>
                  <div>山田 太郎</div>
                  
                  <div className="font-medium">所在地</div>
                  <div>〒100-0001 東京都千代田区1-1-1</div>
                  
                  <div className="font-medium">事業内容</div>
                  <div className="space-y-2">
                    <p>・SNSマーケティング支援</p>
                    <p>・採用支援サービス</p>
                    <p>・コンテンツ制作</p>
                  </div>
                </div>
              </div>
  
              {/* Mission */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">ミッション</h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  テクノロジーとクリエイティブの力で、企業と人材の最適なマッチングを実現し、
                  より良い社会づくりに貢献します。
                </p>
              </div>
  
              {/* Vision */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">ビジョン</h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  2025年までに、日本のSNSを活用した採用市場において、
                  最も信頼されるプラットフォームを目指します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
    