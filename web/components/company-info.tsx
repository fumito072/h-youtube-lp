export function CompanyInfo() {
  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[180px] font-bold text-gray-100 select-none whitespace-nowrap">
          COMPANY
        </span>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {/* Company Overview */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">会社概要</h2>
              <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] gap-4 text-gray-800">
                <div className="font-medium">会社名</div>
                <div>Forever Amusement Inc.</div>
                
                {/* <div className="font-medium">設立</div>
                <div>設立準備中</div> */}
                
                <div className="font-medium">代表取締役</div>
                <div>松永 陽太郎</div>
                
                <div className="font-medium">所在地</div>
                <div>神奈川県川崎市</div>
                
                <div className="font-medium">事業内容</div>
                <div className="space-y-2">
                  <p>・SNS運用代行事業</p>
                  <p>・コンサル事業</p>
                </div>
              </div>
            </div>

            {/* Vision
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">ビジョン</h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                私たちは、デジタル時代におけるコミュニケーションの力を最大限に活用し、
                ブランドと顧客との間に強固な絆を築くことを目指しています。
                革新的なSNS戦略とコンサルティングサービスを通じて、
                クライアントのビジネス成長を加速させ、
                デジタルランドスケープにおける成功を実現します。
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

