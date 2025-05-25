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
    <Card className="w-full bg-opacity-80 bg-gray-900 backdrop-filter backdrop-blur-sm text-white overflow-hidden">
      <CardHeader className="border-b border-gray-700 bg-opacity-50 bg-gray-800">
        <div className="flex justify-between items-start">
          {number && (
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                {number}
              </div>
              <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
          )}
          <div className="text-xl text-blue-300">Forever Amusement</div>
        </div>
      </CardHeader>
      <CardContent className="p-8 h-full flex flex-col">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold mb-4 text-blue-200">{client}</h4>
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
                className="text-sm text-blue-400 hover:text-blue-300 hover:underline break-all"
              >
                {youtubeUrl}
              </a>
            )}
            {tiktokUrl && (
              <a 
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-sm text-blue-400 hover:text-blue-300 hover:underline break-all"
              >
                {tiktokUrl}
              </a>
            )}
          </div>
          <div className="bg-opacity-50 bg-gray-800 rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <div className="bg-blue-500 text-white px-4 py-2 inline-block rounded-md mb-4">
                  案件詳細
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-500 text-white p-3 rounded">案件</div>
                  <p className="p-3 bg-opacity-30 bg-gray-700 rounded text-gray-300">{details.case}</p>
                  <div className="bg-blue-500 text-white p-3 rounded">実績</div>
                  <p className="p-3 bg-opacity-30 bg-gray-700 rounded text-gray-300">{details.results}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

