"use client"

import { motion } from "framer-motion"

export function CompanyHero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-400/80" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-32 h-32 border-4 border-white/20"
        animate={{
          rotate: [0, 90, 0],
          borderRadius: ["0%", "50%", "0%"],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <motion.h1 
          className="text-7xl md:text-8xl font-bold text-white tracking-tight mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Company
        </motion.h1>

        {/* Japanese Text */}
        <motion.div
          className="lg:w-1/2 flex flex-col items-start lg:items-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-left lg:text-right">
            月刊再生回数7000万回
          </h2>
          <p className="text-xl md:text-2xl text-white text-left lg:text-right max-w-2xl">
          地理や歴史に絡めて旅行したくなるような動画をショート動画中心に作成。
          全て自ら原稿を書いて撮影しております。
          また1つの動画あたり平均10万再生されており月の合計再生数は7000万回を超えております。
          </p>
        </motion.div>
      </div>
    </div>
  )
}

