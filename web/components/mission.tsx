'use client'

import { motion } from 'framer-motion'

export function Mission() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-gray-900">
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 md:mb-0">私たちについて</h2>
        <p className="text-xl text-emerald-600">Forever Amusement Inc.</p>
      </motion.div>

      <div className="text-center space-y-12">
        <motion.p 
          className="text-5xl font-medium text-emerald-600"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ミッション
        </motion.p>
        
        <motion.h3 
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          全ての大人にワクワクを
        </motion.h3>

        <motion.div 
          className="space-y-6 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>
            「子供時代はワクワクしていたのに大人になるとイヤイヤ仕事に行き1日が終わる」
          </p>
          <p>
            そんな毎日を生きる大人達が「こんな働き方あるんだ！」「毎日が楽しい！」と思うような社会を作って行きたい。
          </p>
          <p>
            このように日々考え、事業づくりをしております。
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a 
          href="/service" 
          className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors duration-300"
        >
          私たちの旅に参加する
        </a>
      </motion.div>
    </section>
  )
}

