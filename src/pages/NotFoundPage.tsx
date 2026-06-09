import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('Page not found | Trackji Frontend')

  return (
    <section className="page-card not-found">
      <h1>Page not found</h1>
      <p>The requested route does not exist in this frontend scaffold.</p>
      <p>
        <Link to="/">Return to home</Link>
      </p>
    </section>
  )
}

