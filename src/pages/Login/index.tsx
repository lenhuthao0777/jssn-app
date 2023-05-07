import React, { useEffect, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import QueryString from 'qs'
import styled from 'styled-components'
import { AxiosError } from 'axios'

import { getCookie, setCookie, showToast } from '../../hooks'
import { ROUTER_ENUM } from '@src/routers/Router.enum'
import Auth from '@src/apis/Auth.api'
import { useAppDispatch } from '@app/hook'

// Style
const Container = styled.div`
  width: 500px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 100px auto;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9);
`
// Type
type TUserLogin = {
  email: string
  password: string
}

const useAuth = () => {
  const user: string = getCookie('userInfo')

  const checkUserInfo = user && JSON.parse(user)

  return checkUserInfo
}

// Component
const Login = () => {
  const dispatch = useAppDispatch()

  const [userInfo, setUserInfo] = useState<TUserLogin>({
    email: '',
    password: '',
  })

  const auth = useAuth()

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res: any = await Auth.login(userInfo)

      await setCookie(
        'userInfo',
        JSON.stringify({
          ...res.data,
        })
      )

      await showToast('success', res.message)

      if (res.code === 200) {
        navigate(ROUTER_ENUM.NEWS)
      }
    } catch (error: AxiosError | any) {
      const {
        response: {
          data: { message },
        },
      } = error

      showToast('error', message)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.target

    setUserInfo({
      ...userInfo,
      [`${target.name}`]: target.value,
    })
  }

  useEffect(() => {
    if (auth) {
      const { redirectTo } = QueryString.parse(location.search, {
        ignoreQueryPrefix: true,
      })

      if (redirectTo) {
        redirect(redirectTo as string)
      }

      return navigate('/')
    }
  }, [auth])

  return (
    <Container>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <div className='mt-8 space-y-6'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md shadow-sm'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  required
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Email address'
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Password'
                  onChange={onChange}
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'
                >
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Login
