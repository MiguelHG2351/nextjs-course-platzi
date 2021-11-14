import type { NextApiRequest, NextApiResponse } from "next";
import DB from "database/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = new DB();
    const id = req.query.id;
    const data = await db.getById(id as string);

    if(!data) {
        res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(data);
}
