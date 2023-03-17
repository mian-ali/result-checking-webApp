import React from 'react'
import Rounting from './routing/Rounting'
// SSimport Rounting from "./routing"
// import './App.css'




function app() {
    return (
        <div className="MainPage"> 
        <Rounting/>
    
        </div>
    )
}

export default app























// import React, { useEffect } from 'react'
// import Card from "./card"
// import {useState} from "react"
// import axios from 'axios';
// function App() {
//     const [inpsearch,abc]=useState([])

//     const handle=(e)=>{
//         abc(e.target.value)
//         console.log(inpsearch);
    
//     }
//     useEffect(()=>{
//             axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
//                 console.log(res.data);
//             abc(res.data.title)

//             })

//     },[])
    
    
    
//     return (
//         <div>
//             <input type="text" onChange={handle} value={inpsearch} />
//             <Card val= {inpsearch}/>
//             <Card/>
//             <Card/>
//             <Card/>
//         </div>
//     )
// }

// export default App
