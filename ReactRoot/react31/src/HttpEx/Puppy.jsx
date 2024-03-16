import React, { Component } from 'react'
import Axios from 'axios'
export class Puppy extends Component {
  constructor(props){
    super(props)
    this.state={
            puppy_Data:{}
    }
  }
  componentDidMount(){
    Axios.get('https://dog.ceo/api/breeds/image/random')
    .then((resp)=>{
      this.setState({puppy_Data:resp.data})
    })
    .catch(()=>{})
  }
  render() {
    return (
      <div className='container'>
        <h1>Puppy Comp</h1>
          <pre>{JSON.stringify(this.state.puppy_Data)}</pre>
        <div className="row">
       
        <div className="col-md-3">
          <img height={'200px'} src={this.state.puppy_Data.message} alt="" />
        </div>
       </div>
        
      </div>
    )
  }
}

export default Puppy