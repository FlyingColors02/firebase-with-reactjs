import {combineReducers} from "redux";
import userReducer from "../reducers/userReducer"
const storeIndex =combineReducers({users:userReducer });
 export default storeIndex;