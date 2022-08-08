import todoReducer from "./reducers/todoReducer"
import { combineReducers } from "redux";

const combinereducer = combineReducers({
    "todo" : todoReducer
})

export default combinereducer


