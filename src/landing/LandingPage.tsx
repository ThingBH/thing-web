import './landing.css'
import { About } from './About'
import { Capabilities } from './Capabilities'
import { FinalCta } from './FinalCta'
import { Footer } from './Footer'
import { GymHighlight } from './GymHighlight'
import { Header } from './Header'
import { Hero } from './Hero'
import { Products } from './Products'
import { SocialProof } from './SocialProof'

export default function LandingPage() {
  return (
    <div className="tc-page">
      <Header />
      <main>
        <Hero />
        <Products />
        <Capabilities />
        <GymHighlight />
        <SocialProof />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
