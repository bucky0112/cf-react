import React from 'react'
import { Chart, Interval, Tooltip } from 'bizcharts'

function BarChart (props) {
  const { chartData } = props

  return (
    <Chart
      height={400}
      autoFit={true}
      data={chartData}
      interactions={['active-region']}
      padding={[30, 30, 30, 50]}
    >
      <Interval position='day*activation' />
      <Tooltip shared />
    </Chart>
  )
}

export default BarChart
