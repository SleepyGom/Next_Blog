'use client'
import Link from "next/link"
import DetailLink from "./DetailLink"

export default function ListItem({result}){

    return(
        <div>
            {
                result.map((a)=>{
                    return(
                    <div className="list-item" key={a}>
                        <Link href={`detail/${a._id}`}><h4>{a.title}</h4></Link>
                        <DetailLink/>
                        <p>{a.content}</p>
                        <Link href={`/edit/${a._id}`}>✏️</Link>
                        <span onClick={(e)=>{
                            fetch('/api/post/delete',{method: 'POST', body : a._id})
                            .then((res)=>
                                res.json()
                            )
                            .then(()=>{
                                e.target.parentElement.style.opacity = 0;
                                e.target.parentElement.style.height = 0;
                                setTimeout(() => {
                                    e.target.parentElement.style.display = 'none'
                                }, 800);
                            })
                        }}>🗑️</span>
                    </div>
                    )
                })
            }
        </div>
    )
}