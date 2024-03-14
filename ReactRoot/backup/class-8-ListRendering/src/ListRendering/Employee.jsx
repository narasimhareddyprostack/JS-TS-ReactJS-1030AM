
import employees from "./data";
import React from 'react'
class Employee extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            employees:employees
        }
    }
    displayAlert = (name)=>{
        alert(`HI ${name}, GM`)
    }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-10">
                  <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map((emp)=>{
                            return <tr key={emp.id}  onClick={this.displayAlert.bind(this,emp.name)} >
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.gender}</td>
                                    </tr>

                        })
                    }
                </tbody>
            </table>
                </div>
            </div>
          

        </div>
    }
}


export default Employee