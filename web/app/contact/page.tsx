import { ContactForm } from "@/components/contact-form"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
        {/* SNS運用代行のお問い合わせフォーム */}
        <div className="max-w-2xl mx-auto mt-24">
          <h2 className="text-3xl text-gray-900 mb-4">
            SNS運用代行に関するお問い合わせ
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            SNS運用代行につきましては以下のフォームからお問い合わせください。
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://forms.gle/RFrESTLdigKc9PQp6"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full h-[600px] border rounded-lg shadow-sm"
            >
              読み込んでいます…
            </iframe>
          </div>
        </div>
        <Navigation />
      <div className="container mx-auto px-4 py-24">
        <main className="bg-white min-h-screen">
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl text-gray-900 mb-8">
                その他お問い合わせ
              </h2>
              <ContactForm />
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}


