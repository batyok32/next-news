//  POST /api/new-post

import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect(
            "mongodb+srv://batyr:batyrbet@cluster0.f67kr.mongodb.net/newsDB?retryWrites=true&w=majority"
        );
        const db = client.db();

        const newsCollection = db.collection("posts");

        const result = await newsCollection.insertOne(data);
        client.close();
        res.status(201).json({ message: "Post was published!", data: data });
    }
}

export default handler;
