import React from 'react'
import {incrAction,decrAction} from '../redux/product/product.action'
import {useDispatch,useSelector} from 'react-redux'
const Product = () => {
  let dispatch = useDispatch()
  let prod_Obj = useSelector((state)=>{
    return state
  })
  let incrHandler =()=>{
    dispatch(incrAction())
  }
  let decrHandler = ()=>{
    dispatch(decrAction())
  }
  return <div>
          <h2>Product Component</h2>
          <pre>{JSON.stringify(prod_Obj)}</pre>
          <button onClick={decrHandler} >DECR</button>
          {prod_Obj.qty}
          <button onClick={incrHandler}>INCR</button>
          </div>
}

export default Product