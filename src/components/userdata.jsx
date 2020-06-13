import React from "react";
import _ from "lodash";
import {connect} from "react-redux";
import {RemoveUser} from "../action/useraction";
import {Link} from "react-router-dom";
import Login from "./login";
const UserData = (props)=>{
    console.log(props);
    let {users,auth}= props;
    //  if(loading){return <h1>Loading</h1>}
    if(!auth){return <Login/>}
    if(!users){return <h5 style={{alignSelf:"center"}}>loading...</h5>}
   
    return(
        <React.Fragment>
             
            <div className="row" style={{marginTop:"20px"}}>
            {
                _.map(users,(data,key)=>(
                    <div className="card" style={{margin:"15px"}} >
                        <div className="card-body">
                                <div className="col-md-12" key={key}>
                                        <h5>UserName: <span style={{color:"grey"}}>{data.username}</span></h5>
                                        <h5>Comments: <span style={{fontFamily:"ui-serif",color:"grey"}}>{data.comments}</span></h5>
                                </div>
                                <div className="col-md-12" style={{marginTop:"20px"}}> 
                                        <button type="button" className="btn btn-group btn-outline-primary" style={{alignSelf:"center",margin:"15px"}}
                                        onClick={()=>props.RemoveUser(key)}>delete</button>
                                        <Link type="button" className="btn btn-group btn-outline-primary" style={{alignSelf:"center",margin:"15px"}}
                                        to={`/update/${key}`}>update</Link> 
                                </div>
                        </div>
                    </div>
                       
                    
                    
               ))
            }  
            </div>
        </React.Fragment>
    )
}
const mapStateToProps =state=>{
    console.log(state);
    return{ users:state.users.data,auth:state.auth};
}
export default connect(mapStateToProps,{RemoveUser})(UserData);