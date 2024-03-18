import React, { Component } from 'react'

class Login extends Component {
    state={
        email:"",
        password:""
    }
   
   updateHandler=(event)=>{
    this.setState({email:event.target.value})
   }
    submitHandler =(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
  render() {
    return <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
            <label >Email Id::::</label>
            <input name="email" type="text" onChange={this.updateHandler}/>  <br /><br />
              <label >Password:</label>
            <input name="password" type="text" onChange={this.updateHandler}/>  <br /><br />
            <input type="submit" value="Login" />
        </form>
    </div>
  }
}

export default Login