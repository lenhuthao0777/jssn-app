import { Avatar, Popover } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { eraseCookie } from '../hooks'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import logo from '../assets/imgs/logo-udemy.svg'
import { COMMON } from '@src/constants'
import { includes } from 'lodash'
import { useTranslation } from 'react-i18next'
function Nav() {
  const location = useLocation()

  const navigate = useNavigate()

  const { t } = useTranslation()

  const isNews = includes(location.pathname, 'news')

  const Logout = () => {
    eraseCookie('userInfo')

    navigate('/login')
  }

  const content = (
    <div>
      <p className='cursor-pointer' onClick={Logout}>
        {t('logout')}
      </p>
      <p>{t('profile')}</p>
    </div>
  )

  const Logo = styled.span`
    width: 120px;
  `

  const SectionContainer = styled.section`
    width: 100%
    height: 80px;
    background: ${COMMON.bg_nav};
    cursor: pointer;
    ${
      isNews
        ? ` display: flex;
            align-items: center;
            justify-content: space-between;`
        : `
            display: flex;
            align-items: center;
            justify-content: flex-end;;
        `
    }
  `

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <SectionContainer className='header-nav h-20 p-2'>
      {isNews ? (
        <Logo onClick={handleBackToHome}>
          <img src={logo} alt='img' />
        </Logo>
      ) : null}
      <Popover placement='topRight' content={content} title='Johnny'>
        <Avatar className='cursor-pointer' icon={<UserOutlined />} />
      </Popover>
    </SectionContainer>
  )
}

export default Nav
