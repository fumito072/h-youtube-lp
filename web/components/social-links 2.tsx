import { Youtube, Instagram, Twitter, Facebook, Rss } from 'lucide-react'
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 my-8">
      <Link href="https://youtube.com/@yotaro_japantravel" className="text-gray-500 hover:text-gray-900">
        <Youtube className="w-6 h-6" />
        <span className="sr-only">YouTube</span>
      </Link>
      <Link href="#" className="text-gray-500 hover:text-gray-900">
        <Instagram className="w-6 h-6" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link href="#" className="text-gray-500 hover:text-gray-900">
        <Twitter className="w-6 h-6" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="#" className="text-gray-500 hover:text-gray-900">
        <Facebook className="w-6 h-6" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="#" className="text-gray-500 hover:text-gray-900">
        <Rss className="w-6 h-6" />
        <span className="sr-only">RSS Feed</span>
      </Link>
    </div>
  )
}

