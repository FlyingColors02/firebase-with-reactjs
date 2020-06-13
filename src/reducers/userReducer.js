import {USER_DATA, USER_LOADING} from "../action/usertype.action";


const userReducer = (state={},action)=>{
    switch (action.type){
        case USER_LOADING:return {loading:true}
        case USER_DATA:return {data:action.payload,loading:false};
        default:return state;
    }
}
export default userReducer;

