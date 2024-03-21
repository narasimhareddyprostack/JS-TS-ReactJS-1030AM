import React, { Fragment } from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './ContactApp/Home'
import ContactApp from './ContactApp/ContactApp'
const App = () => {
  return <Fragment>
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<ContactApp/>}/>
    </Routes>
    </Router>
  </Fragment>
}

export default App