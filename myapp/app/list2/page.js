//caching practice page
import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"
import ListItem from "./Listitem"

export const revalidate = 10;

export default async function List () {

    const db = (await connectDB).db("blog")
    let result = await db.collection('post').find().toArray()
    
    console.log(result)
    return (
    <div className="list-bg">
        <Link href={'/write'}>글쓰기</Link>
        <ListItem result={result}/>
    </div>
    )
}