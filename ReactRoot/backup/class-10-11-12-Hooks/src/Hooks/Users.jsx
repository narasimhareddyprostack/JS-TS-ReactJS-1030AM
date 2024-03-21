import React,{useEffect, useState} from 'react'
import Axios from 'axios'
let Users=()=>{
    let [users, setUsers]=useState([])
    let [flag,setFlag] = useState(false);
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setUsers(resp.data)
        })
        .catch((err)=>{setFlag(true)})
    })
    let displayUser = (name)=>{
        //console.log(name)
        alert(`Hello,${name}, GA`)
    }
   return <div>
        <h1>User Component</h1>
        <pre>{JSON.stringify(users)}</pre>
        {
            users.length > 0 ? <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return <tr key={user.id} onClick={displayUser.bind(null,user.name)}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </>  : <h3>No Data</h3>
        }
       
    </div>
}

export default Users