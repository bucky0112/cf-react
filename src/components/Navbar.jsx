import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import Icon from '@mdi/react'
import {
  mdiViewDashboard,
  mdiChartBar,
  mdiMonitorDashboard,
  mdiChartLine,
  mdiWrench,
  mdiWarehouse,
  mdiScrewMachineFlatTop,
  mdiAirFilter,
  mdiFinance
} from '@mdi/js'
import logo from './../assets/image/logo_header.png'

export default function HeadBar () {
  const { SubMenu } = Menu

  const [current, setCurrent] = useState('mail')

  const [menuList] = useState([
    {
      title: 'Dashboard',
      link: '/',
      icon: <Icon path={mdiViewDashboard} size={1} title='Dashboard' />
    },
    {
      title: '人力現況分析',
      link: '/hr',
      icon: <Icon path={mdiChartBar} size={1} title='人力現況分析' />
    },
    {
      title: 'UPS 監控',
      link: '/ups',
      icon: <Icon path={mdiMonitorDashboard} size={1} title='UPS 監控' />
    },
    {
      title: '匯率看板',
      link: '/exchange',
      icon: <Icon path={mdiChartLine} size={1} title='匯率看板' />
    },
    {
      title: '成機',
      icon: <Icon path={mdiWrench} size={1} title='成機' />,
      link: '/build-up',
      children: [
        {
          title: '成機看板',
          icon: <Icon path={mdiWrench} size={0.5} title='成機看板' />,
          link: '/build-up/board'
        }
      ]
    },
    {
      title: '物流',
      icon: <Icon path={mdiWarehouse} size={1} title='物流' />,
      link: '/logistic',
      children: [
        {
          title: '撿料狀態',
          icon: <Icon path={mdiWarehouse} size={0.5} title='撿料狀態' />,
          link: '/logistic/status'
        },
        {
          title: '物流明細',
          icon: <Icon path={mdiWarehouse} size={0.5} title='物流明細' />,
          link: '/logistic/details'
        },
        {
          title: '缺料看板',
          icon: <Icon path={mdiWarehouse} size={0.5} title='缺料看板' />,
          link: '/logistic/short'
        }
      ]
    },
    {
      title: '機械稼動狀態',
      icon: (
        <Icon path={mdiScrewMachineFlatTop} size={1} title='機械稼動狀態' />
      ),
      link: '/operation',
      children: [
        {
          title: '本廠',
          icon: <Icon path={mdiScrewMachineFlatTop} size={0.5} title='本廠' />,
          link: '/operation/local'
        },
        {
          title: '彰濱廠',
          icon: (
            <Icon path={mdiScrewMachineFlatTop} size={0.5} title='彰濱廠' />
          ),
          link: '/operation/chang-bin'
        }
      ]
    },
    {
      title: '空壓機監控',
      icon: <Icon path={mdiAirFilter} size={1} title='空壓機監控' />,
      link: '/compressor',
      children: [
        {
          title: 'API624927',
          icon: <Icon path={mdiAirFilter} size={0.5} title='API624927' />,
          link: '/compressor/API624927'
        },
        {
          title: 'API670934',
          icon: <Icon path={mdiAirFilter} size={0.5} title='API670934' />,
          link: '/compressor/API670934'
        },
        {
          title: 'API670935',
          icon: <Icon path={mdiAirFilter} size={0.5} title='API670935' />,
          link: '/compressor/API670935'
        }
      ]
    },
    {
      title: '原物料價格',
      icon: <Icon path={mdiFinance} size={1} title='原物料價格' />,
      link: '/price',
      children: [
        {
          title: '煉油價格',
          icon: <Icon path={mdiFinance} size={0.5} title='煉油價格' />,
          link: '/price/petrol'
        },
        {
          title: '板鋼價格',
          icon: <Icon path={mdiFinance} size={0.5} title='板鋼價格' />,
          link: '/price/steel'
        },
        {
          title: '銅價格',
          icon: <Icon path={mdiFinance} size={0.5} title='銅價格' />,
          link: '/price/copper'
        },
        {
          title: '航運價格',
          icon: <Icon path={mdiFinance} size={0.5} title='航運價格' />,
          link: '/price/shipping'
        }
      ]
    }
  ])

  const handleClick = (e) => {
    // console.log('click ', e)
    setCurrent({ current: e.key })
  }

  const getMenu = (list) => {
    return list.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.link} icon={item.icon}>
            <Link to={item.link}>{item.title}</Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.link} icon={item.icon} title={item.title}>
            {getMenu(item.children)}
          </SubMenu>
        )
      }
    })
  }

  return (
    <Menu
      theme='dark'
      onClick={handleClick}
      selectedKeys={[current]}
      mode='horizontal'
    >
      <Menu.Item key='logo'>
        <img src={logo} alt='logo'></img>
      </Menu.Item>

      {getMenu(menuList)}
    </Menu>
  )
}
