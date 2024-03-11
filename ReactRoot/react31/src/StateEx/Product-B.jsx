import React, { Fragment } from 'react'
class Product extends React.Component{
    state = {
        qty:1
    }
    incrHandler = ()=>{
        this.setState({qty:this.state.qty +1})
    }
    decrHandler = ()=>{
        this.setState({qty : this.state.qty - 1})
    }

    render(){
        return <Fragment>
            
            <h2>Product Emample</h2>
            <button onClick={this.decrHandler}>-</button> {this.state.qty} <button onClick={this.incrHandler}>+</button>
        </Fragment>
    }
}
export default Product