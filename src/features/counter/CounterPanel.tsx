import { decrement, increment, reset, selectCounterValue } from '@/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

export function CounterPanel() {
  const dispatch = useAppDispatch()
  const value = useAppSelector(selectCounterValue)

  return (
    <section className="page-card counter-panel">
      <div>
        <h2 className="counter-panel__section-title">Redux wiring example</h2>
        <p className="counter-panel__copy">
          This feature demonstrates the default state-management path for Trackji.
          Components stay thin, actions are typed, and feature state remains colocated
          under <code>src/features</code>.
        </p>
      </div>

      <div className="counter-panel__controls">
        <div>
          <p className="counter-panel__copy">Counter value</p>
          <p className="counter-panel__value" aria-live="polite">
            {value}
          </p>
        </div>
        <div className="counter-panel__buttons">
          <button className="button button--primary" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button className="button button--ghost" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button className="button button--ghost" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
      </div>
    </section>
  )
}

