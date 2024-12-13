import { Navigation } from "@/components/navigation"
import { CompanyHero } from "@/components/company-hero"
import { CompanyInfo } from "@/components/company-info"

export default function CompanyPage() {
  return (
    <main>
      <Navigation />
      <CompanyHero />
      <CompanyInfo />
    </main>
  )
}
