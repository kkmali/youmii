import { Calendar, Clock, MapPin } from 'lucide-react'

export interface ReservationCardProps {
  restaurantName: string
  restaurantThumbSrc: string
  date: string
  time: string
  address: string
  status?: string
  cancelLabel?: string
  requestSentLabel?: string
  className?: string
}

export function ReservationCard({
  restaurantName,
  restaurantThumbSrc,
  date,
  time,
  address,
  status = 'Confirmed',
  cancelLabel = 'Cancel Reservation',
  requestSentLabel,
  className = '',
}: ReservationCardProps) {
  return (
    <div
      className={`bg-white border border-grey-border p-2 rounded-2xl shadow-60 overflow-hidden w-[275px]${className ? ` ${className}` : ''}`}
    >
      {/* Restaurant row */}
      <div className="flex gap-2.5 items-start p-2 bg-gradient-to-r from-[#f2f2f2] to-white rounded-lg">
        {/* Thumbnail */}
        <img
          src={restaurantThumbSrc}
          alt={restaurantName}
          width={36}
          height={36}
          className="size-9 rounded-lg object-cover shrink-0"
        />

        {/* Name + meta */}
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <span className="text-sm font-semibold text-body-text leading-tight truncate">
            {restaurantName}
          </span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Calendar className="size-2.5 text-secondary" />
              <span className="text-[11px] text-secondary">{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="size-2.5 text-secondary" />
              <span className="text-[11px] text-secondary">{time}</span>
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div className="flex items-center justify-center px-1.5 py-1 rounded-md bg-[#d7fae1] shrink-0">
          <span className="text-[9px] font-medium text-[#15803d] whitespace-nowrap">
            {status}
          </span>
        </div>
      </div>


      {/* Address */}
      <div className="flex items-center gap-2 px-2 py-2.5">
        <MapPin className="size-3 text-secondary shrink-0" />
        <span className="text-[11px] text-secondary">{address}</span>
      </div>

      {/* Divider */}
      <div className="h-px bg-grey-border mx-3" />

      {/* Actions */}
      <div className="flex flex-col gap-1.5 px-2 pt-2.5">
        <button
          type="button"
          className="w-full flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 focus-visible:outline-2 focus-visible:outline-primary transition-colors"
        >
          {cancelLabel}
        </button>
        {requestSentLabel && (
          <span className="text-[10px] text-secondary leading-tight">
            {requestSentLabel}
          </span>
        )}
      </div>
    </div>
  )
}
