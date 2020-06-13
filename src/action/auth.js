import { auth, GoogleProvider } from "../firebase";
import {AUTH_DATA, AUTH_LOADING} from "./usertype.action" 
import {createBrowserHistory} from "history";
const history = createBrowserHistory(); 

//fetch LoggedIn user data
export const FetchUserLoggedInData = ()=>
{
    return dispatch=>{
        dispatch({type:AUTH_LOADING})
        auth.onAuthStateChanged(data=>{
            console.log(data);
            dispatch({type:AUTH_DATA, payload:data})
        });
    }
}

export const AuthLogout = ()=>{
    return dispatch =>{
        auth.signOut().then(()=>{
            history.push("/login");
        }
          
        );
    }
}

//Authentication using google
export const GoogleLogin = ()=>{
    return dispatch =>{
    auth.signInWithPopup(GoogleProvider).then(()=>{
        history.push("/home");
        window.location.reload();
    });

    }
}
