import React, { Component } from "react";
import UserForm from "./components/userform";
import Navbar from "./components/navbar";
import {Route, Switch} from "react-router-dom";
import Login from "./components/login";
import {connect} from "react-redux";
import {FetchUserLoggedInData} from "./action/auth";
import UpdateData from "./components/update";
import AuthLoading from "./components/authloading";

class App extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props);
        this.props.FetchUserLoggedInData();
    };

    render(){
        return(
           <React.Fragment>
               <Navbar user={this.props.auth}/>
              
                 <Route path="/login" exact  component={Login}/>
               <AuthLoading>
               <Route path="/" exact  component={UserForm}/>    
               <Route path="/home" exact  component={UserForm}/>    
               <Route path="/update/:id"  component={UpdateData}/>
               </AuthLoading>
               
                
           </React.Fragment>
           
            )
    }
        
}
const mapStateToProps=state=>{
    console.log(state);
    return {auth:state.auth};
}
export default connect(mapStateToProps,{FetchUserLoggedInData})(App);