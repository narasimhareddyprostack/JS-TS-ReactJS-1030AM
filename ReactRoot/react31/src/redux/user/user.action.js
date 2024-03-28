import Axios from 'axios'
//action types
const REQ='REQ'
const SUCCESS='SUCCESS'
const FAILURE='FAILURE'

let user_Req= ()=>{
    return { type:REQ, msg:"loading"}
}
let user_Success=(users)=>{
    return { type:SUCCESS, payload:users}
}
let user_Failure=()=>{
    return { type:FAILURE, msg:"Error"}
}
let user_Action  = ()=>{

    return async(dispatch)=>{
        dispatch(user_Req())
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{dispatch(user_Success(resp.data))})
        .catch((err)=>{dispatch(user_Failure())})

        //
    }
}
export {user_Action, REQ,SUCCESS,FAILURE}