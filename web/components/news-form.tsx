'use client'

import { useState } from 'react'
import { NewsItem } from '@/models/News'

export function NewsForm() {
  const [newsItem, setNewsItem] = useState<Omit<NewsItem, '_id'>>({
    title: '',
    content: '',
    date: new Date(),
    category: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsItem),
      })
      if (res.ok) {
        // Reset form and show success message
        setNewsItem({ title: '', content: '', date: new Date(), category: '' })
        alert('News item created successfully!')
      } else {
        throw new Error('Failed to create news item')
      }
    } catch (error) {
      console.error('Error creating news item:', error)
      alert('Failed to create news item')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          value={newsItem.title}
          onChange={(e) => setNewsItem({ ...newsItem, title: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg text-gray-800"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
        <textarea
          id="content"
          value={newsItem.content}
          onChange={(e) => setNewsItem({ ...newsItem, content: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg text-gray-800"
          rows={4}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
        <input
          type="text"
          id="category"
          value={newsItem.category}
          onChange={(e) => setNewsItem({ ...newsItem, category: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg text-gray-800"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Create News Item
      </button>
    </form>
  )
}

