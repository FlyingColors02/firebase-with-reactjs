import React from "react";
import {Link} from "react-router-dom";
import {AuthLogout} from "../action/auth";
import {connect} from "react-redux";
const Navbar = (props)=>{
    console.log(props);
    
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a className="navbar-brand" href="#">LOGO</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        {props.user? 
                            <><img src={props.user.photoURL} style={{height:"50px", borderRadius:"100px"}}/>{props.user.displayName}</>
                            :null}
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 form-inline">
                {
                    !props.user?
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    :<li className="nav-item">
                    <Link className="nav-link" to="/logout"
                    onClick={()=>{props.AuthLogout()}}>Logout</Link>
                </li>
                }
        </ul>
        </nav>
    )
}
export default connect(null,{AuthLogout})(Navbar);