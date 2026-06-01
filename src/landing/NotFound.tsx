import './policy.css'

export default function NotFound() {
  return (
    <div className="policy-page">
      <div className="policy-wrap">
        <p className="policy-meta">Error 404</p>
        <h1>We can’t find that page.</h1>
        <p>
          The page you requested doesn’t exist or has moved. Head back to the homepage to find what
          you need.
        </p>
        <p style={{ marginTop: '1.75rem' }}>
          <a href="/" className="policy-back">← Back to Thing Company</a>
        </p>
      </div>
    </div>
  )
}
