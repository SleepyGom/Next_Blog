import { connectDB } from "@/util/database"

export default async function List () {

    const db = (await connectDB).db("blog")
    let result = await db.collection('post').find().toArray()

    return (
    <div className="list-bg">
        {
        result.map((a)=>{
            return(
            <div className="list-item">
                <h4>{a.title}</h4>
                <p>{a.content}</p>
            </div>
            )
        })
        }
    </div>
    )
}