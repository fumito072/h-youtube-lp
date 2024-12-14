import { Youtube, Instagram, Twitter, Facebook, Rss } from 'lucide-react'
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 my-8">
      <Link href="https://youtube.com/@yotaro_japantravel" className="text-red-500 hover:text-red-400 transition-colors duration-200">
        <Youtube className="w-6 h-6 filter drop-shadow-[0_0_2px_rgba(239,68,68,0.7)]" />
        <span className="sr-only">YouTube</span>
      </Link>
      <Link href="#" className="text-pink-500 hover:text-pink-400 transition-colors duration-200">
        <Instagram className="w-6 h-6 filter drop-shadow-[0_0_2px_rgba(236,72,153,0.7)]" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link href="#" className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
        <Twitter className="w-6 h-6 filter drop-shadow-[0_0_2px_rgba(59,130,246,0.7)]" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="#" className="text-blue-600 hover:text-blue-500 transition-colors duration-200">
        <Facebook className="w-6 h-6 filter drop-shadow-[0_0_2px_rgba(37,99,235,0.7)]" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="#" className="text-orange-500 hover:text-orange-400 transition-colors duration-200">
        <Rss className="w-6 h-6 filter drop-shadow-[0_0_2px_rgba(249,115,22,0.7)]" />
        <span className="sr-only">RSS Feed</span>
      </Link>
    </div>
  )
}
