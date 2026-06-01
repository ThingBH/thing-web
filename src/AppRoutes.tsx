import { Routes, Route } from 'react-router-dom'
import { allRoutes } from './routes'

/** Route table shared by the client (BrowserRouter) and the build-time pre-renderer (StaticRouter). */
export function AppRoutes() {
  return (
    <Routes>
      {allRoutes.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
    </Routes>
  )
}
