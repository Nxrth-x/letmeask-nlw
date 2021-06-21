import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from '../pages'
import CreateRoom from '../pages/create-room'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/create-room" component={CreateRoom} />
      </Switch>
    </BrowserRouter>
  )
}
