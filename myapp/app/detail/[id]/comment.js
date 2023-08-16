'use client'

import { useEffect, useState } from "react"

export default function Comment(props){
    let [comment, setComment] = useState()
    let [data, setData] = useState([])

    useEffect(()=>{
        fetch(`/api/comment/list?id=${props._id}`).then(res => res.json())
        .then((result) =>{
            setData(result)
            console.log(result)
        })
    },[])

    return(
    <div>
        <hr></hr>
        {
            data.length > 0 ?
            data.map((a,i)=>
                <div>
                    <p key={i}>{a.content} - {a.author}</p>
                </div>
            )
            :'LOADING'
        }
        <div>댓글 목록</div>
        <input onChange={(e)=>{ setComment(e.target.value) }}/>
        <button onClick={()=>{
            fetch('/api/comment/new',{method:'POST', body: JSON.stringify({
                comment : comment,
                _id : props._id
            })
        } )
        }}>전송</button>
    </div>
    )
}