import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"

export default async function List () {

    const db = (await connectDB).db("blog")
    let result = await db.collection('post').find().toArray()
    
    console.log(result)
    return (
    <div className="list-bg">
        {
        result.map((a)=>{
            return(
            <div className="list-item">
                <Link href={`detail/${a._id}`}><h4>{a.title}</h4></Link>
                <DetailLink/>
                <p>{a.content}</p>
            </div>
            )
        })
        }
    </div>
    )
}