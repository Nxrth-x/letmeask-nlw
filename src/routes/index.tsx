import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Context
import AuthContextProvider from '../context/AuthContext'

// Pages
import NewRoom from '../pages/NewRoom'
import Home from '../pages/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}
