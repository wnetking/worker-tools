import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import {PRODUCTION} from '../appSettings'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(thunk))

  if (module.hot && !PRODUCTION) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}