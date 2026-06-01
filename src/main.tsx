import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AppRoutes } from './AppRoutes'

// Mark JS as available so scroll-reveal styles only hide content when we can animate it back in.
document.documentElement.classList.add('js')

const root = document.getElementById('root')!

const app = (
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)

// Production HTML is pre-rendered (root has children) → hydrate.
// Dev server ships an empty shell → mount fresh.
if (root.firstElementChild) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
