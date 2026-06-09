import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('Page not found | Trackji Frontend')

  return (
    <section className="rounded-[28px] border border-slate-900/8 bg-white/82 px-8 py-12 shadow-[0_18px_40px_rgba(20,33,61,0.08)] backdrop-blur">
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-trackji-slate">
        The requested route does not exist in this frontend scaffold.
      </p>
      <p className="mt-5">
        <Link className="font-semibold text-trackji-ink underline decoration-amber-400/70 underline-offset-4" to="/">
          Return to home
        </Link>
      </p>
    </section>
  )
}
