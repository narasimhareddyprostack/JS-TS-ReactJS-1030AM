import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'

import About from './components/About'
import Servcies from './components/Services'
import Contact from './components/Contact'


class App extends Component {
  render() {
    return <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/index" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Servcies} />
          <Route path="/contact" component={Contact} />
        </Switch>
        </Router>
    </div>
  }
}

export default App