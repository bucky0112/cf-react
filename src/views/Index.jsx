import React from 'react'
import PieChart from './../components/Chart/PieChart/PieChart'
import { Card, Row, Col } from 'antd'

function Index () {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={8}>
        <Card title='2021 年 6 月 - 稼動率'>
          <PieChart />
        </Card>
      </Col>
    </Row>
  )
}

export default Index
