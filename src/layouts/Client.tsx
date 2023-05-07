import Loading from '@components/Loading'
import Nav from '@components/Nav'
import Toast from '@components/Toast'
import styled from '@emotion/styled'
import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import { css } from '@emotion/react'

const Client: React.FC<PropsWithChildren> = () => {
  const ClientContainerBlock = styled.div`
    max-width: 1200px;
    padding: 15px;
    margin: 0 auto;
  `

  const bodyBlock = css(`
    height: calc(100vh - 80px);
  `)

  return (
    <section className='h-vh' style={{ backgroundColor: '#f1f2f6' }}>
      <Nav />

      <div css={bodyBlock} className='flex relative '>
        <div className='w-screen flex-1'>
          <div className='content'>
            <div className='overflow-auto h-full'>
              <ClientContainerBlock>
                <Outlet />
              </ClientContainerBlock>
            </div>
            <Toast />
            <Loading />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client
