import { configureStore } from '@reduxjs/toolkit'

import loadingSlice from '../features/Loading'
import home from '../features/Home'
import userInfoSlice from '../features/UserInfo'

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    home,
    userInformation: userInfoSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
