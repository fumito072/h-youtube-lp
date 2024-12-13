import { Navigation } from "@/components/navigation"
import { NewsForm } from "@/components/news-form"
import { News, NewsItem } from "@/models/News"
import clientPromise from "@/lib/mongodb"

async function getNews(): Promise<NewsItem[]> {
  const client = await clientPromise
  const db = client.db("mediaaid")
  const newsModel = new News(db)
  return newsModel.getAll()
}

export default async function AdminNewsPage() {
  const newsItems = await getNews()

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Manage News
        </h1>
        <NewsForm />
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Existing News</h2>
          {newsItems.map((item) => (
            <div key={item._id?.toString()} className="bg-white p-4 rounded-lg shadow mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-700">{item.content.substring(0, 100)}...</p>
              <div className="mt-2">
                <button className="text-blue-700 hover:underline mr-4">Edit</button>
                <button className="text-red-700 hover:underline">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

