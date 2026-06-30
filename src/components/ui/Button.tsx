import { LoaderCircle } from 'lucide-react'
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

function Spinner({ className = '' }: { className?: string }) {
  return (
    <LoaderCircle  className={`animate-spin ${className}`} />
  )
}

const mergeClasses = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ')

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 ease-in-out hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60 cursor-pointer select-none'

const variantClasses = {
  primary: 'text-white bg-(image:--primary-gr)',
  outline:
    'text-body-text bg-white border border-grey-border hover:border-primary hover:text-primary',
}

const sizeClasses = {
  sm: 'px-4 py-1.5 text-sm font-semibold',
  md: 'py-2 lg:py-2.5 px-5 text-sm md:text-base font-semibold',
  lg: 'px-8 py-3.5 text-base md:text-lg font-semibold',
}

export type ButtonVariant = 'primary' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  label?: string
  role?: 'button' | 'link'
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  url?: string | null
  className?: string
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<any>) => void
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'role' | 'onClick' | 'type'> & { role?: 'button' }

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'role' | 'onClick' | 'type'> & { role: 'link' }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({
  label,
  role = 'button',
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  url = null,
  onClick,
  children,
  ...rest
}: ButtonProps) {
  const variantClass = variantClasses[variant] ?? variantClasses.primary
  const sizeClass = sizeClasses[size] ?? sizeClasses.md
  const widthClass = fullWidth ? 'w-full' : ''
  const isLink = role === 'link'
  const buttonDisabled = disabled || loading

  const disabledClass = buttonDisabled ? 'pointer-events-none opacity-60' : ''

  const buttonClasses = mergeClasses(
    baseClasses,
    variantClass,
    sizeClass,
    widthClass,
    disabledClass,
    className
  )

  const content = (
    <span className="relative z-2 inline-flex items-center justify-center gap-1.5" data-t={label}>
      {loading ? (
        <Spinner className="h-5 w-5 text-current" />
      ) : (
        children ?? label
      )}
    </span>
  )

  if (isLink) {
    const { ...anchorProps } = rest as Record<string, any>
    return (
      <a
        href={url || undefined}
        className={buttonClasses}
        onClick={onClick}
        aria-disabled={buttonDisabled || undefined}
        {...anchorProps}
      >
        {content}
      </a>
    )
  }

  const { ...buttonProps } = rest as Record<string, any>
  return (
    <button
      type={type}
      disabled={buttonDisabled}
      className={buttonClasses}
      onClick={onClick}
      {...buttonProps}
    >
      {content}
    </button>
  )
}
