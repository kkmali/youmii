import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/ui/HeroSection'
import { FeaturesSection } from './components/ui/FeaturesSection'
import { HowItWorksSection } from './components/ui/HowItWorksSection'
import { ComparisonSection } from './components/ui/ComparisonSection'
import { TestimonialsSection } from './components/ui/TestimonialsSection'
import { FaqSection } from './components/ui/FaqSection'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-body-bg text-body-text">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <ComparisonSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  )
}
