import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import './services/firebase'
import './main.css'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
