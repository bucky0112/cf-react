import React from 'react'
import {
  Chart,
  Interval,
  Tooltip,
  Axis,
  Coordinate,
  Interaction,
  getTheme
} from 'bizcharts'

const PieChart = (props) => {
  const { chartData } = props

  const data = chartData

  const cols = {
    percent: {
      formatter: (num) => {
        const val = Math.round(num * 100)
        return val + '%'
      }
    }
  }

  return (
    <Chart height={400} data={data} scale={cols} autoFit={true}>
      <Coordinate type='theta' radius={0.75} />
      <Tooltip showTitle={false} />
      <Axis visible={false} />
      <Interval
        position='percent'
        adjust='stack'
        color='item'
        style={{
          lineWidth: 1,
          stroke: '#fff'
        }}
        label={[
          'count',
          {
            content: (data) => {
              const num = Math.round(data.percent * 100)
              return `${data.item}: ${num}%`
            }
          }
        ]}
        state={{
          selected: {
            style: (t) => {
              const res = getTheme().geometries.interval.rect.selected.style(t)
              return { ...res, fill: 'red' }
            }
          }
        }}
      />
      <Interaction type='element-single-selected' />
    </Chart>
  )
}

export default PieChart
