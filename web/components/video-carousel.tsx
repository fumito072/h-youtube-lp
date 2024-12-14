'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { YouTubeEmbed } from '@next/third-parties/google'
import { useState, useEffect, useRef } from "react"

const videos = [
  {
    id: 'ogfYd705cRs',
    title: '東京でマンションおすすめが詐欺されていない穴場エリア厳選１０箇所！！',
  },
  {
    id: 'ogfYd705cRs',
    title: 'トランプ大統領が本気でカナダをアメリカ51番目の州に併合しようとして大炎上',
  },
  {
    id: 'ogfYd705cRs',
    title: '【正確的に】女性兵士が多い国ランキング！',
  }
]

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  const previousVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1
      }
    )

    if (carouselRef.current) {
      observer.observe(carouselRef.current)
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={carouselRef}
      className={`relative w-full max-w-4xl mx-auto transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gray-700 hover:text-gray-900"
        onClick={previousVideo}
        aria-label="Previous video"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <div className="aspect-video flex justify-center items-center bg-gray-100">
        <div style={{width: "40rem"}}> {/* 16:9 aspect ratio width for 480p */}
          <YouTubeEmbed
            videoid={videos[currentIndex].id}
            height="100%"
            width="100%"
            params="rel=0"
          />
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-gray-700 hover:text-gray-900"
        onClick={nextVideo}
        aria-label="Next video"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold text-gray-900">{videos[currentIndex].title}</h2>
      </div>
    </div>
  )
}
