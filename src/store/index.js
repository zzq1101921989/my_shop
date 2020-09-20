import { createStore, combineReducers, applyMiddleware } from "redux";
import cateGoryReducer from "./reducer/cateGoryReducer";
import cartReducer from "./reducer/cartReducer";
import homeReducer from "./reducer/homeReducer";
import Thunk from "redux-thunk";

export default createStore(combineReducers({
    homeReducer,
    cateGoryReducer,
    cartReducer
}), applyMiddleware( Thunk ))