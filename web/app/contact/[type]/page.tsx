import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"

export default function ContactTypePage({
  params
}: {
  params: { type: string }
}) {
  const titles = {
    service: '弊社サービス導入をご検討の方はこちら',
    media: '取材・メディア掲載に関するお問い合わせ',
    fee: '料金に関するお問い合わせ',
    business: '弊社への事業提携・サービスのご提案',
    other: 'その他のお問い合わせ'
  }

  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-7xl font-bold text-gray-900 mb-8">
          Contact
        </h1>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl text-gray-900 mb-8">
            {titles[params.type as keyof typeof titles]}
          </h2>
          <ContactForm type={params.type} />
        </div>
      </div>
    </main>
  )
}

