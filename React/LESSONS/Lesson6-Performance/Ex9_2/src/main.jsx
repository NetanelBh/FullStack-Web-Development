import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { legacy_createStore as createStore } from "redux"
import { Provider } from "react-redux"

import carsReducer from './rootReducer.js'

const store = createStore(carsReducer)




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App />
  
  </Provider>


)
