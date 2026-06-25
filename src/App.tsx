import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { TestimonialsSection } from './components/ui/TestimonialsSection'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-body-bg text-body-text">
      <Header />

      <main className="flex-1">
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  )
}
