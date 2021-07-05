import React, { useState } from 'react'
import { Card, Row, Col } from 'antd'

const Shipping = () => {
  const [petrolData] = useState([
    {
      title: '巴拿馬型-運費指數',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0260020.djhtm'
    },
    {
      title: '波羅的海-乾貨指數',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0260050.djhtm'
    },
    {
      title: '海峽型-運費指數',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0260030.djhtm'
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

export default Shipping
