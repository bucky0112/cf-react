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
      <Interval
        position='x*num'
        label={[
          'num',
          (val) => {
            return {
              content: val,
              style: {
                fill: '#0df2c9',
                fontSize: 18,
                fontWeight: 'bold'
              }
            }
          }
        ]}
      />
      <Tooltip shared />
    </Chart>
  )
}

export default BarChart
