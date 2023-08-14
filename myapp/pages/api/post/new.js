import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response){
    if(request.method == 'POST'){
        if(request.body.title == ''){
            return response.status(500).json('제목 쓰세요')
        }
        let session =  await getServerSession(request, response, authOptions)

        if(session) {
            request.body.author = session.user.email
        }
        
        const db = (await connectDB).db('blog')
        let result = await db.collection('post').insertOne(request.body)
        return response.status(200).redirect(302, '/list')
    }
}