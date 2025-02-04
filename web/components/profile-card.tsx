import Image from "next/image"

interface ProfileCardProps {
  title: string
  nameJp: string
  nameEn: string
  description: string[]
  imageSrc: string
  backgroundText?: string
  buttonText?: string
  buttonUrl?: string
}

export default function ProfileCard({
  title = "代表取締役社長",
  nameJp = "松永陽太郎",
  nameEn = "Yotaro Matsunaga",
  description = [
    "大学在学中からクリエイター活動を開始。",
    "初期はUber eatsの配達を全国で行う動画を配信。",
    "2021年同世代の交通系YouTuberが増え始めたので車や鉄道を使ったロング動画の投稿を開始。",
    "2022年に旅行の豆知識を詰め込んだショート動画が爆発的に再生され始め、現在SNS総フォロワー数40万人を超える。",
    "國學院大学を卒業しており教員免許を持っている。",
    "イベント事業やWebサイトの受託事業なども過去に経験。"
  ],
  imageSrc = "/profile.png",
  backgroundText = "CEO",
  buttonText,
  buttonUrl
}: ProfileCardProps) {
  return (
    <div className="relative max-w-4xl mx-auto p-6 overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[180px] font-bold text-gray-100 select-none whitespace-nowrap">
          {backgroundText}
        </span>
      </div>

      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="relative w-64 h-64 flex-shrink-0">
          <div className="absolute inset-0 rounded-full border-4 border-black">
            <Image
              src={imageSrc}
              alt={nameEn}
              width={256}
              height={256}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <h1 className="text-4xl font-bold mb-1">{nameJp}</h1>
          <h3 className="text-2xl mb-6">{nameEn}</h3>
          
          <div className="space-y-2 text-lg">
            {description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {buttonText && buttonUrl && (
            <a
              href={buttonUrl}
              className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

