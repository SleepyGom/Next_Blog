import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"
import ListItem from "./Listitem"

export default async function List () {

    const db = (await connectDB).db("blog")
    let result = await db.collection('post').find().toArray()
    
    console.log(result)
    return (
    <div className="list-bg">
        <ListItem result={result}/>
    </div>
    )
}