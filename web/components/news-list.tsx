import Link from "next/link"
import { NewsItem } from "@/models/News"

interface NewsListProps {
  items: NewsItem[]
}

export function NewsList({ items }: NewsListProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <Link 
          key={item._id?.toString()}
          href={`/news/${item._id}`}
          className="block group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-6">
            <div className="flex items-center gap-4 mb-2">
              <time className="text-sm text-gray-700">{new Date(item.date).toLocaleDateString('ja-JP')}</time>
              <span className="px-3 py-1 text-xs font-medium bg-blue-200 text-blue-800 rounded-full"> {/* Updated category tag colors */}
                {item.category}
              </span>
            </div>
            <h3 className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors"> {/* Updated title text color */}
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

