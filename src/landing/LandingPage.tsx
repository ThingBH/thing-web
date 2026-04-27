import './landing.css'
import { About } from './About'
import { FinalCta } from './FinalCta'
import { Footer } from './Footer'
import { GymHighlight } from './GymHighlight'
import { Header } from './Header'
import { Hero } from './Hero'
import { Products } from './Products'

export default function LandingPage() {
  return (
    <div className="tc-page">
      <Header />
      <main>
        <Hero />
        <Products />
        <GymHighlight />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
