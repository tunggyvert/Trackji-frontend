import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store/store'

export type CounterState = {
  value: number
}

const initialState: CounterState = {
  value: 3,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = initialState.value
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { decrement, increment, reset, setValue } = counterSlice.actions
export const counterReducer = counterSlice.reducer

export const selectCounterValue = (state: RootState) => state.counter.value

