import React, { useState } from 'react'
import { Card, Row, Col } from 'antd'

const Steel = () => {
  const [petrolData] = useState([
    {
      title: '冷軋鋼品-中鋼盤價',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0200100.djhtm'
    },
    {
      title: '熱軋鋼品-中鋼盤價',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0200070.djhtm'
    },
    {
      title: '鋼板-中鋼盤價',
      link: 'http://just2.entrust.com.tw/z/ze/zeq/zeqa_D0200110.djhtm'
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

export default Steel
