"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Noto_Sans_JP } from 'next/font/google'
import { useEffect, useState } from 'react'
import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { VideoCarousel } from "@/components/video-carousel"
import Link from "next/link"

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const Star = ({ x, y }: { x: number; y: number }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{ x, y, width: 2, height: 2 }}
    animate={{
      scale: [1, 1.5, 1],
      opacity: [0.7, 1, 0.7],
    }}
    transition={{
      duration: Math.random() * 2 + 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
)

const AnimatedText = ({ text }: { text: string }) => (
  <motion.span
    initial={{ opacity: 0.5 }}
    animate={{ opacity: [0.5, 1, 0.5] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {text}
  </motion.span>
)

export default function Page() {
  const [stars, setStars] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1729] to-[#0a0f1d] relative overflow-hidden">
      <Navigation />
      <div style={{height: "50px"}}></div>
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"
        style={{
          backgroundPosition: '-1px -1px'
        }}
      />

      {/* Stars */}
      {stars.map((star, index) => (
        <Star key={index} x={star.x} y={star.y} />
      ))}

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="mb-16">
          <Image
            src="/logo.png"
            alt="Media Aid"
            width={150}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className={`${notoSansJP.className} text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white`}>
              <AnimatedText text="すべての大人に、" />
              <br />
              <AnimatedText text="ワクワクを。" />
            </h1>

            {/* Mission Statement */}
            <div className={`${notoSansJP.className} bg-black bg-opacity-50 text-white p-6 rounded-tr-[50px] relative backdrop-blur-sm`}>
              <h2 className="text-xl font-bold mb-4">mission</h2>
              <p className="text-sm leading-relaxed">
              「子供時代はワクワクしていたのに大人になるとイヤイヤ仕事に行き1日が終わる」
そんな毎日を生きる大人達が「こんな働き方あるんだ！」「毎日が楽しい！」
              </p>
              <p className="text-sm leading-relaxed mt-4">
              と思うような社会を作って行きたい。
              このように日々考え、事業づくりをしております。
              </p>
            </div>

            {/* Service Page Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                href="/company" 
                className={`${notoSansJP.className} inline-block mt-6 px-5 py-2 bg-transparent border-2 border-blue-400 text-blue-400 rounded-full font-medium text-base hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105`}
              >
                サービスページへ
              </Link>
            </motion.div>
          </div>

          {/* Phone Mockups */}
          <div className="relative h-[400px] md:h-[600px] mb-8 lg:mb-0">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute right-0 md:right-0 top-0"
            >
              <Image
                src="/8.png"
                alt="TikTok Interface"
                width={250}
                height={500}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 20, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-24 md:right-32 top-10 md:top-20"
            >
              <Image
                src="/1.png"
                alt="TikTok App"
                width={250}
                height={500}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
        <VideoCarousel />
        <SocialLinks />
      </main>
    </div>
  )
}

