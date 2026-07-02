import type { ComponentType } from 'react'

// ─── Lucide icons ─────────────────────────────────────────────────────────────

import {
  Users,
  BookOpen,
  Brain,
  Laugh,
  MapPinned,
  FileClock,
  AlertCircle,
  HeartCrack,
  AlarmClockOff,
  Award,
  BrainCircuit,
  Rocket,
  Calendar,
  BarChart2,
  TrendingUp,
  Sparkles,
  RefreshCw,
} from 'lucide-react'

// ─── Asset imports ────────────────────────────────────────────────────────────

import step1Img from '../assets/how-it-works-step1.jpg'
import step2Img from '../assets/how-it-works-step2.jpg'
import step3Img from '../assets/how-it-works-step3.jpg'

import partnerStep1Img from '../assets/partner-step1.jpg'
import partnerStep2Img from '../assets/partner-step2.jpg'
import partnerStep3Img from '../assets/partner-step3.jpg'

import bg1 from '../assets/testimonial-bg-1.jpg'
import bg2 from '../assets/testimonial-bg-2.jpg'
import bg3 from '../assets/testimonial-bg-3.jpg'
import bg4 from '../assets/testimonial-bg-4.jpg'
import avatarMarco from '../assets/avatar-marco.jpg'
import avatarDavid from '../assets/avatar-david.jpg'
import avatarElena from '../assets/avatar-elena.jpg'

import emmaWells from '../assets/team-emma-wells.jpg'
import jamesLim from '../assets/team-james-lim.jpg'
import sofiaNguyen from '../assets/team-sofia-nguyen.jpg'
import danielMuller from '../assets/team-daniel-muller.jpg'

import instagramSvg from '../assets/icons/instagram.svg'
import twitterSvg from '../assets/icons/twitter.svg'
import linkedinSvg from '../assets/icons/linkedin.svg'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

export interface FooterLinkGroup {
  heading: string
  links: NavLink[]
}

