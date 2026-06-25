import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-body-bg text-body-text">
      <Header />

      {/* Page content will go here */}
      <main className="flex-1">
        {/* Sections to be implemented */}
      </main>

      <Footer />
    </div>
  )
}
