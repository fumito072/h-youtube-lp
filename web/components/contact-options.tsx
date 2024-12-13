'use client'

import { ArrowRight } from 'lucide-react'
import Link from "next/link"

const contactOptions = [
  {
    id: 'service',
    title: '弊社サービス導入をご検討の方はこちら',
    href: '/contact/service'
  },
  {
    id: 'media',
    title: '取材・メディア掲載に関するお問い合わせ',
    href: '/contact/media'
  },
  {
    id: 'fee',
    title: '料金に関するお問い合わせ',
    href: '/contact/fee'
  },
  {
    id: 'business',
    title: '弊社への事業提携・サービスのご提案',
    href: '/contact/business'
  },
  {
    id: 'other',
    title: 'その他のお問い合わせ',
    href: '/contact/other'
  }
]

export function ContactOptions() {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {contactOptions.map((option) => (
        <Link
          key={option.id}
          href={option.href}
          className="group flex items-center justify-between w-full p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
        >
          <span className="text-gray-800">{option.title}</span>
          <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
        </Link>
      ))}
    </div>
  )
}

