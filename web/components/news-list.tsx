import Link from "next/link"
import { NewsItem } from "@/types/news"

interface NewsListProps {
  items: NewsItem[]
}

export function NewsList({ items }: NewsListProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <Link 
          key={item.id} 
          href={item.link}
          className="block group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-6">
            <div className="flex items-center gap-4 mb-2">
              <time className="text-sm text-gray-500">{item.date}</time>
              <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {item.category}
              </span>
            </div>
            <h3 className="text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

