import React from "react";
import "./login.css";
import {GoogleLogin} from  "../action/auth";
import { connect } from "react-redux";
const Login = (props)=>{
    console.log(props)
    return(
        <>
        <div className="container-fluid margin">
	<button type="button" className="themeBtn3" onClick={()=>props.GoogleLogin()}>GOOGLE</button>
</div>
        </>
    )
}

export default connect(null,{GoogleLogin})(Login);