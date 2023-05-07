import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { UserInfo } from '../types/global.type'
import { eraseCookie, getCookie, setCookie } from '../hooks'

const initialState: UserInfo | null = {
  email: '',
  password: '',
  role: [],
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    login: (state: UserInfo, action: PayloadAction<UserInfo>) => {
      const getUserInfo = getCookie('userInfo')

      const userInfo = getUserInfo && JSON.parse(getUserInfo)

      state = { ...userInfo }
    },

    logout: (state: UserInfo | null) => {
      eraseCookie('userInfo')
      state = null
    },
  },
})

export const { login, logout } = userInfoSlice.actions

export const selectUserInfo = (state: RootState) => state.userInformation

export default userInfoSlice.reducer
