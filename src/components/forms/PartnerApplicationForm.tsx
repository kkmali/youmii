import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'

const partnerFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  restaurantName: z.string().min(1, 'Restaurant name is required'),
  website: z.string().min(1, 'Website is required').url('Please enter a valid URL'),
  message: z.string().optional(),
})

type PartnerFormValues = z.infer<typeof partnerFormSchema>

export interface PartnerApplicationFormProps {
  className?: string
  onSubmitSuccess?: (data: PartnerFormValues) => void
}

export function PartnerApplicationForm({
  className = '',
  onSubmitSuccess,
}: PartnerApplicationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      restaurantName: '',
      website: '',
      message: '',
    },
  })

  const onSubmit = (data: PartnerFormValues) => {
    // In a real app this would POST to an API
    onSubmitSuccess?.(data)
  }

  return (
    <div
      className={`bg-white border border-light-grey-border rounded-2xl px-5 py-6 sm:px-6 md:px-8 md:py-8 w-full lg:w-[60%] ${className ? ` ${className}` : ''}`}
    >
      {isSubmitSuccessful ? (
        <div className="flex flex-col items-center justify-center gap-4 py-0 lg:py-10 text-center">
          <div className="size-11 md:size-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="size-5 md:size-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-body-text">Application submitted!</h3>
          <p className="text-sm text-secondary max-w-xs">
            Thank you! Our team will review your details and get back to you within 2 business
            days.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
          {/* Section label */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-body-text">Tell us about your restaurant</h3>
            <p className="text-sm text-secondary">Personalise your experience in 60 seconds</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-secondary uppercase tracking-wide">
              Restaurant Details
            </span>
            <div className="h-px bg-grey-border" />
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Your Full name"
              type="text"
              required
              placeholder="First and last name"
              error={errors.fullName?.message}
              {...register('fullName')}
            />
            <Input
              label="Business email"
              type="email"
              required
              placeholder="you@yourrestaurant.ch"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Restaurant name"
              type="text"
              required
              placeholder="e.g. Restaurant Rosengarten"
              error={errors.restaurantName?.message}
              {...register('restaurantName')}
            />
            <Input
              label="Restaurant website"
              type="url"
              required
              placeholder="https://yourrestaurant.ch"
              error={errors.website?.message}
              {...register('website')}
            />
          </div>

          {/* Message */}
          <Textarea
            label="Message (optional)"
            rows={4}
            placeholder="Tell us anything else — current booking system, questions, special notes…"
            error={errors.message?.message}
            {...register('message')}
          />

          <Button type="submit" variant="primary" fullWidth>
            Submit application <ArrowRight className="size-5" />
          </Button>
        </form>
      )}
    </div>
  )
}
