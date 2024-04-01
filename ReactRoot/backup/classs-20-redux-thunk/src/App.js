import React from 'react'
import User from './User/User'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {Link,BrowserRouter as Router, Routes,Route} from 'react-router-dom'
const App = () => {
  return <div>
    <Provider store={store}>    
    <Router>
        <nav>
          <Link to="/">User Component</Link>
          <div>
            <ul>
                <li><Link to="/user">User</Link></li> 
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/user" element={<User/>}/>
        </Routes>
    </Router>
     
    </Provider>

  
  </div>
}

export default App