'use client'

import { useRef, useEffect, useState } from "react"
import { YouTubeEmbed } from '@next/third-parties/google'

const videos = [
  {
    id: 'KbwqgnZTvpE',
    title: '日本がインドネシアに絶縁宣言！高速鉄道でついにやり返したこととは何なのか？！',
  },
  {
    id: 'Gd1_s9xNWpI',
    title: 'なぜ死者数世界一のヴィクトリア湖は毎年5000人もなくなるのか？',
  },
  {
    id: 'nDJjiDAhypU',
    title: '日本に頼んだイタリア鉄道と中国に頼んだチェコ鉄道の末路がヤバすぎた…',
  },
  {
    id: "M_apHd1-dxk",
    title: "【1位ブッチギリ】今後最も人口が減る都道府県 TOP10…！"
  },
  {
    id: "hzItoB51w9E",
    title: "hzItoB51w9E"
  },
  {
    id: "6_SgKoMqRZ8",
    title: "日本と組んだテキサス新幹線と中国と組んだカリフォルニア新幹線の末路。"
  },
  {
    id: "h7pqkz6oLJk",
    title: "夜行バスに大阪～東京で乗ったら運転手が大激怒でヤバすぎた"
  },
  {
    id: "zXkF3HJyAcQ",
    title: "【絶望】なぜ京都市は10年以内に財政破綻するのか"
  }
]

export function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [videoWidth, setVideoWidth] = useState(320) // Default width

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const moveVideo = () => {
      const firstVideo = scrollContainer.firstElementChild as HTMLElement
      if (!firstVideo) return

      const videoWidth = firstVideo.offsetWidth
      setVideoWidth(videoWidth)

      scrollContainer.style.transition = 'transform 0.5s linear'
      scrollContainer.style.transform = `translateX(-${videoWidth}px)`

      setTimeout(() => {
        scrollContainer.style.transition = 'none'
        scrollContainer.style.transform = 'translateX(0)'
        scrollContainer.appendChild(firstVideo)
      }, 500)
    }

    const intervalId = setInterval(moveVideo, 3000) // Adjust speed here

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex"
        style={{
          width: `${videoWidth * (videos.length + 1)}px`,
        }}
      >
        {videos.map((video, index) => (
          <div key={`${video.id}-${index}`} className="flex-shrink-0 px-2" style={{ width: `${videoWidth}px` }}>
            <div className="aspect-video">
              <YouTubeEmbed
                videoid={video.id}
                params="rel=0"
              />
            </div>
            <h2 className="mt-2 text-sm font-medium text-gray-900 line-clamp-2">{video.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

