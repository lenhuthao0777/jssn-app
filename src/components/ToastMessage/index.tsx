import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { ExclamationCircleOutlined, CheckOutlined, WarningOutlined } from '@ant-design/icons'
interface ToastProps {
  isShow: boolean
  message: string
  type: string
  bgColor?: string
}

const ToastMessage: React.FC<ToastProps> = ({ isShow = false, message, type, bgColor }) => {
  const handleBgcolor = (type: string): string => {
    switch (type) {
      case 'success':
        return '#2ecc71'

      case 'error':
        return '#e74c3c'

      case 'warning':
        return '#f1c40f'

      default:
        return ''
    }
  }

  const handleIcon = (type: string): any => {
    switch (type) {
      case 'success':
        return <CheckOutlined />

      case 'error':
        return <ExclamationCircleOutlined />

      case 'warning':
        return <WarningOutlined />

      default:
        return type
    }
  }

  const ToastContainer = styled.div`
    position: absolute;
    top: 0;
    transition: ab;
    right: ${isShow ? '0' : '-100%'};
  `

  const IconBlock = styled.span`
    font-size: 18px;
    color: ${handleBgcolor(type)};
  `

  const TextMessageBlock = styled.span``
  return isShow ? (
    <ToastContainer className="absolute flex items-center top-0">
      <IconBlock className="icon mr-1">{handleIcon(type)}</IconBlock>
      <TextMessageBlock className="message">{message}</TextMessageBlock>
    </ToastContainer>
  ) : null
}

export default ToastMessage
