import { CounterPanel } from '@/features/counter/CounterPanel'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { StatCard } from '@/components/StatCard'

const highlights = [
  { label: 'Stack', value: 'Vite + React 19' },
  { label: 'State', value: 'Redux Toolkit' },
  { label: 'Quality', value: 'Vitest + ESLint' },
]

export function HomePage() {
  useDocumentTitle('Trackji Frontend')

  return (
    <>
      <section className="rounded-[28px] border border-slate-900/8 bg-white/82 p-6 shadow-[0_18px_40px_rgba(20,33,61,0.08)] backdrop-blur md:p-8">
        <span className="inline-block rounded-full bg-amber-400/15 px-3 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.18em] text-amber-700">
          Application baseline
        </span>
        <h1 className="mt-4 text-4xl leading-none font-bold tracking-tight sm:text-5xl lg:text-6xl">
          A clean frontend foundation for Trackji.
        </h1>
        <p className="mt-4 max-w-2xl text-[1.05rem] text-trackji-slate">
          This scaffold is organized for maintainable growth: app wiring is centralized,
          shared code is clearly separated, and feature state is easy to extend without
          letting routing or presentation absorb business logic.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <StatCard key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </section>

      <CounterPanel />
    </>
  )
}
