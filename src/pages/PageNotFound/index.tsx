import { css } from '@emotion/react'
import { Button } from 'antd'
import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()

  const locations = useLocation()

  const handleBack = () => {
    navigate('/news')
  }

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <h2
          css={css`
            color: red;
            font-size: 40px;
            text-align: center;
          `}
        >
          404 Page Not Found
        </h2>
        <h3
          css={css`
            font-size: 32px;
          `}
          className='flex items-center justify-center'
        >
          {locations.pathname}
          <span className='text-red-500 ml-2'> Not Found</span>
        </h3>
        <div className='flex items-center justify-center'>
          <Button type='primary' danger onClick={handleBack}>
            Back To Home Page
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
