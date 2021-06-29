import React from 'react'
import Index from './views/Index'
import Ups from './views/UPS/Ups'
import Hr from './views/HR/Hr'
import ExChange from './views/ExChange/ExChange'
import BuildUp from './views/BuildUp/BuildUp'
import { Route } from 'react-router-dom'
import './index.css'
import { Layout, Breadcrumb } from 'antd'
import styled from '@emotion/styled'

const { Content, Footer } = Layout

const MainContent = styled.div`
  min-height: 280px;
  padding: 18px;
  background: rgba(43, 142, 218, 0.53)
`
export default function App () {
  return (
    <>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '10px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <MainContent>
          <Route path='/' exact component={Index} />
          <Route path='/ups' component={Ups} />
          <Route path='/hr' component={Hr} />
          <Route path='/exchange' component={ExChange} />
          <Route path='/build-up/board' component={BuildUp} />
        </MainContent>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        金豐機器工業股份有限公司 ©2021 Created by 資訊課
      </Footer>
    </>
  )
}
