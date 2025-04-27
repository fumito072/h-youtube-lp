import { Youtube, Instagram, Twitter, Facebook, Rss } from 'lucide-react'
import Link from "next/link"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 my-8">
      <Link href="https://youtube.com/@yotaro_japantravel" className="text-red-500 hover:text-red-400 transition-colors duration-200">
        <Youtube className="w-6 h-6 filter drop-shadow-[0_0_2px_rgba(239,68,68,0.7)]" />
        <span className="sr-only">YouTube</span>
      </Link>
      <Link href="https://www.instagram.com/yotaro_education?igsh=cGwwOTkxanN6dGhk&utm_source=qr" className="text-pink-500 hover:text-pink-400 transition-colors duration-200">
        <Instagram className="w-6 h-6 filter drop-shadow-[0_0_2px_rgba(236,72,153,0.7)]" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link href="https://x.com/yotaro_travel" className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
        <Twitter className="w-6 h-6 filter drop-shadow-[0_0_2px_rgba(59,130,246,0.7)]" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="https://www.tiktok.com/@yotaro_education?_t=ZS-8vpcz9hGvv5&_r=1" className="text-gray hover:text-gray-800 transition-colors duration-200">
        <TikTokIcon className="w-6 h-6 filter drop-shadow-[0_0_2px_rgba(0,0,0,0.7)]" />
        <span className="sr-only">TikTok</span>
      </Link>
    </div>
  )
}

