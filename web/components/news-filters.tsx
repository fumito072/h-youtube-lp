'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface NewsFiltersProps {
  onFilterChange: (filter: string) => void
}

export function NewsFilters({ onFilterChange }: NewsFiltersProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <div className="flex gap-2 mb-12">
      <Button
        variant={activeFilter === 'all' ? 'default' : 'outline'}
        onClick={() => handleFilterClick('all')}
        className="rounded-full bg-white text-gray-800 hover:bg-gray-100"
      >
        All
      </Button>
      <Button
        variant={activeFilter === 'press' ? 'default' : 'outline'}
        onClick={() => handleFilterClick('press')}
        className="rounded-full bg-white text-gray-800 hover:bg-gray-100"
      >
        プレスリリース
      </Button>
      <Button
        variant={activeFilter === 'notice' ? 'default' : 'outline'}
        onClick={() => handleFilterClick('notice')}
        className="rounded-full bg-white text-gray-800 hover:bg-gray-100"
      >
        お知らせ
      </Button>
    </div>
  )
}
