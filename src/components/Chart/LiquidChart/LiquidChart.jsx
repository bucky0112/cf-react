import React, { useState, useEffect } from 'react'
import {
  Chart,
  Tooltip,
  Interval,
  Effects,
  Legend,
  Guide,
  Axis
} from 'bizcharts'

const { Text } = Guide

const scale = {
  percent: {
    min: 0,
    max: 100
  }
}

const LiquidChart = (props) => {
  const data = [props.data]

  const [status] = useState(data[0].percent)
  const [renderColor, setRenderColor] = useState('#5B8FF9')

  useEffect(() => {
    return status > 50
      ? setRenderColor('#00A65A')
      : status > 30
        ? setRenderColor('#FFE153')
        : setRenderColor('#FF2D2D')
  }, [])

  return (
    <Chart data={data} width={200} height={200} padding={0} scale={scale}>
      <Tooltip />
      <Axis visible={false} />
      <Interval
        position='station*percent'
        color={('station', [renderColor])}
        shape='liquid-fill-gauge'
        style={{
          lineWidth: 10,
          fillOpacity: 0.75
        }}
        size={160}
        customInfo={{}}
      />
      <Legend visible={false} />
      <Effects>
        {(chart) => {
          chart.geometries[0].customInfo({
            radius: 0.9,
            outline: { border: 2, distance: 0 },
            wave: { count: 5, length: 192 }
          })
        }}
      </Effects>
      <Guide>
        {data.map((row) => (
          <Text
            key={row}
            content={`${row.percent}%`}
            top
            position={{
              station: row.station,
              percent: 50
            }}
            style={{
              opacity: 0.75,
              fontSize: window.innerWidth / 60,
              textAlign: 'center'
            }}
          />
        ))}
      </Guide>
    </Chart>
  )
}

export default LiquidChart
