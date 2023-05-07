import React, { useState } from 'react'
import {
  AppstoreOutlined,
  CalendarOutlined,
  SettingOutlined,
  HomeOutlined,
  BarChartOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
import type { MenuProps, MenuTheme } from 'antd/es/menu'
import { css } from '@emotion/react'
import { Link, useLocation } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// Components
import Logo from '../assets/imgs/logo-udemy.svg'
import { ROUTER_ENUM } from '../routers/Router.enum'
import { useTranslation } from 'react-i18next'
type MenuItem = Required<MenuProps>['items'][number]

const SideBar: any = ({ role }: any) => {
  const [mode, setMode] = useState<'vertical' | 'inline'>('inline')

  const [theme, setTheme] = useState<MenuTheme>('light')

  const { t } = useTranslation()

  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem => {
    // if()
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem
  }

  const items: MenuItem[] = [
    getItem(
      <Link to={ROUTER_ENUM.DASHBOARD}>{t('dashboard')}</Link>,
      uuid(),
      <HomeOutlined />
    ),
    getItem(
      <Link to={ROUTER_ENUM.DEFAULT}>{t('home')}</Link>,
      uuid(),
      <CalendarOutlined />
    ),
    getItem(
      <Link to={ROUTER_ENUM.NEWS}>{t('news')}</Link>,
      uuid(),
      <BarChartOutlined />
    ),
    getItem(t('user'), uuid(), <AppstoreOutlined />, [
      getItem(t('setting'), uuid()),
      getItem(<Link to={ROUTER_ENUM.PROFILE}>{t('profile')}</Link>, uuid()),
      // getItem('Submenu', 'sub1-2', null, [
      //   getItem('Option 5', '5'),
      //   getItem('Option 6', '6'),
      // ]),
    ]),
  ]

  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline')
  }

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light')
  }

  const header_side_bar = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const header_img = css`
    width: 125px;
  `

  return (
    <>
      {/* <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br /> */}
      <div css={header_side_bar} className='logo h-20'>
        <Link to={ROUTER_ENUM.BASE_URL}>
          <img css={header_img} src={Logo} alt='img' />
        </Link>
      </div>
      <Menu
        style={{ width: 240, height: '80%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  )
}

export default SideBar
