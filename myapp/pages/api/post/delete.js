import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response){
    if(request.method == 'POST'){
        let session = await getServerSession(request, response, authOptions)
        console.log(session)

        const db = (await connectDB).db('blog')

        let filter = await db.collection('post').findOne({_id: new ObjectId(request.body)})

        if(session){
            if(filter.author == session.user.email){
                let result = await db.collection('post').deleteOne({_id: new ObjectId(request.body)})
                return response.status(200).json('삭제 완료')
            }
            else{
                return response.status(500).json('유저정보가 올바르지 않습니다.')
            }
        }
        else{
            return response.status(500).json('로그인 후 이용 가능합니다.')
        }
    }
}