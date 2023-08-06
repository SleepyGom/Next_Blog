import { connectDB } from "@/util/database"


export default async function AllData(requst, response){
    const db = (await connectDB).db("blog")
    let result = await db.collection('post').find().toArray()
    
    return response.status(200).json(result)
}