import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface InitialState {
  data: []
}

const initialState: InitialState = {
  data: [],
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<any>) => {
      state.data = action.payload
    },
  },
})

export const { getData } = homeSlice.actions

export const selectHomeData = (state: RootState) => state

export default homeSlice.reducer
