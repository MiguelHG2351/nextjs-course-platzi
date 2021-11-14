import type { NextApiRequest, NextApiResponse } from 'next'
import DB from 'database/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = new DB()
    const data = await db.getAll()
    const length = data.length
    
  res.status(200).json({ data, length })
}
