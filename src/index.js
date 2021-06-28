import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import 'antd/dist/antd.css'
import { Layout } from 'antd'

const { Header } = Layout

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Switch>
          <App />
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
