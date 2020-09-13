import { createStore, combineReducers, applyMiddleware } from "redux";
import cateGoryReducer from "./reducer/cateGoryReducer"
import Thunk from "redux-thunk";

export default createStore(combineReducers({
    cateGoryReducer
}), applyMiddleware( Thunk ))