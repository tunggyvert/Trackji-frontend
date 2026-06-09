import { Outlet, Link } from 'react-router-dom'

export function AppShell() {
  return (
    <div className="app-shell">
      <div className="app-shell__inner">
        <header className="app-shell__header">
          <Link className="app-shell__brand" to="/">
            <span className="app-shell__brand-mark">TJ</span>
            <span className="app-shell__brand-text">
              <span className="app-shell__brand-title">Trackji</span>
              <span className="app-shell__brand-copy">Frontend foundation</span>
            </span>
          </Link>
        </header>
        <main className="app-shell__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

