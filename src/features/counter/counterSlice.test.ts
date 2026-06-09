import { describe, expect, it } from 'vitest'
import { counterReducer, decrement, increment, reset, setValue } from '@/features/counter/counterSlice'

describe('counterSlice', () => {
  it('handles the default state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({ value: 3 })
  })

  it('increments, decrements, resets, and sets the value', () => {
    let state = counterReducer(undefined, increment())
    expect(state.value).toBe(4)

    state = counterReducer(state, decrement())
    expect(state.value).toBe(3)

    state = counterReducer(state, setValue(10))
    expect(state.value).toBe(10)

    state = counterReducer(state, reset())
    expect(state.value).toBe(3)
  })
})

