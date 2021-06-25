import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <App />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
