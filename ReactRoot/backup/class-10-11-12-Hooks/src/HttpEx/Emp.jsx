import React, { Component } from 'react'
import Axios from 'axios'
export class Emp extends Component {
    constructor(props){
        super(props)
        this.state={
            empData:{}
        }
    }
  componentDidMount(){
    Axios.get('https://dummyjson.com/users')
    .then((resp)=>{
            this.setState({empData:resp.data})
    })
    .catch()
  }
  render() {
    return (
      <div className='container'>
        <div className="row">
             <pre>{JSON.stringify(this.state.empData)}</pre>
            <div className="col-md-8">
            {
                 Object.keys(this.state.empData).length > 0 ? <React.Fragment>
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

                                this.state.empData.users.map((emp)=>{
                                    return  <tr>
                                        <td>{emp.id}</td>
                                        <td>{emp.firstName}</td>
                                        <td>{emp.email}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </React.Fragment>: <h2> No Data</h2>
            }
            </div>
        </div>
       
      </div>
    )
  }
}

export default Emp