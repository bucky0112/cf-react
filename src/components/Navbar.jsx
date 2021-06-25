import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js'
// import {
//   MailOutlined,
//   SettingOutlined
// } from '@ant-design/icons'
import logo from './../assets/image/logo_header.png'

export default function HeadBar () {
  const { SubMenu } = Menu

  const [current, setCurrent] = useState('mail')

  const [menuList] = useState([
    {
      title: 'Dashboard',
      link: '/',
      icon: (
        <Icon
          path={mdiAccount}
          size={1}
          horizontal
          vertical
          rotate={90}
          color='red'
          spin
        />
      )
    },
    {
      title: '人力現況分析',
      link: '/hr',
      icon: ''
    },
    {
      title: 'UPS 監控',
      link: '/ups',
      icon: ''
    },
    {
      title: '匯率看板',
      link: '/exchange',
      icon: ''
    },
    {
      title: '成機',
      icon: '',
      link: '/build-up',
      children: [
        {
          title: '成機看板',
          icon: '',
          link: '/build-up/board'
        }
      ]
    },
    {
      title: '物流',
      icon: '',
      link: '/logistic',
      children: [
        {
          title: '撿料狀態',
          icon: '',
          link: '/logistic/status'
        },
        {
          title: '物流明細',
          icon: '',
          link: '/logistic/details'
        },
        {
          title: '缺料看板',
          icon: '',
          link: '/logistic/short'
        }
      ]
    },
    {
      title: '機械稼動狀態',
      icon: '',
      link: '/operation',
      children: [
        {
          title: '本廠',
          icon: '',
          link: '/operation/local'
        },
        {
          title: '彰濱廠',
          icon: '',
          link: '/operation/chang-bin'
        }
      ]
    },
    {
      title: '空壓機監控',
      icon: '',
      link: '/compressor',
      children: [
        {
          title: 'API624927',
          icon: '',
          link: '/compressor/API624927'
        },
        {
          title: 'API670934',
          icon: '',
          link: '/compressor/API670934'
        },
        {
          title: 'API670935',
          icon: '',
          link: '/compressor/API670935'
        }
      ]
    },
    {
      title: '原物料價格',
      icon: '',
      link: '/price',
      children: [
        {
          title: '煉油價格',
          icon: '',
          link: '/price/petrol'
        },
        {
          title: '板鋼價格',
          icon: '',
          link: '/price/steel'
        },
        {
          title: '銅價格',
          icon: '',
          link: '/price/copper'
        },
        {
          title: '航運價格',
          icon: '',
          link: '/price/shipping'
        }
      ]
    }
  ])

  const handleClick = (e) => {
    console.log('click ', e)
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
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
      <Menu.Item key='logo'>
        <img src={logo} alt='logo'></img>
      </Menu.Item>

      {getMenu(menuList)}

    </Menu>
  )
}
