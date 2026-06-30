import { Heading } from '../ui/Heading'
import { TeamMemberCard } from '../cards/TeamMemberCard'
import { teamMembers } from '../../utils/data'

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
          {teamMembers.map((member) => (
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
