import React, { Fragment } from 'react'
class Product extends React.Component{
    state = { 
            product_Name:'Apple iPhone 15',
            price:66499,
            image:'https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=90',
            qty:1
 
    }
      incrHandler = ()=>{
        this.setState({
            qty:this.state.qty +1
        })
      }
      decrHandler = ()=>{
         this.setState({
            qty:this.state.qty - 1
        })
      }

    render(){
        return <Fragment>
           <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <table className='table'>
                        <thead>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product_Name}</td>
                                <td><img src={this.state.image} height={"100px"} alt="" /></td>
                                <td>{this.state.price}</td>
                                <td><i className='fa fa-minus-circle' onClick={this.decrHandler}></i>{this.state.qty} <i className='fa fa-plus-circle' onClick={this.incrHandler}></i></td>
                                <td>{this.state.price *  this.state.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
           </div>
        </Fragment>
    }
}
export default Product