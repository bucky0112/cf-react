import React from 'react'
import { Card, Image } from 'antd'
import liveImg from './../../assets/image/live.jpg'

const Live = () => {
  return (
    <Card title='機台運作情況' hoverable={true}>
      <Image src={liveImg} />
    </Card>
  )
}

export default Live
