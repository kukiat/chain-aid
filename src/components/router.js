import { Switch, Route } from 'react-router-dom'
import Manage from './dashboard/Manage'
import Home from './dashboard/Home'
import React from 'react'

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/manage" component={Manage} />
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  )
}