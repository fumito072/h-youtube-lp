import { Navigation } from "@/components/navigation"
import { NewsFilters } from "@/components/news-filters"
import { NewsList } from "@/components/news-list"
import clientPromise from "@/lib/mongodb"
import { News, NewsItem } from "@/models/News"


async function getNews(): Promise<NewsItem[]> {
  const client = await clientPromise
  const db = client.db("mediaaid")
  const newsModel = new News(db)
  return newsModel.getAll()
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

