//import action types
import {INCR,DECR} from './product.action'
let initialState={
    product_Name:'Apple iPhone 15',
    price:66499,
    image:'https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=90',
    qty:1
}
let productReducer= (state=initialState,action)=>{
    switch(action.type){
        case INCR:
            return {...state, qty:state.qty + 1}
        case DECR:
            return {...state, qty:state.qty - 1}
        default:
            return state
    }
}
export {productReducer}