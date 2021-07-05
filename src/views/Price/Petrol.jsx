import React, { useState } from 'react'
import { Card, Row, Col } from 'antd'

const Petrol = () => {
  const [petrolData] = useState([
    {
      title: '無鉛汽油92 --- 價格走勢圖',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0131320.djhtm'
    },
    {
      title: '無鉛汽油95 --- 價格走勢圖',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0131330.djhtm'
    },
    {
      title: '無鉛汽油98 --- 價格走勢圖',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0131340.djhtm'
    }
  ])

  return (
    <>
      <Row>
        {petrolData.map((item) => {
          return (
            <Col lg={12} md={24} sm={24} xs={24} key={item.title}>
              <Card style={{ margin: 10 }}>
                <div
                  style={{
                    height: '45vh',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <iframe
                    src={item.link}
                    height='100%'
                    width='100%'
                    frameBorder='0'
                    style={{
                      position: 'absolute',
                      left: '-10px'
                    }}
                  />
                </div>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Petrol
