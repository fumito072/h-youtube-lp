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
                  <div> Forever Amusement Inc.</div>
                  
                  <div className="font-medium">設立</div>
                  <div>設立準備中</div>
                  
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
  
              {/* Mission */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">ミッション</h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                全ての大人にワクワクを
                「子供時代はワクワクしていたのに大人になるとイヤイヤ仕事に行き1日が終わる」そんな毎日を生きる大人達が「こんな働き方あるんだ!」「毎日が楽しい!」と思うような社会を作って行きたい。このように日々考え、事業づくりをしております。
                </p>
              </div>
  
              {/* Vision */}
              {/* <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">ビジョン</h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
    