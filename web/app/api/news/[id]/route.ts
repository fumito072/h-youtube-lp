import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { News, NewsItem } from '@/models/News'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise
    const db = client.db('mediaaid')
    const newsModel = new News(db)
    const newsItem = await newsModel.getById(params.id)
    if (!newsItem) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 })
    }
    return NextResponse.json(newsItem)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise
    const db = client.db('mediaaid')
    const newsModel = new News(db)
    const updatedNewsItem: Partial<NewsItem> = await request.json()
    const success = await newsModel.update(params.id, updatedNewsItem)
    if (!success) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 })
    }
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise
    const db = client.db('mediaaid')
    const newsModel = new News(db)
    const success = await newsModel.delete(params.id)
    if (!success) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 })
    }
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

