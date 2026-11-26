import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section>
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-2 text-muted">Page not found.</p>
      <Link to="/" className="mt-4 inline-block text-brand hover:underline">
        Go home
      </Link>
    </section>
  )
}
