import React, { useState } from 'react'

const Counter = () => {
    let [counter,setCounter ]=useState(1)
  return (
    <div>
        <h2>Counter Example</h2>
        <h3>Counter Value:{counter}</h3>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <button onClick={()=>{setCounter(counter-1)}}>-</button>
    </div>
  )
}

export default Counter