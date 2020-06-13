import {USER_DATA,USER_LOADING} from "./usertype.action";
import database from "../firebase";

export const Users = ()=>{
    return dispatch =>{
        // dispatch({type:USER_LOADING})
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

export const RemoveUser = (data)=>{
    return dispatch=>{
        database.child(data).remove();
    }
}

export const UpdateUser = (id,data)=>{
    return dispatch=>{
        database.child(id).update(data);
    }
}

