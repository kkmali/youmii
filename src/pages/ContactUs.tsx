import { Mail, MapPin, Zap } from 'lucide-react'
import { PageHeroSection } from '../components/sections/PageHeroSection'
import { ContactForm } from '../components/forms/ContactForm'
import { Badge } from '../components/ui/Badge'
import { contactOffice, contactInfoPills } from '../utils/data'

export default function ContactUsPage() {
  const infoPills = contactInfoPills.map((pill) => ({
    icon:
      pill.label === 'Email' ? (
        <Mail className="size-3.5" />
      ) : pill.label === 'Location' ? (
        <MapPin className="size-3.5" />
      ) : (
        <Zap className="size-3.5" />
      ),
    text: pill.value,
  }))

  return (
    <>
      <PageHeroSection
        badgeText="Youmii Company"
        title={
          <>
            Get in <span className="text-primary">touch</span>
          </>
        }
        subtitle="We're a small team based in Zürich — we read every message."
        infoPills={infoPills}
        backgroundClass="bg-(image:--contact-hero-gr)"
      />

      {/* Content: office info + form */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Office info column */}
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <Badge text="Our office" />
              <h3 className="text-lg font-semibold text-body-text">{contactOffice.city}</h3>
              <div className="flex flex-col gap-1 text-sm text-secondary">
                {contactOffice.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="w-full h-56 sm:h-64 md:h-72 rounded-2xl border border-grey-border overflow-hidden mt-2">
                <iframe
                  title="Youmii office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.267!2d8.539!3d47.3726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a0d50a3a12b%3A0x6d59b1a0c2b9f0c3!2sBahnhofstrasse%201%2C%208001%20Z%C3%BCrich!5e0!3m2!1sen!2sch!4v1700000000000!5m2!1sen!2sch"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form column */}
            <div className="w-full lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
