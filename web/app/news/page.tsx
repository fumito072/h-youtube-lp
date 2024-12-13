'use client'

import { Navigation } from "@/components/navigation"
import { NewsFilters } from "@/components/news-filters"
import { NewsList } from "@/components/news-list"
import { newsItems } from "@/data/news"
import { useState } from "react"

export default function NewsPage() {
  const [filter, setFilter] = useState('all')

  const filteredNews = newsItems.filter(item => {
    if (filter === 'all') return true
    if (filter === 'press') return item.category === 'プレスリリース'
    if (filter === 'notice') return item.category === 'お知らせ'
    return true
  })

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-7xl font-bold text-gray-800 mb-16">
          News
        </h1>
        <NewsFilters onFilterChange={setFilter} />
        <NewsList items={filteredNews} />
      </div>
    </main>
  )
}

