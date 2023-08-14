import { connectDB } from "@/util/database.js"
import { MongoClient } from "mongodb"

export default async function Home() {
  
  const client = await connectDB;
  const db = client.db("blog");
  let result = await db.collection('post').find().toArray();


  // GET요청 caching
  // await fetch('/',{cache : 'force-cache'})
  
  return (
    <div>하위</div>
  )
}
