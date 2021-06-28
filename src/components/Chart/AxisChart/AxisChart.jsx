import React from 'react'
import { Chart, LineAdvance, Axis } from 'bizcharts'

function AxisChart (props) {
  const { chartData } = props

  return (
    <Chart
      padding={'auto'}
      appendPadding={10}
      scale={{ month: { type: 'cat', nice: false } }}
      autoFit={true}
      height={400}
      data={chartData}
    >
      <LineAdvance
        shape='smooth'
        point
        area
        position='month*temperature'
        color='city'
      />
      <Axis
        name='month'
        label={{
          rotate: 0.5,
          autoRotate: true,
          style: { textAlign: 'start', fontSize: 10 }
        }}
      />
    </Chart>
  )
}

export default AxisChart