export interface FeatureItem {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface StepItem {
  step: string
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  offsetClass?: string
}

export interface ComparisonProblemItem {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface ComparisonSolutionItem {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
  variant: 'solution-orange' | 'solution-blue'
}

export interface TestimonialItem {
  id: number
  backgroundImage: string
  quote: string
  reviewerName: string
  reviewerLocation: string
  avatarSrc: string
}

export interface StatItem {
  value: string
  label: string
}

export interface FaqEntry {
  question: string
  answer: string
}

export interface TeamMember {
  name: string
  role: string
  imageSrc: string
  linkedInHref: string
}

export interface ValueItem {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface SocialLink {
  label: string
  icon: string
  href: string
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footerLinks: FooterLinkGroup[] = [
  {
    heading: 'Product',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'GroupMatch', href: '#groupmatch' },
      { label: 'For Restaurants', href: '/partner-with-us' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Partner with us', href: '/partner-with-us' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', icon: instagramSvg, href: 'https://instagram.com' },
  { label: 'Twitter / X', icon: twitterSvg, href: 'https://twitter.com' },
  { label: 'LinkedIn', icon: linkedinSvg, href: 'https://linkedin.com' },
]

// ─── Features ─────────────────────────────────────────────────────────────────

export const leftFeatures: FeatureItem[] = [
  {
    icon: Brain,
    title: 'AI Smart Search',
    description: 'Ask anything in plain language — Youmii instantly searches 240+ restaurants.',
  },
  {
    icon: Laugh,
    title: 'Mood & Occasion Chips',
    description:
      'Not sure what to type? Tap Romantic, Terrace, or Groups. One tap surfaces restaurants that match your moment.',
  },
  {
    icon: Users,
    title: 'GroupMatch Voting',
    description:
      "Can't decide where to eat? Start a group session, and vote privately — the top pick gets booked.",
  },
]

export const rightFeatures: FeatureItem[] = [
  {
    icon: BookOpen,
    title: 'Live Restaurant Menus',
    description:
      "See today's daily specials and full menus before you book. Always up to date — published directly by the restaurant.",
  },
  {
    icon: MapPinned,
    title: 'Map with Emoji Pins',
    description:
      'Explore a full-screen map with cuisine-specific emoji pins. Tap any pin for name, rating, and a direct route.',
  },
  {
    icon: FileClock,
    title: 'Reservation History',
    description:
      'All your bookings in one place — upcoming, confirmed, and past. Cancel or check status any time from your profile.',
  },
]

// ─── How It Works ─────────────────────────────────────────────────────────────

export const steps: StepItem[] = [
  {
    step: '01',
    title: 'Define your craving',
    description:
      "Tell us what you're craving — a terrace dinner, vegan lunch, or Swiss classic. Youmii understands natural language, including Swiss German.",
    imageSrc: step1Img,
    imageAlt: 'Person searching for a restaurant on the Youmii app',
  },
  {
    step: '02',
    title: 'Browse your matches',
    description:
      'See curated restaurant cards with photos, ratings, opening hours, menus, and travel time from your location. Filter by mood, cuisine, or dietary need.',
    imageSrc: step2Img,
    imageAlt: 'Curated restaurant match cards in Youmii',
    offsetClass: 'lg:mt-12',
  },
  {
    step: '03',
    title: 'Reserve and enjoy',
    description:
      'Submit your reservation request directly in the app. The restaurant confirms and you get a push notification. No phone calls, no waiting.',
    imageSrc: step3Img,
    imageAlt: 'Reservation confirmed notification in Youmii',
    offsetClass: 'lg:mt-24',
  },
]

// ─── Comparison ───────────────────────────────────────────────────────────────

export const problemItems: ComparisonProblemItem[] = [
  {
    icon: AlertCircle,
    title: 'Generic Results',
    description:
      'Scrolling through review sites that treat everyone the same — no context, no taste, no you.',
  },
  {
    icon: AlarmClockOff,
    title: 'Decision Overload',
    description:
      'Too many options, no clear answer. You spend more time choosing than eating.',
  },
  {
    icon: HeartCrack,
    title: 'Wrong Fit',
    description:
      "A 4.8-star rating means nothing if the restaurant doesn't match your mood or dietary needs.",
  },
]

export const solutionItems: ComparisonSolutionItem[] = [
  {
    icon: BrainCircuit,
    title: 'AI-Powered Search',
    description:
      'Describe what you want in plain language — Swiss German, or English. Youmii finds it instantly.',
    variant: 'solution-orange',
  },
  {
    icon: Rocket,
    title: 'Discover by Mood',
    description:
      'Tap a mood chip — Romantic, Terrace, Business, Vegan — and see matched restaurants immediately.',
    variant: 'solution-blue',
  },
  {
    icon: Award,
    title: 'Book in the App',
    description:
      'Select your date, party size, and dietary needs. Reservation confirmed by push notification.',
    variant: 'solution-orange',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    backgroundImage: bg1,
    quote:
      "Hidden gem I never would've found. Table reserved in one tap. Quiet, elegant, perfectly paced.",
    reviewerName: 'Marco Rossi',
    reviewerLocation: 'Bern, Switzerland',
    avatarSrc: avatarMarco,
  },
  {
    id: 2,
    backgroundImage: bg2,
    quote:
      'What really impressed me was how well the recommendations aligned with my dietary preferences and budget.',
    reviewerName: 'David Meyer',
    reviewerLocation: 'Geneva, Switzerland',
    avatarSrc: avatarDavid,
  },
  {
    id: 3,
    backgroundImage: bg3,
    quote:
      '"The electric atmosphere and impeccable service were matched by the chef\'s bold yet delicate flavors — a culinary journey I won\'t soon forget."',
    reviewerName: 'Elena Rossi',
    reviewerLocation: 'Milan, Italy',
    avatarSrc: avatarElena,
  },
  {
    id: 4,
    backgroundImage: bg4,
    quote:
      'This app transformed my Tokyo dining experience with spot-on recommendations and seamless booking.',
    reviewerName: 'Sophie Blanc',
    reviewerLocation: 'Zurich, Switzerland',
    avatarSrc: avatarDavid,
  },
  {
    id: 5,
    backgroundImage: bg1,
    quote:
      "Hidden gem I never would've found. Table reserved in one tap. Quiet, elegant, perfectly paced.",
    reviewerName: 'Marco Rossi',
    reviewerLocation: 'Bern, Switzerland',
    avatarSrc: avatarMarco,
  },
  {
    id: 6,
    backgroundImage: bg2,
    quote:
      'What really impressed me was how well the recommendations aligned with my dietary preferences and budget.',
    reviewerName: 'David Meyer',
    reviewerLocation: 'Geneva, Switzerland',
    avatarSrc: avatarDavid,
  },
  {
    id: 7,
    backgroundImage: bg3,
    quote:
      '"The electric atmosphere and impeccable service were matched by the chef\'s bold yet delicate flavors — a culinary journey I won\'t soon forget."',
    reviewerName: 'Elena Rossi',
    reviewerLocation: 'Milan, Italy',
    avatarSrc: avatarElena,
  },
  {
    id: 8,
    backgroundImage: bg4,
    quote:
      'This app transformed my Tokyo dining experience with spot-on recommendations and seamless booking.',
    reviewerName: 'Sophie Blanc',
    reviewerLocation: 'Zurich, Switzerland',
    avatarSrc: avatarDavid,
  },
]

export const statsData: StatItem[] = [
  { value: '240+', label: 'Restaurants' },
  { value: '4.8★', label: 'App Rating' },
  { value: '14,200+', label: 'Happy diners' },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const defaultFaqs: FaqEntry[] = [
  {
    question: 'How does Youmii match me with restaurants?',
    answer:
      "Youmii uses AI-powered natural language search — type or speak what you're craving, and the app instantly surfaces restaurants that match. You can also set your taste preferences (cuisine type, dietary needs, budget, spice level) in your profile, and Youmii uses these as context for every search. The more you use it, the better it fits you.",
  },
  {
    question: 'Is Youmii free to use?',
    answer:
      'Yes — Youmii is completely free to download and use. Discover restaurants, read reviews, and make reservations at no cost. Some partner restaurants may offer exclusive deals through the app.',
  },
  {
    question: 'How do I update my taste preferences?',
    answer:
      'Open the app and go to your Profile. Tap "Taste Preferences" to update your cuisine types, dietary requirements, budget range, and spice level. Youmii uses these preferences as context whenever you search — the more specific you are, the more tailored your results.',
  },
  {
    question: 'Which restaurants are available on Youmii?',
    answer:
      'Youmii currently covers restaurants in Bern, Zurich, and Basel. We partner with hundreds of local venues across all cuisines and price ranges. New restaurants are added regularly — if your favourite spot is missing, you can suggest it directly from the app.',
  },
  {
    question: 'How do reviews work on Youmii?',
    answer:
      'Only verified diners who booked through Youmii can leave a review. This keeps feedback genuine and unbiased. Reviews cover food quality, service, ambience, and value, with an overall star rating to help you decide quickly.',
  },
  {
    question: 'Can I book a table directly through the app?',
    answer:
      'Absolutely. Once you find a restaurant you like, tap "Reserve" to pick a date, time, and party size. You will receive a confirmation instantly, and a reminder before your reservation. No phone calls, no waiting.',
  },
]

// ─── Team ─────────────────────────────────────────────────────────────────────

export const teamMembers: TeamMember[] = [
  {
    name: 'Emma Wells',
    role: 'CEO & Co-Founder',
    imageSrc: emmaWells,
    linkedInHref: 'https://linkedin.com',
  },
  {
    name: 'James Lim',
    role: 'CTO & Co-Founder',
    imageSrc: jamesLim,
    linkedInHref: 'https://linkedin.com',
  },
  {
    name: 'Sofia Nguyen',
    role: 'Head of Product',
    imageSrc: sofiaNguyen,
    linkedInHref: 'https://linkedin.com',
  },
  {
    name: 'Daniel Müller',
    role: 'VP of Partnerships',
    imageSrc: danielMuller,
    linkedInHref: 'https://linkedin.com',
  },
]

// ─── Partner FAQs ─────────────────────────────────────────────────────────────

export const partnerFaqs: FaqEntry[] = [
  {
    question: 'How do I list my restaurant on Youmii?',
    answer:
      "Joining Youmii is simple. Start by filling out our partner application form. Our team will review your details and verify your business. Once approved, you'll receive a welcome kit with everything you need to set up your profile, upload your menu, and start receiving reservations.",
  },
  {
    question: 'What are the fees for restaurant partners?',
    answer:
      'Listing your restaurant on Youmii is free. We offer flexible plans for restaurants that want additional visibility, featured placements, or advanced analytics. Our team will walk you through all options after your application is approved.',
  },
  {
    question: 'How does Youmii help me attract more customers?',
    answer:
      'Youmii surfaces your restaurant to thousands of active diners searching by mood, cuisine, dietary needs, and location. Our AI matching ensures your venue is shown to the diners most likely to love what you offer — not just those nearby.',
  },
  {
    question: 'How do I manage my restaurant profile?',
    answer:
      'Once approved, you get access to the Youmii Partner Dashboard. From there you can update your menu, photos, opening hours, and special offers in real time. Any changes go live instantly across the app.',
  },
  {
    question: 'How does the review and rating system work for partners?',
    answer:
      'Only verified diners who booked through Youmii can leave a review, keeping feedback genuine. Reviews cover food, service, ambience, and value. You can respond to reviews from your Partner Dashboard to build trust with potential guests.',
  },
  {
    question: 'Can I run promotions or featured listings?',
    answer:
      'Yes. Youmii partners can create time-limited promotions, happy-hour deals, and seasonal menus that are prominently highlighted in search results. Featured placement options are also available for partners who want to boost visibility during peak periods.',
  },
]

// ─── Partner form next-steps ──────────────────────────────────────────────────

export const partnerFormNextSteps: StepItem[] = [
  {
    step: '01',
    title: 'Submit your details',
    description: 'Restaurant name, address, city, contact. ~3 min.',
  },
  {
    step: '02',
    title: 'We review & verify',
    description: 'Manual verification within 2 business days.',
  },
  {
    step: '03',
    title: 'Go live',
    description: 'Access your owner dashboard and start receiving bookings.',
  },
]

// ─── Partner steps ─────────────────────────────────────────────────────────────

export const partnerSteps: StepItem[] = [
  {
    step: '01',
    title: 'List Your Restaurant',
    description:
      'Register your venue and create a complete profile. Add your menus, opening hours, high-quality photos, and unique selling points to showcase your brand.',
    imageSrc: partnerStep1Img,
    imageAlt: 'Restaurant listing interface on Youmii partner dashboard',
  },
  {
    step: '02',
    title: 'Reach More Guests',
    description:
      'Connect with a wide audience actively searching for dining experiences. Our platform filters by mood, cuisine, dietary needs, and location to ensure the right guests find you.',
    imageSrc: partnerStep2Img,
    imageAlt: 'Diners discovering restaurants through the Youmii app',
    offsetClass: 'lg:mt-12',
  },
  {
    step: '03',
    title: 'Boost Your Bookings',
    description:
      'Receive reservation requests directly through the app. Manage confirmations in real-time and get notified instantly. No phone calls, no missed bookings, just more tables filled.',
    imageSrc: partnerStep3Img,
    imageAlt: 'Reservation confirmations flowing into the partner dashboard',
    offsetClass: 'lg:mt-24',
  },
]

// ─── Partner dashboard features ───────────────────────────────────────────────

export interface PartnerFeatureItem {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export const partnerDashboardFeatures: PartnerFeatureItem[] = [
  {
    icon: Brain,
    title: 'Your entire operation, one dashboard',
    description:
      'View bookings, manage your menu, and update your profile — all from one intuitive partner workspace.',
  },
  {
    icon: Sparkles,
    title: 'Smart insights, always at a glance',
    description:
      'See reservation trends, peak hours, and guest preferences to make better decisions for your restaurant.',
  },
  {
    icon: RefreshCw,
    title: 'Stay in sync across every channel',
    description:
      'Updates to your menu and availability reflect instantly everywhere diners discover you on Youmii.',
  },
]

// ─── Values ───────────────────────────────────────────────────────────────────

export const values: ValueItem[] = [
  {
    icon: Users,
    title: 'Restaurants come first',
    description:
      'Every decision starts with one question: does this genuinely help the people running the kitchen?',
  },
  {
    icon: Calendar,
    title: 'AI that earns trust',
    description:
      "We build AI that's transparent and purposeful — designed to support, never replace, the human touch that makes dining special.",
  },
  {
    icon: BarChart2,
    title: 'Better discovery for everyone',
    description:
      "Great food shouldn't stay hidden. We connect the right diners to the right restaurants — not just the loudest ones.",
  },
  {
    icon: TrendingUp,
    title: 'Growth built together',
    description:
      "Our success is measured by yours. When restaurants thrive, we know we're doing our job right.",
  },
]

// ─── Partner brand logos ──────────────────────────────────────────────────────

import customerIoLogo from '../assets/customer-io.png'
import doordashLogo from '../assets/Doordash.png'
import mazeLogo from '../assets/maze.png'
import monzoLogo from '../assets/monzo.png'
import wealthSimpleLogo from '../assets/wealth-simple.png'

export interface PartnerLogo {
  name: string
  src: string
}

export interface PartnerLogoTier {
  label: string
  logos: PartnerLogo[]
}

export const partnerLogoTiers: PartnerLogoTier[] = [
  {
    label: 'Trusted by the Best',
    logos: [
      { name: 'Wealthsimple', src: wealthSimpleLogo },
      { name: 'DoorDash', src: doordashLogo },
      { name: 'Customer.io', src: customerIoLogo },
      { name: 'Maze', src: mazeLogo },
      { name: 'Monzo', src: monzoLogo },
    ],
  },
  {
    label: 'Gastronomic Collaborations',
    logos: [
      { name: 'Monzo', src: monzoLogo },
      { name: 'Customer.io', src: customerIoLogo },
      { name: 'Maze', src: mazeLogo },
      { name: 'DoorDash', src: doordashLogo },
      { name: 'Wealthsimple', src: wealthSimpleLogo },
    ],
  },
]

// ─── Contact page ─────────────────────────────────────────────────────────────

export interface ContactOffice {
  city: string
  addressLines: string[]
}

export const contactOffice: ContactOffice = {
  city: 'Zürich, Switzerland',
  addressLines: ['Bahnhofstrasse 1', '8001 Zürich', 'Switzerland'],
}

export interface ContactInfoPill {
  label: string
  value: string
}

export const contactInfoPills: ContactInfoPill[] = [
  { label: 'Email', value: 'hello@youmii.com' },
  { label: 'Location', value: 'Zürich, Switzerland' },
  { label: 'Response time', value: 'Usually replies within 24h' },
]

// ─── Privacy policy ───────────────────────────────────────────────────────────

export interface PolicySection {
  heading: string
  body: string
}

export const privacyPolicySections: PolicySection[] = [
  {
    heading: 'Introduction',
    body: 'youmii ("youmii", "we", "us", or "our") owns and operates the platform located at youmii.app and all associated youmii mobile applications and services (collectively, the "Platform"). Through the Platform, we provide users ("you" or "Users") with access to AI-powered social experiences, personalised content discovery, smart matching features, and related services ("Services").',
  },
  {
    heading: 'Applicability of this Privacy Policy',
    body: 'This Privacy Policy describes what information youmii collects from Users on the publicly accessible areas of the Platform and how that information is used. This policy is governed by applicable data protection laws, including the EU General Data Protection Regulation (GDPR). By using the Platform, you confirm that you have read and understood this Privacy Policy.',
  },
  {
    heading: 'Agreement to this Privacy Policy',
    body: 'Your access to and use of the Platform is subject to your agreement with this Privacy Policy and our Terms of Use. By using the Platform, you expressly agree to the collection and use of your information as described in this document. If you do not agree with this Privacy Policy, please do not use or access the Platform. We recommend saving a copy of this policy for your records.',
  },
  {
    heading: 'Modifications to this Privacy Policy',
    body: 'youmii may update this Privacy Policy at any time. If we make material changes, we will notify you by posting a notice on the Platform or by sending an email to your registered address. The updated policy will take effect from the date of publication unless otherwise stated. Your continued use of the Platform after changes have been posted constitutes your acceptance of the revised Privacy Policy.',
  },
  {
    heading: 'Contact and Complaints',
    body: 'For questions, requests, or concerns regarding this Privacy Policy or the handling of your personal data, please contact us: youmii Data Protection Officer privacy@youmii.app. If you believe your data protection rights have not been respected, you have the right to lodge a complaint with the relevant supervisory authority in your jurisdiction. This Privacy Policy was last updated in June 2026 and applies to all users of youmii.app and associated youmii services.',
  },
]

// ─── GDPR policy ──────────────────────────────────────────────────────────────

export const gdprPolicySections: PolicySection[] = [
  {
    heading: 'Your Privacy Matters',
    body: 'We are committed to protecting your personal information and handling it with transparency, security, and care. Your data is processed in accordance with GDPR and applicable privacy regulations.',
  },
  {
    heading: 'Information We Collect',
    body: 'We may collect personal details such as your name, email address, account information, preferences, device details, IP address, and website usage data to provide and improve our services.',
  },
  {
    heading: 'How We Use Your Data',
    body: 'Your information is used to manage your account, personalize your experience, provide customer support, improve our platform, communicate important updates, and maintain the security of our services.',
  },
  {
    heading: 'Legal Basis for Processing',
    body: 'We process personal data based on your consent, contractual necessity, legal obligations, legitimate business interests, or other lawful grounds permitted under GDPR.',
  },
  {
    heading: 'Cookies & Tracking',
    body: 'Cookies help us remember your preferences, improve website performance, analyze traffic, and enhance your browsing experience. You can manage your cookie preferences through your browser settings.',
  },
  {
    heading: 'Data Sharing',
    body: 'Your information may be shared with trusted service providers that support hosting, analytics, security, customer support, and other essential platform operations. We never sell your personal data.',
  },
  {
    heading: 'Data Security',
    body: 'We use industry-standard security measures to protect your information from unauthorized access, misuse, loss, or disclosure through technical and organizational safeguards.',
  },
  {
    heading: 'Data Retention',
    body: 'Personal data is retained only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements before being securely deleted or anonymized.',
  },
  {
    heading: 'Your GDPR Rights',
    body: 'You have the right to access, update, delete, restrict, or object to the processing of your personal data, withdraw consent, request data portability, and file a complaint with the relevant data protection authority.',
  },
  {
    heading: 'International Data Transfers',
    body: 'If your information is transferred outside the European Economic Area, appropriate safeguards are implemented to ensure your personal data remains protected under GDPR standards.',
  },
  {
    heading: "Children's Privacy",
    body: 'Our services are not intended for children without appropriate parental consent, and we do not knowingly collect personal information from minors.',
  },
  {
    heading: 'Policy Updates',
    body: 'This Privacy Policy may be updated periodically to reflect changes in our services or legal requirements. Any revisions will be published on this page with the latest effective date.',
  },
]

// ─── Terms of Service ─────────────────────────────────────────────────────────

export const termsPolicySections: PolicySection[] = [
  {
    heading: 'Introduction',
    body: 'Welcome to youmii. youmii AG ("youmii", "we", "us", or "our") operates the platform available at youmii.app and all associated youmii mobile applications and services (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully before using our services.',
  },
  {
    heading: 'Acceptance of Terms',
    body: 'By creating an account, downloading the app, or otherwise accessing the Platform, you confirm that you are at least 16 years of age and that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not use the Platform.',
  },
  {
    heading: 'Description of Services',
    body: 'youmii is an AI-powered restaurant discovery and reservation platform that helps users in Switzerland — currently Bern, Zurich, and Basel — find, match with, and book tables at local restaurants. Features include personalised search, AI-powered recommendations, group matching, real-time availability, and verified diner reviews. Services are provided "as is" and may be updated or discontinued at any time.',
  },
  {
    heading: 'User Accounts',
    body: 'To access certain features you must create an account. You are responsible for keeping your login credentials confidential and for all activity that occurs under your account. You must provide accurate and up-to-date information during registration. youmii reserves the right to suspend or terminate accounts that violate these Terms or are used fraudulently.',
  },
  {
    heading: 'Acceptable Use',
    body: 'You agree to use the Platform only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the Platform. Prohibited conduct includes: misrepresenting your identity, posting false or misleading reviews, scraping or reverse-engineering the Platform, attempting to gain unauthorised access to any systems, or using the Platform to transmit spam or malicious content.',
  },
  {
    heading: 'Restaurant Reservations',
    body: 'youmii facilitates reservations between users and partner restaurants. While we strive to ensure accuracy, we cannot guarantee real-time availability or the actions of third-party restaurant partners. Reservation confirmations are subject to the individual restaurant\'s policies. youmii is not liable for no-shows, cancellations by the restaurant, or disputes arising from a dining experience.',
  },
  {
    heading: 'Reviews & User Content',
    body: 'Only verified diners who completed a reservation through youmii may submit a review. By submitting a review or any other content to the Platform, you grant youmii a non-exclusive, royalty-free, worldwide licence to display, reproduce, and distribute that content as part of the Platform. You remain responsible for ensuring your content is accurate and does not violate any third-party rights or applicable laws.',
  },
  {
    heading: 'Intellectual Property',
    body: 'All content, trademarks, logos, software, and other intellectual property on the Platform are owned by or licensed to youmii AG. You may not copy, modify, distribute, or create derivative works from any part of the Platform without our prior written consent. Personal, non-commercial use of the Platform is permitted within the scope of these Terms.',
  },
  {
    heading: 'Privacy & Data',
    body: 'Your use of the Platform is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Platform, you agree to the collection and processing of your data as described in the Privacy Policy. youmii processes personal data in accordance with the EU General Data Protection Regulation (GDPR) and the Swiss Federal Act on Data Protection (nFADP).',
  },
  {
    heading: 'Limitation of Liability',
    body: 'To the fullest extent permitted by applicable law, youmii AG and its officers, employees, partners, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Platform. Our total liability for any claim shall not exceed the amount you paid to us in the twelve months preceding the claim, or CHF 100, whichever is greater.',
  },
  {
    heading: 'Indemnification',
    body: 'You agree to indemnify and hold harmless youmii AG and its affiliates, officers, employees, and agents from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from your use of the Platform, your violation of these Terms, or your infringement of any third-party rights.',
  },
  {
    heading: 'Modifications to Terms',
    body: 'youmii may update these Terms at any time. Material changes will be communicated via a notice on the Platform or by email to your registered address. Your continued use of the Platform after the effective date of the updated Terms constitutes your acceptance. We recommend reviewing the Terms periodically.',
  },
  {
    heading: 'Governing Law',
    body: 'These Terms are governed by and construed in accordance with the laws of Switzerland, without regard to its conflict-of-law provisions. Any disputes arising from these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts of Basel, Switzerland.',
  },
  {
    heading: 'Contact Us',
    body: 'If you have any questions about these Terms of Service, please contact us at: youmii AG, legal@youmii.app. Our team aims to respond to all enquiries within 5 business days. These Terms were last updated in June 2026 and apply to all users of youmii.app and associated youmii services.',
  },
]
