'use client'

import { useState } from 'react'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    })
  }

  return (
    <form action='https://formspree.io/f/mvgzvkrz' className="space-y-6" method='POST'>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-800 mb-1">
          会社名 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
          電話番号
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
        onClick={handleSubmit}
      >
        送信する
      </button>
    </form>
  )
}

