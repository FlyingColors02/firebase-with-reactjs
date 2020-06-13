import {AUTH_DATA, AUTH_LOADING} from "../action/usertype.action";

 const AuthReducer = (state={},action)=>{
    switch(action.type){
        case AUTH_DATA:
            return action.payload
        default:
            return state;
    }
};
export default AuthReducer;