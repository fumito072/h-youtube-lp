import ProfileCard from "./profile-card";

export default function ProfileSection() {
    return (
        <section className="py-24 bg-white text-gray-900">
            <div className="container mx-auto px-4">
                <ProfileCard  
                    title = "代表取締役社長"
                    nameJp = "松永陽太郎"
                    nameEn = "Yotaro Matsunaga"
                    description = {[
                        "大学在学中からクリエイター活動を開始。",
                        "初期はUber eatsの配達を全国で行う動画を配信。",
                        "2021年同世代の交通系YouTuberが増え始めたので車や鉄道を使ったロング動画の投稿を開始。",
                        "2022年に旅行の豆知識を詰め込んだショート動画が爆発的に再生され始め、現在SNS総フォロワー数40万人を超える。",
                        "國學院大学を卒業しており教員免許を持っている。",
                        "イベント事業やWebサイトの受託事業なども過去に経験。"
                    ]}
                    imageSrc = "/profile.png"
                    backgroundText = "CEO" />
            </div>
        </section>
    )
}