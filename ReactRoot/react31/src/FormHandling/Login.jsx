import React, { Component } from 'react'

class Login extends Component {
    state={
        email:"",
        password:"",
        mobile:""
    }
   
  updateHandler=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }
  submitHandler=(event)=>{
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
            <label >Email Id::::</label>
            <input name="email" type="text" onChange={this.updateHandler} />  <br /><br />
              <label >Password:</label>
            <input name="password" type="text" onChange={this.updateHandler}  />  <br /><br />
            <label >Mobile</label>
            <input type="number" name="mobile"  onChange={this.updateHandler}/> <br />
            <input type="submit" value="Login" />
        </form>
    </div>
  }
}

export default Login