import { ObjectId } from 'mongodb'

export interface NewsItem {
  _id?: ObjectId
  title: string
  content: string
  date: Date
  category: string
}

export class News {
  constructor(private db: any) {}

  async getAll() {
    return this.db.collection('news').find().sort({ date: -1 }).toArray()
  }

  async getById(id: string) {
    return this.db.collection('news').findOne({ _id: new ObjectId(id) })
  }

  async create(newsItem: Omit<NewsItem, '_id'>) {
    const result = await this.db.collection('news').insertOne(newsItem)
    return result.insertedId
  }

  async update(id: string, newsItem: Partial<NewsItem>) {
    const result = await this.db.collection('news').updateOne(
      { _id: new ObjectId(id) },
      { $set: newsItem }
    )
    return result.modifiedCount > 0
  }

  async delete(id: string) {
    const result = await this.db.collection('news').deleteOne({ _id: new ObjectId(id) })
    return result.deletedCount > 0
  }
}
