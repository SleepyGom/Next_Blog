import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response){
    let session = await getServerSession(request, response, authOptions)
    if(request.method == 'POST'){
        request.body = JSON.parse(request.body)
        let save = {
            content : request.body.comment,
            parent : new ObjectId(request.body._id),
            author : session.user.name
        }

        const db = (await connectDB).db('blog')
        let result = await db.collection('comment').insertOne(save)
        response.status(200).json('저장완료')
    }
}