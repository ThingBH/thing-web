import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './landing/LandingPage'
import GymPage from './landing/GymPage'
import Privacy from './landing/Privacy'
import Terms from './landing/Terms'
import DataDeletion from './landing/DataDeletion'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gym" element={<GymPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
      </Routes>
    </BrowserRouter>
  )
}
