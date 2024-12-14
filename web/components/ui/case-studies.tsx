import { CaseStudyCard } from "@/components/case-study-card"
import { AnimatedSection } from "../AnimatedSection"

export function CaseStudies() {
  return (
    <div className="space-y-12">  
      <AnimatedSection direction="left">
        <CaseStudyCard
          number={1}
          title="商品PR・広告事業実績紹介"
          client="JR東日本様 「キュン♥パス」"
          image="/4.png"
          details={{
            case: "JR東日本全線が新幹線も含め1日乗り放題となる切符の宣伝です。",
            results: "TikTok、YouTube、インスタグラムで計10万人ほどに視聴していただき、認知と集客に繋げました。"
          }}
          youtubeUrl="https://www.youtube.com/watch?v=G9zpeNqMbn0"
          className="bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm text-white"
        />
      </AnimatedSection>

      <h2 className="text-3xl font-bold text-center py-12 text-blue-200">クリエイター活動実績紹介</h2>

      <AnimatedSection direction="right">
        <CaseStudyCard
          client="Mecha-Tok株式会社様 「メチャ得紹介案件」"
          image="/5.png"
          details={{
            case: "980円/月のサブスクサービスのPR案件",
            results: "元々法人向けサービスだったものをC向けサービスとしてローンチ初期のサービス認知拡大を支援。TikTok・Youtube・Instagramを活用して半年間PRを行う。実績として累計1000人以上を送客"
          }}
          youtubeUrl="https://www.youtube.com/watch?v=VVCpgjI9VTo"
          title=""
          className="bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm text-white"
        />
      </AnimatedSection>

      <h2 className="text-3xl font-bold text-center py-12 text-blue-200">運用実績紹介</h2>

      <AnimatedSection direction="left">
        <CaseStudyCard 
          client="東京都近郊での賃貸仲介【一般&店舗】向けのチャンネル運営。"
          width={220}
          image="/7.png"
          details={{
            case: "住みやすい場所や、治安の悪い地域などの動画をあげ、これから東京に住みたい人だけではなく、誰でも知識として気になってしまう内容の動画を作った。また各種SNSのホーム画面に公式LINEのURLを貼ることで賃貸をすぐに探したいお客様やより初期費用を抑えたいお客様がすぐお問い合わせできるようにした。",
            results: "半年間の運用で全SNSの総フォロワー1万人越え。LINE@の追加人数も500人を超え実際、２３区内の不動産仲介を複数契約させることができた。"
          }}
          title=""
          className="bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm text-white"
        />
      </AnimatedSection>

      <AnimatedSection direction="right">
        <CaseStudyCard
          client="投資スクールの複数チャンネル立ち上げと運営"
          width={400}
          image="/8.png"
          details={{
            case: "投資を始めて行う人向けの教材販売会社からの依頼。経済/投資家関係動画を出し認知を取れる動画を作成。不動産CH同様ホーム画面にLINE@を設置し集客。YouTubeではより興味を持った視聴者に刺さるロング動画や講演会の切り抜きを投稿している。",
            results: "6CH運用し計12万人登録。15ヶ月で40万円の商品計300人以上にご購入頂いた。現在、各CHの2万人達成とファンを増やすために新たな角度からの動画も投稿中。"
          }}
          title=""
          className="bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm text-white"
        />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <CaseStudyCard
          client="美容系インフルエンサーの育成と運用支援"
          width={250}
          image="/10.png"
          details={{
            case: "企業のような集客の為にてはなく、クリエイター育成を行う。バズるためのコンセプトや編集方法まで全て指示。最初は看護師インフルエンサーであったが、市場が小さい為、美容形インフルエンサーに枠を広げ現在は活動している。",
            results: "現在総フォロワー5万人を誇り100万再生動画は10本以上。企業タイアップ動画が半分以上になるほど信頼度が厚いCHになっている。"
          }}
          className="bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm text-white"
        />
      </AnimatedSection>
    </div>
  )
}

