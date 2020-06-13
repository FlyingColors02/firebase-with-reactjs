import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
class AuthLoading extends Component{
    componentDidMount(){
        console.log(this.props);
        if(!this.props.user){
            this.props.history.push("/login");
        }
    }
    render(){
        return(
            <div className="container">
                <div className="'row">
                    <div className="col-md-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state);
    return {user:state.auth};
}

export default withRouter (connect(mapStateToProps)(AuthLoading));