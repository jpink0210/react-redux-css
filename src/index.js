import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'

import * as reducers from './reducers'
import App from './components/App'
import { fetchItems, fetchPlayers, fetchNewItems } from './middlewares'


const reducer = combineReducers({
   ...reducers
})
// @store
//
const store = createStore(reducer, applyMiddleware(fetchItems, fetchPlayers, fetchNewItems))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
