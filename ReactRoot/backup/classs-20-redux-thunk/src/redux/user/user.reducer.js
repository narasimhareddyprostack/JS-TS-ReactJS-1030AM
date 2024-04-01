import {REQ,SUCCESS,FAILURE} from './user.action'
let initialState={users:[]}
let userReducer = (state=initialState,action)=>{

    switch(action.type){
        case REQ:
            return {message:action.msg}
        case SUCCESS:
            return {users:action.payload}
        case FAILURE:
            return {message:action.msg}
        default:
            return state
    }   
}

export  {userReducer}