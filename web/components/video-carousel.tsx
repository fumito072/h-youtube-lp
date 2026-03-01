'use client'

import { useRef, useEffect, useState } from "react"
import { YouTubeEmbed } from '@next/third-parties/google'

const videos = [
  {
    id: 'VVsAXfTw-VM',
    title: '【裏切り】高市内閣を内側から破壊するかもしれない自民党大物議員 5選',
    duration: 1085,
  },
  {
    id: 'i73KkGycCHs',
    title: '【凄すぎwww】高市さんが既に仲良くなっている超重要大国 5選',
    duration: 948,
  },
  {
    id: 'H7wFzaG66SM',
    title: '高市総理誕生した瞬間に日本で大変化する５つのこと',
    duration: 1216,
  },
  {
    id: 'niaYl83hAvU',
    title: 'アパホテルの創業社長が亡くなってしまった、今後ホテル経営はどうなっていくのか？',
    duration: 735,
  },
  {
    id: 'txEWQ3w7bgo',
    title: '創価学会の比率が滅茶苦茶多い都道府県 TOP10',
    duration: 743,
  },
  {
    id: 'donj0uZa3nM',
    title: '自民党が300議席獲得し中道が崩壊しそうなのでその後の政治変化予測がやばすぎます…',
    duration: 1028,
  },
  {
    id: '0iDQY7QUSdU',
    title: '【落選】高市旋風により消滅した立憲超大物議員 TOP7',
    duration: 955,
  },
  {
    id: 'Zlk2de1_dxI',
    title: 'ヨーロッパに実在する「ネズミ講で財政破綻」した国の末路。',
    duration: 1119,
  },
]

export function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [videoWidth, setVideoWidth] = useState(320) // Default width
  const displayVideos = videos.filter((video) => video.duration >= 180)

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
          width: `${videoWidth * (displayVideos.length + 1)}px`,
        }}
      >
        {displayVideos.map((video, index) => (
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

