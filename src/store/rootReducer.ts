import { combineReducers } from '@reduxjs/toolkit'
import { counterReducer } from '@/features/counter/counterSlice'

export const rootReducer = combineReducers({
  counter: counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

