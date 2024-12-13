import { Navigation } from "@/components/navigation"
import { NewsFilters } from "@/components/news-filters"
import { NewsList } from "@/components/news-list"
import { NewsItem } from "@/models/News"

async function getNews(): Promise<NewsItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch news')
  }
  return res.json()
}

export default async function NewsPage() {
  const newsItems = await getNews()

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-7xl font-bold text-gray-800 mb-16">
          News
        </h1>
        <NewsFilters />
        <NewsList items={newsItems} />
      </div>
    </main>
  )
}

