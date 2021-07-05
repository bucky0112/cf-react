import React, { useState } from 'react'
import { Card, Row, Col } from 'antd'

const Copper = () => {
  const [petrolData] = useState([
    {
      title: '倫敦高級銅極現貨價',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0160190.djhtm'
    },
    {
      title: '紐約銅期貨價格',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0120220.djhtm'
    },
    {
      title: '銅倫敦LME庫存量',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0160260.djhtm'
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

export default Copper
