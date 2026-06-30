import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'

const contactFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required').min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export interface ContactFormProps {
  className?: string
  onSubmitSuccess?: (data: ContactFormValues) => void
}

export function ContactForm({
  className = '',
  onSubmitSuccess,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const onSubmit = (data: ContactFormValues) => {
    // In a real app this would POST to an API
    onSubmitSuccess?.(data)
  }

  return (
    <div className={`flex flex-col gap-6 w-full${className ? ` ${className}` : ''}`}>
      <h2 className="text-xl sm:text-2xl font-semibold text-body-text">
        Let&apos;s connect
      </h2>

      <div className="bg-white border border-grey-border rounded-2xl px-4 py-4 sm:px-5 sm:py-5">
        {isSubmitSuccessful ? (
          <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="size-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-body-text">Message sent!</h3>
            <p className="text-sm text-secondary max-w-xs">
              Thanks for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
            <p className="text-base font-semibold text-body-text">Send a Message</p>

            <Input
              label="Full Name"
              type="text"
              required
              placeholder="Jane Doe"
              error={errors.fullName?.message}
              {...register('fullName')}
            />

            <Input
              label="Email Address"
              type="email"
              required
              placeholder="example@org.com"
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 000-0000"
              error={errors.phone?.message}
              {...register('phone')}
            />

            <Textarea
              label="Message"
              rows={4}
              required
              placeholder="Tell us how Youmii can help you..."
              error={errors.message?.message}
              {...register('message')}
            />

            <Button type="submit" variant="primary" fullWidth>
              Send Message <ArrowRight className="size-5" />
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
