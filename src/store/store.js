import combinereducer from "./combineReducer";
import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";

const _createStore = createStore(combinereducer,{},applyMiddleware(thunk))
export default _createStore
