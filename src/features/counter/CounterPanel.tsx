import { decrement, increment, reset, selectCounterValue } from '@/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

export function CounterPanel() {
  const dispatch = useAppDispatch()
  const value = useAppSelector(selectCounterValue)

  return (
    <section className="grid gap-6 rounded-[28px] border border-slate-900/8 bg-white/82 p-6 shadow-[0_18px_40px_rgba(20,33,61,0.08)] backdrop-blur md:grid-cols-[1.4fr_1fr] md:p-8">
      <div>
        <h2 className="text-xl font-semibold">Redux wiring example</h2>
        <p className="mt-3 text-trackji-slate">
          This feature demonstrates the default state-management path for Trackji.
          Components stay thin, actions are typed, and feature state remains colocated
          under <code className="rounded bg-slate-950/5 px-1.5 py-0.5 text-sm">src/features</code>.
        </p>
      </div>

      <div className="grid content-start gap-4 rounded-3xl bg-trackji-ink p-6 text-white">
        <div>
          <p className="text-sm text-white/70">Counter value</p>
          <p className="mt-1 text-5xl font-bold tracking-tight" aria-live="polite">
            {value}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            className="cursor-pointer rounded-full bg-trackji-gold px-4 py-2.5 font-bold text-trackji-ink transition hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-amber-300/70"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="cursor-pointer rounded-full border border-white/20 bg-white/12 px-4 py-2.5 font-bold text-white transition hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white/60"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="cursor-pointer rounded-full border border-white/20 bg-white/12 px-4 py-2.5 font-bold text-white transition hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white/60"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  )
}
