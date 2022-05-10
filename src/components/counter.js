// import React,{useState} from "react";

// export default function Counter()
// {
//     const initialState=0
//     const [count,changeCount]=useState(initialState)
//     const [current,incCount]=useState(0)
//     const [name,setName]=useState({firstname:'',lastname:''})
//     console.log(count)
//     return(
//         <div>
//             <button onClick={()=>incCount(current +1)} > Clicked {current} Times</button>
//             <div>
//                 <button onClick={()=>changeCount(count +1)} > Clicked {count} Times</button>
//                 <button onClick={()=>changeCount(initialState)}>initial</button>
//                 <button onClick={()=>changeCount(prevState=> {console.log(prevState)
//                 return prevState-1})}>remove</button>
//             </div>
//             <div>
//                     <form>
//                         <input type="text" value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}/>
//                         <input type="text" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}/>
//                         <h2>{JSON.stringify(name)}</h2>
//                     </form>
//             </div>
//         </div>
        
//     )
// }