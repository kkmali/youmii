import { forwardRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  id?: string
  name: string
  label?: string
  error?: string
  className?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { id, name, label, error, required = false, className = '', ...rest },
  ref,
) {
  const inputId = id ?? name

  return (
    <div className={`flex flex-col gap-1.5${className ? ` ${className}` : ''}`}>
      {label && (
        <label htmlFor={inputId} className="text-xs font-medium text-body-text">
          {label}
          {required && (
            <span className="text-red-400 ml-0.5" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <textarea
        ref={ref}
        id={inputId}
        name={name}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full bg-input-bg rounded-2xl px-4 py-3 text-sm text-body-text placeholder:text-secondary/60 transition-colors resize-none focus-visible:outline-2 focus-visible:bg-white${
          error
            ? ' border border-red-400 focus-visible:outline-red-400'
            : ' border border-input-border focus-visible:outline-primary'
        }`}
        {...rest}
      />

      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
})
