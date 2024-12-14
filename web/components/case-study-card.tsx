import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface CaseStudyProps {
  number?: number
  title: string
  client: string
  image: string
  height?: number
  width?: number
  details: {
    case: string
    results: string
  }
  youtubeUrl?: string
  tiktokUrl?: string
}

export function CaseStudyCard({
  number,
  height,
  width,
  title,
  client,
  image,
  details,
  youtubeUrl,
  tiktokUrl
}: CaseStudyProps) {
  return (
    <Card className="w-full bg-gray-50 overflow-hidden">
      <CardHeader className="border-b bg-white">
        <div className="flex justify-between items-start">
          {number && (
            <div className="flex items-center gap-4">
              <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                {number}
              </div>
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
          )}
          <div className="text-xl">Forever Amusement Inc.</div>
        </div>
      </CardHeader>
      <CardContent className="p-8 h-full flex flex-col">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold mb-4">{client}</h4>
            <div className="flex justify-center items-center" style={{height: "100%"}}>
              <Image
                src={image}
                alt={client}
                width={width ?? 600}
                height={height ?? 400}
                className="rounded-lg"
              />
            </div>
            {youtubeUrl && (
              <a 
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-sm text-blue-600 hover:underline break-all"
              >
                {youtubeUrl}
              </a>
            )}
            {tiktokUrl && (
              <a 
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-sm text-blue-600 hover:underline break-all"
              >
                {tiktokUrl}
              </a>
            )}
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <div className="bg-black text-white px-4 py-2 inline-block rounded-md mb-4">
                  案件詳細
                </div>
                <div className="space-y-4">
                  <div className="bg-black text-white p-3 rounded">案件</div>
                  <p className="p-3 bg-white rounded">{details.case}</p>
                  <div className="bg-black text-white p-3 rounded">実績</div>
                  <p className="p-3 bg-white rounded">{details.results}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

