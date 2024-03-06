import React, { Component } from 'react'
import Employee from './Employee'
class User extends Component {
    user={
        uid:101,
        uname:"Rahul Gandhi",
        uemail:"rg@gmail.com"
    }
    pLoc=["Wayanad","New Delhi", "Bangalore"]
render(){

    return <div>
        <h2>User Component</h2>
        <hr />
        {/* <Employee  user={this.user} loc={this.pLoc}  /> */}
        <Employee user={this.user} loc={this.pLoc} />
    </div>
}

}

export default User