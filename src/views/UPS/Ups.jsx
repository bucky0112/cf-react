import React, { useState } from 'react'
import { Card, Row, Col } from 'antd'
import WorkInfo from '../../components/Table/WorkInfo'

export default function UPS () {
  // 機房資訊
  const [engineRoom] = useState([
    { title: 'UPS狀態', content: '變流器供電' },
    { title: '目前市電電壓 (伏特)', content: '214.4' },
    { title: '輸出電壓 (伏特)', content: '219.9' },
    { title: '輸出負載 (%)', content: '20' },
    { title: '電池剩餘容量 (%)', content: '90' },
    { title: 'UPS溫度 (攝氏)', content: '35.1' },
    { title: '輸入頻率 (赫茲)', content: '60.0' },
    { title: 'UPS下次關機時間 (時:分 日/月/年)', content: '' },
    { title: 'UPS下次開機時間 (時:分 日/月/年)', content: '' },
    { title: 'USHA系統日期 (日/月/年)', content: '29/06/2021' },
    { title: 'USHA系統時間 (時:分:秒)', content: '16:28:20' },
    { title: 'USHA運轉時間 (天 時:分:秒)', content: '310day 02:45:25' }
  ])

  // 研發資訊
  const [rd] = useState([
    { title: 'UPS狀態', content: '變流器供電' },
    { title: '目前市電電壓 (伏特)', content: '198.4' },
    { title: '輸出電壓 (伏特)', content: '219.6' },
    { title: '輸出負載 (%)', content: '14' },
    { title: '電池剩餘容量 (%)', content: '90' },
    { title: 'UPS溫度 (攝氏)', content: '47.1' },
    { title: '輸入頻率 (赫茲)', content: '59.0' },
    { title: 'UPS下次關機時間 (時:分 日/月/年)', content: '' },
    { title: 'UPS下次開機時間 (時:分 日/月/年)', content: '' },
    { title: 'USHA系統日期 (日/月/年)', content: '29/06/2021' },
    { title: 'USHA系統時間 (時:分:秒)', content: '17:18:56' },
    { title: 'USHA運轉時間 (天 時:分:秒)', content: '26days 01:04:15' }
  ])

  // 匯入元件
  const [chartCard] = useState([
    {
      id: 1,
      title: '機房',
      component: <WorkInfo data={engineRoom} />
    },
    {
      id: 2,
      title: '研發',
      component: <WorkInfo data={rd} />
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
              style={{ marginBottom: 10 }}
            >
              {item.component}
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}
