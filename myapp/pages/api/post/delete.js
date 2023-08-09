import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response){
    if(request.method == 'POST'){
        const db = (await connectDB).db('blog')
        let result = await db.collection('post').deleteOne({_id: new ObjectId(request.body)})
        response.status(200).json('삭제 완료')
    }
}