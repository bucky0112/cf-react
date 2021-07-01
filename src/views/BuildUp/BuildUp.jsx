import React from 'react'
import Table from '../../components/Table/BuildUp'
import { Sorter } from '../../utils/sorter'

const BuildUp = () => {
  const columns = [
    {
      title: '製令',
      dataIndex: 'name'
    },
    {
      title: '交貨客戶',
      dataIndex: 'chinese',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 1
      }
    },
    {
      title: '機型',
      dataIndex: 'math',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 3
      }
    },
    {
      title: '工單',
      dataIndex: 'english',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 1
      }
    },
    {
      title: '預計出貨日',
      dataIndex: 'shipmentDay',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 1
      }
    }
  ]

  const data = [
    {
      key: '1',
      name: 'C00260',
      chinese: 'F****',
      math: 'G2-110H',
      english: 401,
      shipmentDay: '2020/11/23'
    },
    {
      key: '2',
      name: 'C00367',
      chinese: '冠 ****',
      math: 'OCP-80EWV',
      english: 1569,
      shipmentDay: '2020/11/23'
    },
    {
      key: '3',
      name: 'C00368',
      chinese: '冠 ****',
      math: 'OCP-80EWV',
      english: 1570,
      shipmentDay: '2020/11/23'
    },
    {
      key: '4',
      name: 'C00373',
      chinese: '恆 ****',
      math: 'OCP-35EWV',
      english: 1617,
      shipmentDay: '2020/11/23'
    }
  ]

  return <Table columns={columns} dataSource={data} />
}

export default BuildUp
