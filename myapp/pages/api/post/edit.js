import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response){
    if(request.method == 'POST'){
    let session = await getServerSession(request, response, authOptions)

    let change = {title : request.body.title, content : request.body.content }

    const db = (await connectDB).db('blog')
    let filter = await db.collection('post').findOne({ _id : new ObjectId(request.body) })

    console.log(filter.author)
    if(!session){
        if(filter.author == session.user.email){
            let result = await db.collection('post').updateOne(
                {_id : new ObjectId(request.body._id)},
                {$set : change}
            )
            return response.status(200).redirect(302,'/olist')
        }else{
            return response.status(500).json('현재유저와 작성자 불일치')
        }
    }else{
        return response.status(500).json('로그인 후 이용 가능합니다.')
    }
    
    }
}