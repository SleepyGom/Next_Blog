'use client'
import Link from "next/link"
import DetailLink from "./DetailLink"

export default function ListItem({result}){

    return(
        <div>
            {
                result.map((a)=>{
                    return(
                    <div className="list-item">
                        <Link href={`detail/${a._id}`}><h4>{a.title}</h4></Link>
                        <DetailLink/>
                        <p>{a.content}</p>
                        <Link href={`/edit/${a._id}`}>✏️</Link>
                        <span onClick={()=>{
                            fetch('/api/post/delete',{method: 'POST', body : a._id})
                            .then((res)=>{
                                return res.json()
                            })
                            .then((res)=>{
                                alert(res)
                            })
                        }}>🗑️</span>
                    </div>
                    )
                })
            }
        </div>
    )
}