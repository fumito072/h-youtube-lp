import { ContactForm } from "@/components/contact-form"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-6xl text-gray-900 mb-16">
            お問い合わせ
          </h2>

          {/* SNS運用代行のお問い合わせフォーム */}
          <div className="mb-24">
            <h2 className="text-3xl text-gray-900 mb-4">
              SNS運用代行に関するお問い合わせ
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              SNS運用代行につきましては、以下のリンクからフォームにアクセスしてください。
            </p>
            <Link
              href="https://forms.gle/RFrESTLdigKc9PQp6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
            >
              SNS運用代行お問い合わせフォームへ
            </Link>
          </div>

          {/* YouTube スポンサー広告のお問い合わせフォーム */}
          <div className="mb-24">
            <h2 className="text-3xl text-gray-900 mb-4">
              再生2円よーたろYouTube スポンサー広告
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              YouTube スポンサー広告に関するお問い合わせは、以下のリンクからフォームにアクセスしてください。
            </p>
            <Link
              href="https://forms.gle/j3naS6XRRQs3dmZ49"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
            >
              YouTube スポンサー広告お問い合わせフォームへ
            </Link>
          </div>

          {/* 一般的なお問い合わせフォーム */}
          <div>
            <h2 className="text-3xl text-gray-900 mb-4">
              一般的なお問い合わせ
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              以下のフォームから一般的なお問い合わせを受け付けております。
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}

