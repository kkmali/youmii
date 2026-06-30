import { Heading } from '../ui/Heading'
import { TeamMemberCard } from '../cards/TeamMemberCard'
import emmaWells from '../../assets/team-emma-wells.jpg'
import jamesLim from '../../assets/team-james-lim.jpg'
import sofiaNguyen from '../../assets/team-sofia-nguyen.jpg'
import danielMuller from '../../assets/team-daniel-muller.jpg'

// ─── Data ────────────────────────────────────────────────────────────────────
// Add, remove, or reorder team members here — the grid updates automatically.

const TEAM_MEMBERS = [
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
] as const

// ─── Section ─────────────────────────────────────────────────────────────────

export interface TeamSectionProps {
  className?: string
}

export function TeamSection({ className = '' }: TeamSectionProps) {
  return (
    <section
      className={`section${className ? ` ${className}` : ''}`}
      aria-label="Meet the Team"
    >
      <div className="container flex flex-col items-center gap-8 lg:gap-10">

        {/* ── Header ─────────────────────────────────────────────── */}
        <Heading
          badgeText="Meet the Team"
          title={
            <>
              The people building the{' '}
              <span className="text-primary">future of dining</span>
            </>
          }
          subtitle="A passionate team of food lovers on a mission to make every meal unforgettable."
        />

        {/* ── Card grid ──────────────────────────────────────────── */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              linkedInHref={member.linkedInHref}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
