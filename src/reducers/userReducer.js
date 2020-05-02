import {USER_DATA} from "../action/usertype.action";


const userReducer = (state={},action)=>{
    switch (action.type){
        case USER_DATA:return action.payload;
        default:return state;
    }
}
export default userReducer;