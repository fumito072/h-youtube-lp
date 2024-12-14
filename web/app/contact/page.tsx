import { ContactForm } from "@/components/contact-form"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <main className="bg-white min-h-screen">
          <Navigation />
          <div className="container mx-auto px-4 py-24">
            <h1 className="text-7xl font-bold text-gray-900 mb-8">
              Contact
            </h1>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl text-gray-900 mb-8">
              </h2>
              <ContactForm />
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}

