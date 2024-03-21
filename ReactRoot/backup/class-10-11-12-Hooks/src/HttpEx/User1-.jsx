import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
  state={
    users:[]
  }  
  getUserData=()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{
        console.log(resp.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  render() {
    return (
      <div>
        <h2>User Comonent</h2>
        <button onClick={this.getUserData}>click Buddy</button>
      </div>
    )
  }
}

export default User