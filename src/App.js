import React from 'react'
import Index from './views/Index'
import Ups from './views/UPS/Ups'
import Hr from './views/HR/Hr'
import ExChange from './views/ExChange/ExChange'
import BuildUp from './views/BuildUp/BuildUp'
import { Route } from 'react-router-dom'
import './index.css'

export default function App () {
  return (
    <div>
      <Route path='/' exact component={Index} />
      <Route path='/ups' component={Ups} />
      <Route path='/hr' component={Hr} />
      <Route path='/exchange' component={ExChange} />
      <Route path='/build-up/board' component={BuildUp} />
    </div>
  )
}
