import { createStore } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension'
import {msgReducer} from './msg/msg.reducer'

let store=createStore(msgReducer,composeWithDevTools())

export {store}