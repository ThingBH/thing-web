import './landing.css'
import { About } from './About'
import { Approach } from './Approach'
import { BuildAnything } from './BuildAnything'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Header } from './Header'
import { Hero } from './Hero'
import { Partners } from './Partners'
import { Products } from './Products'

export default function LandingPage() {
  return (
    <div className="tc-page">
      <div className="tc-grid-lines" aria-hidden />
      <Header />
      <main>
        <Hero />
        <Products />
        <Partners />
        <Approach />
        <About />
        <BuildAnything />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
