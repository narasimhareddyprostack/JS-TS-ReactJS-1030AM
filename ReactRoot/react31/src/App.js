import React from 'react'
import Message from './Message/Message'

import {store} from './redux/store'
import {Provider} from 'react-redux'
const App = () => {
  return <div>
  <Provider store={store}>
      <h1>App Component</h1>
      <Message/>
  </Provider>
  
  </div>
}

export default App