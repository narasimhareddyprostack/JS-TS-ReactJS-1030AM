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
    updateHandler=(value)=>{
        this.setState({ msg:value})
    }
    render() {
        console.log("Second Render ")
    return (
      <div>
        <h2>Message Componet</h2>
        <hr />
        <h3>Value:{this.state.msg}</h3>
        <button onClick={this.updateHandler.bind(this,"Good Morning")}>GM</button>
        <button  onClick={this.updateHandler.bind(this,"GA")}>GA</button>
        <button  onClick={this.updateHandler.bind(this,"GE")}>GE</button>
        <button  onClick={this.updateHandler.bind(this,"GN")}>GN</button>
      </div>
    )
  }
}

export default Message