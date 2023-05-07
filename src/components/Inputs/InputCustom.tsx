import { Input } from 'antd'
import React from 'react'

interface PropsInputCustom {
  disabled?: boolean
  className?: string
  placeholder?: string
  name?: string
  suffix?: string
  hdChange?: (name: string, value: string) => void
}

const InputCustom: React.FC<PropsInputCustom> = ({ disabled, className, placeholder, name, suffix = '$', hdChange }) => {
  // const suffixType = suffix ? <Icon type={suffix} /> : <span />
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    hdChange && hdChange(name, value)
  }

  return <Input disabled={disabled} className={className} placeholder={placeholder} name={name} onChange={handleChange} />
}

export default InputCustom
