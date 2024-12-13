import { Navigation } from "@/components/navigation"
import { ContactOptions } from "@/components/contact-options"

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-7xl font-bold text-gray-900 mb-8">
          Contact
        </h1>
        <p className="text-gray-700 mb-16">
          お問い合わせ項目を下記ボタンより選択ください。
        </p>
        <ContactOptions />
      </div>
    </main>
  )
}

