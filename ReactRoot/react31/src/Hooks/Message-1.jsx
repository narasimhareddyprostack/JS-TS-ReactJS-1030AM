import React,{useState} from 'react'
let Message = ()=>{
    //let msg="Hello"
    let [msg,rajni]=useState("Hello")
    
    let gmHandler=()=>{ 
        rajni("Good Morning")
    }
    let gnHanlder=()=>{
        rajni("Good Night")
    }
    return <div>
        <h1>Message Component</h1>
        <h2>Value:{msg}</h2>
                    <button onClick={gmHandler}>GM</button>
                    <button onClick={gnHanlder}>GN</button>
             </div>
}

export default Message