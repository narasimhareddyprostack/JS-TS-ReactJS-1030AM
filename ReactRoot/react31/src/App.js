import React, { Fragment } from 'react'
import {Link,BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Products from './Products/Products'
import Admin from './Products/Admin'
import CreateProduct from './Products/CreateProduct'

const App = () => {
 return <Fragment>
  <Router>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/" className='navbar-brand'>Product Cart</Link>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
            <li><Link  className='nav-link' to="/products">Products</Link></li>
            <li><Link className='nav-link' to="/create">New Product</Link></li>
            <li><Link  className='nav-link' to="/admin">Admin</Link></li>
          </ul>
        </div>
        </nav>
        <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/create" element={<CreateProduct/>} />
        </Routes>
  </Router>
       </Fragment>
}

export default App