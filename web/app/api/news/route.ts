import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { News, NewsItem } from '@/models/News'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('mediaaid')
    const newsModel = new News(db)
    const news = await newsModel.getAll()
    return NextResponse.json(news)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db('mediaaid')
    const newsModel = new News(db)
    const newsItem: Omit<NewsItem, '_id'> = await request.json()
    const id = await newsModel.create(newsItem)
    return NextResponse.json({ id }, { status: 201 })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

