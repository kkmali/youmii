import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id?: string
  name: string
  label?: string
  error?: string
  className?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
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

      <input
        ref={ref}
        id={inputId}
        name={name}
        required={required}
        aria-required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full bg-input-bg border rounded-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-body-text placeholder:text-secondary/60 transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:bg-white${
          error ? ' border-red-400 focus-visible:outline-red-400' : ' border-input-border'
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
