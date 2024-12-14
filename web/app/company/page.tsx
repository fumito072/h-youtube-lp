import { Navigation } from "@/components/navigation"
import { CompanyHero } from "@/components/company-hero"
import { CompanyInfo } from "@/components/company-info"
import ProfileSection from "@/components/profile-section"

export default function CompanyPage() {
  return (
    <main>
      <Navigation />
      <CompanyHero />
      <ProfileSection />
      <CompanyInfo />
    </main>
  )
}
