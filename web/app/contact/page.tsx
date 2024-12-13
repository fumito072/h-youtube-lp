import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-7xl font-bold text-gray-800 mb-16">
          Contact
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 mb-8">
            お問い合わせやご相談は、以下のフォームよりお気軽にご連絡ください。
            通常2営業日以内にご返答いたします。
          </p>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

