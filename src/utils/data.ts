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
} from 'lucide-react'

// ─── Asset imports ────────────────────────────────────────────────────────────

import step1Img from '../assets/how-it-works-step1.jpg'
import step2Img from '../assets/how-it-works-step2.jpg'
import step3Img from '../assets/how-it-works-step3.jpg'

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
  imageSrc: string
  imageAlt: string
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
      { label: 'For Restaurants', href: '#restaurants' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Press', href: '#press' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
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

export const testimonialStats: StatItem[] = [
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
