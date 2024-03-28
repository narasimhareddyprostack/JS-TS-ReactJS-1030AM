//action types
let INCR='INCR'
let DECR='DECR'
//let a = 100

//actions
let incrAction =()=>{
    return { type:INCR}
}

let decrAction =()=>{
    return {type:DECR}
}
export {incrAction,decrAction,INCR,DECR}