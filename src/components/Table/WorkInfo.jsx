import React from 'react'
import { List } from 'antd'

const WorkInfo = (props) => {
  const { data } = props

  return (
    <List
      size='small'
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          style={{ fontSize: 14, fontWeight: 'bold' }}
          extra={<p>{item.content}</p>}
        >
          <List.Item.Meta title={item.title} />
        </List.Item>
      )}
    />
  )
}

export default WorkInfo
