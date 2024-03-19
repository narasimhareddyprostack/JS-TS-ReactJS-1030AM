import React, { Component } from 'react'
import Login from './FormHandling/Login'
import Message from './Hooks/Message'
import Counter from './Hooks/Counter'
class App extends Component {
  render() {
    return (
      <div>
        <h1>App component</h1>
        <hr />
        <Counter/>
      </div>
    )
  }
}

export default App