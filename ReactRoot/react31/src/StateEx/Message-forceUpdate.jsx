import React, { Fragment } from 'react'
class Message extends React.Component{
    msg = "Hello!"
    gmHandler = ()=>{
        this.msg = "Good Morning Rahul Gandhi"
        console.log("good Morning! Today No Power")
        console.log(this.msg)
        this.forceUpdate()
    }
    render(){
        return <Fragment>
                <h5>Message Component</h5>
                <hr />
                <h3>Value::{this.msg}</h3>
                <button onClick={this.gmHandler}>GM</button>
                <button>GN</button>
        </Fragment>
    }
}

export default Message