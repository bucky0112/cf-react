import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
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
      icon: ''
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
    }
  ])

  const handleClick = (e) => {
    console.log('click ', e)
    setCurrent({ current: e.key })
  }

  const getMenu = () => {
    return menuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.link} icon={item.icon}>
            <Link to={item.link}>{item.title}</Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {this.getMenu(item.children)}
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

      {getMenu()}
    </Menu>
  )
}
