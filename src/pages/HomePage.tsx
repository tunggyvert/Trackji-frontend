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
      <section className="page-card hero">
        <span className="hero__eyebrow">Application baseline</span>
        <h1 className="hero__title">A clean frontend foundation for Trackji.</h1>
        <p className="hero__copy">
          This scaffold is organized for maintainable growth: app wiring is centralized,
          shared code is clearly separated, and feature state is easy to extend without
          letting routing or presentation absorb business logic.
        </p>
        <div className="hero__meta">
          {highlights.map((item) => (
            <StatCard key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </section>

      <CounterPanel />
    </>
  )
}

