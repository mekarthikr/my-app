import { useEffect, useState } from "react"

export default function UseEffect()
{
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    useEffect(()=>{
        // document.title=`${count}`
        console.log("count")
    },[])
    return(
        <div>
            <button onClick={()=>setCount(count+1)}> click {count}</button>
            <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        </div>
    )
}