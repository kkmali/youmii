import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { RootLayout } from './components/layout/RootLayout'
import App from './App.tsx'
import AboutPage from './pages/About.tsx'
import PartnerWithUsPage from './pages/PartnerWithUs.tsx'
import ContactUsPage from './pages/ContactUs.tsx'
import PrivacyPolicyPage from './pages/PrivacyPolicy.tsx'
import GdprPage from './pages/Gdpr.tsx'
import NotFoundPage from './pages/NotFound.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/gdpr" element={<GdprPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
