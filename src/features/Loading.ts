import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface InitialState {
  isLoading: true | false
}

const initialState: InitialState = {
  isLoading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { showLoader } = loadingSlice.actions

export const selectLoading = (state: RootState) => state.loading.isLoading

export default loadingSlice.reducer
