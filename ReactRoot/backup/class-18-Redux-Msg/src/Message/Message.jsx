import React from 'react'
import {gmAction,gaAction,gnAction} from '../redux/msg/msg.action'
import {useDispatch,useSelector} from 'react-redux'
const Message = () => {

let dispatch = useDispatch()

let msg_state=useSelector((state)=>{
    return state
})
let gmHandler=()=>{
    dispatch(gmAction())
}

 return <>
 <h2>Message Component</h2>
 <pre>{JSON.stringify(msg_state)}</pre>

 value:{msg_state.msg}
 <br /><br />
 <button onClick={gmHandler}>GM</button>
 <button onClick={()=>{dispatch(gaAction())}}>GA</button>
 <button onClick={()=>{dispatch(gnAction())}}>GN</button>
 </>
}

export default Message