import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {user_Action} from '../redux/user/user.action'
const User = () => {
  let dispatch = useDispatch()
  let users_Data=useSelector((state)=>{
    return state
  })
  useEffect(()=>{
    dispatch(user_Action())
  },[])
  
  return <div>
    <h3>User component</h3>
    <pre>{JSON.stringify(users_Data)}</pre>
  </div>
}

export default User