import React from "react";
import _ from "lodash";
import {connect} from "react-redux";

const UserData = ({users})=>{
    if(!users){return null}
    console.log(users);
    return(
        <React.Fragment>
             
            <div className="row">
            {
                _.map(users,(data,key)=>(
                    <div className="col-md-12" key={key}>
                    <ul>
                <li>{data.username}</li>
                <li>{data.comments}</li>
                    </ul>
                </div>
               ))
            }
            
                
            </div>
        </React.Fragment>
    )
}
const mapStateToProps =state=>{
    
    console.log(state);
    return{users:state.users};
}
export default connect(mapStateToProps)(UserData);