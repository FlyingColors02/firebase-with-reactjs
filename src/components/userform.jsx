import React, { Component } from "react";
import UserData from "./userdata";
import {connect} from "react-redux";
import {Users,CreateUser} from "../action/useraction"
class UserForm extends Component{
    constructor(props){
        console.log(props);
        super(props);
        this.state={
            username:"",
            comments:"",
            // allData:{}
        }
    }
componentDidMount=()=>{
    this.props.Users();
    if(!this.props.user)
    {return this.props.history.push("/login")}
   
    // database.on('value',snapshot=>{
    //     console.log(snapshot);
    //     this.setState({allData:snapshot.val()})
//     // })
}

handleInputData=(e)=>{
this.setState({[e.target.name]:e.target.value})
}

handleFormData=(e)=>{
    e.preventDefault();
    let data={
        username:this.state.username,
        comments:this.state.comments
    }
    if(!this.props.user){return alert("'please login!!")}
    this.props.CreateUser(data);
   // database.push(data); 
    this.setState({username:"",comments:""});
  
}
    render(){
         
    
        return(

            <div className="container" style={{marginTop:"20px"}}>
                <div className="row">
                    <div className="col-md-5">
                        <form onSubmit={this.handleFormData}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter username" 
                                name="username" value={this.state.username} onChange={this.handleInputData}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="enter comments"
                                 name="comments" value={this.state.comments} onChange={this.handleInputData}/>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <UserData />
            </div>
        )
    }
}
const mapStateToProps = state =>{
    console.log(state);
    return {user:state.auth};
}
export default connect(mapStateToProps,{Users,CreateUser})(UserForm);