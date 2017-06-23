import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Main from './containers/Main'
import configureStore from './store/configureStore'
import './styles/app.css'

import todoSubscriber from './subscribers/todoSubscriber'
import logerSubscriber from './subscribers/logerSubscriber'

const store = configureStore()
//subscribers
store.subscribe(() => {
  todoSubscriber(store.getState().todo)
})
store.subscribe(() => {
  logerSubscriber(store.getState().loger.logers)
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}


export default App;