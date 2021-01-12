import { combineReducers } from "redux";
import UserReducer from "../Reducers/userReducer";
import LoadingReducer from "../Reducers/fetchDataReducer";
import ResponseReducer from "../Reducers/ResponseReducer";

export default combineReducers({
    UserReducer, 
    LoadingReducer,
    ResponseReducer
});