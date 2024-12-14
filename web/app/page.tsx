"use client"

import { Mission } from "@/components/mission"
import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { VideoCarousel } from "@/components/video-carousel"
import { Space } from "lucide-react"
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden relative">
      <Navigation />
      
      {/* Background animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(148,187,233,0.5) 100%)",
            "radial-gradient(circle, rgba(255,255,255,0.5) 100%, rgba(148,187,233,0.5) 0%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <main className="pt-24 px-4 flex flex-col items-center relative z-10">
        <motion.h1 
          className="text-4xl font-bold text-center mb-4 text-gray-900 mt-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Forever Amusement Inc.
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Enjoy Life Throughout Your Journey
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialLinks />
        </motion.div>
        
        <div className="w-full">
          <VideoCarousel />
        </div>
        <Mission />
      </main>
    </div>
  )
}