import React, { useState } from 'react'
import { Card, Row, Col } from 'antd'
import PieChart from './../components/Chart/PieChart/PieChart'
import AxisChart from '../components/Chart/AxisChart/AxisChart'
import BarChart from '../components/Chart/BarChart/BarChart'
import LiveWork from './../components/Live/Live'

function Index () {
  // 單月稼動率
  const [monthActivation] = useState([
    { item: '稼動', count: 44, percent: 0.44 },
    { item: '非稼動', count: 56, percent: 0.56 }
  ])

  // 每日稼動率
  const [dayActivation] = useState([
    { day: '1', activation: 76 },
    { day: '2', activation: 67 },
    { day: '3', activation: 61 },
    { day: '4', activation: 39 },
    { day: '5', activation: 50 },
    { day: '6', activation: 49 },
    { day: '7', activation: 1 },
    { day: '8', activation: 79 }
  ])

  // 電流值
  const [electric] = useState([
    {
      month: 'Jan long long long long',
      city: 'Tokyo',
      temperature: 7
    },
    {
      month: 'Jan long long long long',
      city: 'London',
      temperature: 3.9
    },
    {
      month: 'Feb long long long long',
      city: 'Tokyo',
      temperature: 13
    },
    {
      month: 'Feb long long long long',
      city: 'London',
      temperature: 4.2
    },
    {
      month: 'Mar long long long long',
      city: 'Tokyo',
      temperature: 16.5
    },
    {
      month: 'Mar long long long long',
      city: 'London',
      temperature: 5.7
    },
    {
      month: 'Apr long long long long',
      city: 'Tokyo',
      temperature: 14.5
    },
    {
      month: 'Apr long long long long',
      city: 'London',
      temperature: 8.5
    },
    {
      month: 'May long long long long',
      city: 'Tokyo',
      temperature: 10
    },
    {
      month: 'May long long long long',
      city: 'London',
      temperature: 11.9
    },
    {
      month: 'Jun long long long long',
      city: 'Tokyo',
      temperature: 7.5
    },
    {
      month: 'Jun long long long long',
      city: 'London',
      temperature: 15.2
    },
    {
      month: 'Jul',
      city: 'Tokyo',
      temperature: 9.2
    },
    {
      month: 'Jul long long long long',
      city: 'London',
      temperature: 17
    },
    {
      month: 'Aug long long long long',
      city: 'Tokyo',
      temperature: 14.5
    },
    {
      month: 'Aug',
      city: 'London',
      temperature: 16.6
    },
    {
      month: 'Sep',
      city: 'Tokyo',
      temperature: 9.3
    },
    {
      month: 'Sep',
      city: 'London',
      temperature: 14.2
    },
    {
      month: 'Oct',
      city: 'Tokyo',
      temperature: 8.3
    },
    {
      month: 'Oct long long long long',
      city: 'London',
      temperature: 10.3
    },
    {
      month: 'Nov long long long long',
      city: 'Tokyo',
      temperature: 8.9
    },
    {
      month: 'Nov long long long long',
      city: 'London',
      temperature: 5.6
    },
    {
      month: 'Dec long long long long',
      city: 'Tokyo',
      temperature: 5.6
    },
    {
      month: 'Dec long long long long',
      city: 'London',
      temperature: 9.8
    }
  ])

  const [chartCard] = useState([
    {
      id: 1,
      title: '2021 年 6 月 - 稼動率',
      component: <PieChart chartData={monthActivation} />
    },
    {
      id: 2,
      title: '過去 1 小時稼動電流值',
      component: <AxisChart chartData={electric} />
    },
    {
      id: 3,
      title: '2021 年 6 月 - 每日稼動率',
      component: <BarChart chartData={dayActivation} />
    }
  ])

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col xs={32} sm={24} md={12} lg={12} xl={8} xxl={8}>
        <LiveWork />
      </Col>
      {chartCard.map((item) => {
        return (
          <Col key={item.id} xs={32} sm={24} md={12} lg={12} xl={8} xxl={8}>
            <Card title={item.title} hoverable={true}>
              {item.component}
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default Index
