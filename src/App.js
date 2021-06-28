import React from 'react'
import Index from './views/Index'
import Ups from './views/UPS/Ups'
import Hr from './views/HR/Hr'
import ExChange from './views/ExChange/ExChange'
import BuildUp from './views/BuildUp/BuildUp'
import { Route } from 'react-router-dom'
import './index.css'
import { Layout, Breadcrumb } from 'antd'

const { Content, Footer } = Layout

const contentStyle = {
  minHeight: '280px',
  padding: 24,
  background: '#fff'
}

export default function App () {
  return (
    <>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <div className='site-layout-content' style={contentStyle}>
          <Route path='/' exact component={Index} />
          <Route path='/ups' component={Ups} />
          <Route path='/hr' component={Hr} />
          <Route path='/exchange' component={ExChange} />
          <Route path='/build-up/board' component={BuildUp} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        金豐機器工業股份有限公司 ©2021 Created by 資訊課
      </Footer>
    </>
  )
}
