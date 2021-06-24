import React from 'react'
import Index from './views/Index'
import Demo from './views/Demo/Demo'
import { Route } from 'react-router-dom'
import './index.css'
// import HeadBar from './components/HeadBar'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function App () {
  return (
    <div>
      <Route path="/" exact component={Index} />
      <Route path="/demo" exact component={Demo} />
    </div>
  )
}
