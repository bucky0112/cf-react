import React from 'react'
import Index from './views/Index'
import Ups from './views/UPS/Ups'
import Hr from './views/HR/Hr'
import ExChange from './views/ExChange/ExChange'
import { Route } from 'react-router-dom'
import './index.css'
// import HeadBar from './components/HeadBar'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function App () {
  return (
    <div>
      <Route path='/' exact component={Index} />
      <Route path='/ups' exact component={Ups} />
      <Route path='/hr' exact component={Hr} />
      <Route path='/exchange' exact component={ExChange} />
    </div>
  )
}
