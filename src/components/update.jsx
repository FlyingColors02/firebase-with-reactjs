import React, { Component } from "react";
import { connect } from "react-redux";
import {UpdateUser} from "../action/useraction";
class  UpdateData extends Component{
    constructor(props){
        super(props);
        this.state={
             comments:this.props.user.comments,
             username:this.props.user.username,
           // allData:{}
        }
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
    this.props.UpdateUser(this.props.match.params.id,data);
    this.props.history.push("/home");
}
    render(){
        console.log(this.props)
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
                
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    
    console.log(ownProps);
    console.log(state);
    return {user:state.users.data[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{UpdateUser})(UpdateData);