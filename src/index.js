import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import '@fontsource/roboto'
// import './index.css'
// import App from './App'
import SideBar from './components/SideBar'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <SideBar />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
