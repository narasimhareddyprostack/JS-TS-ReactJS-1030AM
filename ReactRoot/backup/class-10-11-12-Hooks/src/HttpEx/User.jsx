import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
  constructor(props){
    super(props)
    this.state={
      users:[]
    }
  }
 
  componentDidMount(){
     Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{
        console.log(resp.data)
        this.setState({ users:resp.data })
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  render() {
    return (
      <div className='container'>

        <h2>User Comonent</h2>
        <pre>{JSON.stringify(this.state.users)}</pre>
        <div className="row">
          <div className="col-md-8">
 {
          this.state.users.length > 0? <> 
           <table className='table'>
            <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map((user)=>{
                return <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              })
            }
          </tbody>
        </table>
          
          </> : <h2> No Data</h2>
         }

          </div>
        </div>
        
       
       
      </div>
    )
  }
}

export default User