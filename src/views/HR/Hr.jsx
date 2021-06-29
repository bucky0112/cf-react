import React, { useState } from 'react'
import { Card, Row, Col } from 'antd'
import PieChart from '../../components/Chart/PieChart/PieChart'
import BarChart from './../../components/Chart/BarChart/BarChart'

export default function HR () {
  // 性別比例
  const [gender] = useState([
    { item: '女', count: 69, percent: 0.16 },
    { item: '男', count: 357, percent: 0.84 }
  ])

  // 學歷分佈
  const [education] = useState([
    { x: '國小', num: 2 },
    { x: '國中', num: 29 },
    { x: '高中', num: 91 },
    { x: '專科', num: 94 },
    { x: '大學', num: 130 },
    { x: '國內碩士', num: 44 },
    { x: '博士', num: 2 },
    { x: '其他', num: 34 }
  ])

  // 年資分佈
  const [lengthService] = useState([
    { x: '2年以下（含）', num: 65 },
    { x: '5年以下（含）', num: 66 },
    { x: '10年以下（含）', num: 69 },
    { x: '15年以下（含）', num: 46 },
    { x: '20年以下（含）', num: 68 },
    { x: '25年以下（含）', num: 62 },
    { x: '30年以下（含）', num: 43 },
    { x: '30年以上（含）', num: 7 }
  ])

  // 部門人數
  const [departmentNum] = useState([
    { x: '本廠', num: 138 },
    { x: '生管部', num: 19 },
    { x: '技術部', num: 9 },
    { x: '品保部', num: 22 },
    { x: '研發部', num: 44 },
    { x: '財務部', num: 9 },
    { x: '售後服務部', num: 36 },
    { x: '國內部', num: 20 },
    { x: '國外部', num: 12 },
    { x: '採購部', num: 12 },
    { x: '董事長室', num: 1 },
    { x: '資訊部', num: 7 },
    { x: '彰濱部', num: 53 },
    { x: '管理部', num: 9 },
    { x: '稽核部', num: 1 },
    { x: '營技部', num: 5 },
    { x: '營管部', num: 6 },
    { x: '總經理室', num: 23 }
  ])

  // 匯入元件
  const [chartCard] = useState([
    {
      id: 1,
      title: '性別比例',
      component: <PieChart chartData={gender} />
    },
    {
      id: 2,
      title: '學歷分布',
      component: <BarChart chartData={education} />
    },
    {
      id: 3,
      title: '年資分布',
      component: <BarChart chartData={lengthService} />
    },
    {
      id: 4,
      title: '部門人數',
      component: <BarChart chartData={departmentNum} />
    }
  ])

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {chartCard.map((item) => {
        return (
          <Col key={item.id} xs={16} sm={16} md={12} lg={12} xl={12} xxl={12}>
            <Card
              title={item.title}
              hoverable={true}
              style={{ marginBottom: 10, height: 510 }}
            >
              {item.component}
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}
