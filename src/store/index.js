import {combineReducers} from "redux";
import userReducer from "../reducers/userReducer"
import  AuthReducer  from "../reducers/authreducer";

const storeIndex =combineReducers({users:userReducer,auth:AuthReducer });
 export default storeIndex;