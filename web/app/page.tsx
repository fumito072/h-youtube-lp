import { Mission } from "@/components/mission"
import { Navigation } from "@/components/navigation"
import { SocialLinks } from "@/components/social-links"
import { VideoCarousel } from "@/components/video-carousel"
import { Space } from "lucide-react"


export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 mt-16">日本旅行の発見</h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Discover Japan Through Travel
        </p>

        <SocialLinks />
        
        <div className="w-full">
          <VideoCarousel />
        </div>
        <Space/>
        <Mission />
      </main>
    </div>
  )
}
