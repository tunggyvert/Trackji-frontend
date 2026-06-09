import { Outlet, Link } from 'react-router-dom'

export function AppShell() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-5 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <Link
            className="inline-flex items-center gap-3 rounded-2xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-amber-300/70"
            to="/"
          >
            <span className="grid size-11 place-items-center rounded-2xl bg-trackji-ink text-sm font-bold tracking-[0.18em] text-trackji-gold">
              TJ
            </span>
            <span className="flex flex-col">
              <span className="text-lg font-bold">Trackji</span>
              <span className="text-sm text-slate-600">Frontend foundation</span>
            </span>
          </Link>
        </header>
        <main className="grid gap-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
