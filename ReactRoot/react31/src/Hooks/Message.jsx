import React,{useState} from 'react'
let Message = ()=>{
    
    let [state,setState]=useState("Hello")
    return <div>
        <h1>Message Component</h1>
        <h2>Value:{state}</h2>
                    <button onClick={()=>{setState("Good Morning")}}>GM</button>
                    <button onClick={()=>{setState("Good Night")}}>GN</button>
             </div>
}

export default Message