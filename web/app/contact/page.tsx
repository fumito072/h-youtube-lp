import { ContactForm } from "@/components/contact-form"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <main className="bg-white min-h-screen">
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-6xl text-gray-900 mb-8">
                お問い合わせ
              </h2>
              <ContactForm />
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}

