import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import styled from '@emotion/styled'
import Index from './views/Index'
import Ups from './views/UPS/Ups'
import Hr from './views/HR/Hr'
import ExChange from './views/ExChange/ExChange'
import BuildUp from './views/BuildUp/BuildUp'
import LogisticStatus from './views/Logistic/LogisticStatus'
import LogisticDetails from './views/Logistic/LogisticDetails'
import LogisticShort from './views/Logistic/LogisticShort'
import LocalOperation from './views/Operation/Local'
import ChangBinOperation from './views/Operation/ChangBin'
import OperationDetail from './views/Operation/OperationDetail'
import CompressorAPI624927 from './views/Compressor/CompressorAPI624927'
import CompressorAPI670934 from './views/Compressor/CompressorAPI670934'
import CompressorAPI670935 from './views/Compressor/CompressorAPI670935'
import Petrol from './views/Price/Petrol'
import Steel from './views/Price/Steel'
import Copper from './views/Price/Copper'
import Shipping from './views/Price/Shipping'

const { Content, Footer } = Layout

const MainContent = styled.div`
  min-height: 280px;
  padding: 18px;
  background: rgba(43, 142, 218, 0.53)
`
export default function App () {
  return (
    <>
      <Content style={{ padding: '30' }}>
        {/* <Breadcrumb style={{ margin: '10px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb> */}
        <MainContent>
          <Route path='/' exact component={Index} />
          <Route path='/ups' component={Ups} />
          <Route path='/hr' component={Hr} />
          <Route path='/exchange' component={ExChange} />
          <Route path='/build-up/board' component={BuildUp} />
          <Route path='/logistic/status' component={LogisticStatus} />
          <Route path='/logistic/details' component={LogisticDetails} />
          <Route path='/logistic/short' component={LogisticShort} />
          <Route path='/operation/local' component={LocalOperation} />
          <Route path='/operation/chang-bin' component={ChangBinOperation} />
          <Route path='/operation/detail' component={OperationDetail} />
          <Route path='/compressor/API624927' component={CompressorAPI624927} />
          <Route path='/compressor/API670934' component={CompressorAPI670934} />
          <Route path='/compressor/API670935' component={CompressorAPI670935} />
          <Route path='/price/Petrol' component={Petrol} />
          <Route path='/price/Steel' component={Steel} />
          <Route path='/price/Copper' component={Copper} />
          <Route path='/price/Shipping' component={Shipping} />
        </MainContent>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        金豐機器工業股份有限公司 ©2021 Created by 資訊課
      </Footer>
    </>
  )
}
