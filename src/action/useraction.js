import {CREATE_USER, USER_DATA} from "./usertype.action";
import database from "../firebase";
export const Users = ()=>{
    return dispatch =>{
        database.on("value",snapshot=>{
            dispatch({type:USER_DATA,payload:snapshot.val()})
        })
    }
}
export const CreateUser = (data)=>{
    return dispatch=>{
     database.push(data);
    }
}