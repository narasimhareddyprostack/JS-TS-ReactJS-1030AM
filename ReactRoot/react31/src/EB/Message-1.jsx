import React, { Component } from 'react'

class Message extends Component {
    state;
    constructor(props){
        super(props)
        console.log("First Const")
        this.state={
            msg:"Hello"
        }
    }
    gmHandler = ()=>{
        this.setState({
            msg:"Good Morning"
        })
    }
    gaHandler = ()=>{
         this.setState({
            msg:"Good Afternoon"
        })
    }
    geHandler = ()=>{
         this.setState({
            msg:"Good Evening"
        })
    }
    gnHandler = ()=>{
         this.setState({
            msg:"Good Night"
        })
    }
    render() {
        console.log("Second Render ")
    return (
      <div>
        <h2>Message Componet</h2>
        <hr />
        <h3>Value:{this.state.msg}</h3>
        <button onClick={this.gmHandler}>GM</button>
        <button  onClick={this.gaHandler}>GA</button>
        <button  onClick={this.geHandler}>GE</button>
        <button  onClick={this.gnHandler}>GN</button>
      </div>
    )
  }
}

export default Message