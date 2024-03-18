import {Link,BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import User from './HttpEx/User'
import Emp from './HttpEx/Emp'
import Puppy from './HttpEx/Puppy'
function App(){
  return <div>
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="navbar-brand">Logo</Link>
        <div  className="ml-auto">
            <ul className="navbar-nav">
                <li> <Link to="/dog" className="nav-link">Puppy</Link></li>
                <li> <Link to="/emp" className="nav-link">Employees</Link></li>
                <li> <Link to="/users" className="nav-link">Users</Link></li>
                <li> <Link to="/index" className="nav-link">Home</Link></li>
                <li> <Link to="/about" className="nav-link">About</Link></li>
                <li> <Link to="/services" className="nav-link">Service</Link></li>
                <li> <Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
        </div>
      </nav>
      <Routes>
      <Route path="/dog"  element={<Puppy/>}/>
      <Route path="/index"  element={<Home/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/services"  element={<Services/>}/>
      <Route path="/users"  element={<User/>}/>
      <Route path="/emp"  element={<Emp/>}/>

      </Routes>
    </BrowserRouter>
    
  </div>
}

export default App