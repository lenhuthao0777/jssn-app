import { Button } from 'antd'
import React from 'react'

interface ButtonProps {
  label?: string
}
const ButtonCustom: React.FC<ButtonProps> = ({ label = 'abc' }) => {
  return <Button>{label}</Button>
}

export default ButtonCustom
