import React,{Component, Fragment} from 'react'

class Employee extends Component{
    //props={}
    render(){
        return <Fragment>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>EMployee Id:{this.props.user.uid}</h3>
            <h3>Employee Name:{this.props.user.uname}</h3>
            <h3>Employee Name:{this.props.user.uemail}</h3>
            <h4>Employee Loc:{this.props.loc[0]}</h4>
        </Fragment>
    }
}
export default Employee