import React, { useState } from 'react'
import { Row, Col, Space, Select } from 'antd'
import LiquidChart from '../../components/Chart/LiquidChart/LiquidChart'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'

const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`
const SelectAndColor = styled.div`
  display: flex;
  justify-content: space-between;
`
const ColorInfo = styled.ul`
  list-style-type: none;
`
const GreenColor = styled.li`
  border-style: solid;
  border-color: #09a960;
  background-color: #09a960;
  border-radius: 10px;
  padding: 5px;
`
const YellowColor = styled.li`
  border-style: solid;
  border-color: #ffe259;
  background-color: #ffe259;
  border-radius: 10px;
  padding: 5px;
`
const RedColor = styled.li`
  border-style: solid;
  border-color: #ff3535;
  background-color: #ff3535;
  border-radius: 10px;
  padding: 5px;
`
const StationTitle = styled.h3`
  text-align: center;
  font-size: 20px;
`

const { Option } = Select

const ChangBinOperation = () => {
  const [stationData] = useState([
    {
      station: '232',
      percent: 51
    },
    {
      station: '234',
      percent: 20
    },
    {
      station: '312',
      percent: 47
    },
    {
      station: '313',
      percent: 31
    },
    {
      station: '315',
      percent: 0
    }
  ])

  const history = useHistory()
  const handleToDetail = () => {
    history.push('/operation/detail')
  }

  const handleSelect = (e) => {
    console.log(e)
    handleToDetail()
  }

  return (
    <>
      <Title>彰濱廠機臺稼動狀況 - 6 月份</Title>
      <SelectAndColor>
        <Select
          placeholder='請選擇機臺'
          style={{ width: 150 }}
          onChange={handleSelect}
        >
          {stationData.map((option) => {
            return (
              <Option key={option.station} value={option.station}>
                {option.station}
              </Option>
            )
          })}
        </Select>
        <ColorInfo>
          <Space>
            <GreenColor>稼動率 &#62; 50%</GreenColor>
            <YellowColor>稼動率介於 30% ~ 50%</YellowColor>
            <RedColor>稼動率 &#60; 30%</RedColor>
          </Space>
        </ColorInfo>
      </SelectAndColor>
      <Row>
        <Space size={[40, 40]} wrap>
          {stationData.map((item) => {
            return (
              <Col key={item.station}>
                <StationTitle>{`機臺 - ${item.station}`}</StationTitle>
                <LiquidChart data={item} />
              </Col>
            )
          })}
        </Space>
      </Row>
    </>
  )
}

export default ChangBinOperation
