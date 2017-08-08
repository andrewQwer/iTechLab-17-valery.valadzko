import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
/*import Register from './components/containers/Register'*/
/*import Login from './components/containers/Login'*/
/*import UserCabinet from './components/containers/UserCabinet'*/
import App from './components/App'

import './styles/app.css'

const store = configureStore();

render(
  <Provider store={store}>{App}</Provider>,
  document.getElementById('root')
)
