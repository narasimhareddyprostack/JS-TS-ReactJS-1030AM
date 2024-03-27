//import action types
import {INCR,DECR} from './product.action'
let productReducer= (state={qty:1},action)=>{
    switch(action.type){
        case INCR:
            return { qty:state.qty + 1}
        case DECR:
            return { qty:state.qty - 1}
        default:
            return state
    }
}
export {productReducer}