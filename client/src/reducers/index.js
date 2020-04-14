import  { combineReducers } from "redux";
import cartReducers from "./cartReducers";

export default combineReducers({
    cartState: cartReducers
});