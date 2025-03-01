'use client'

import { useState, useTransition, useEffect } from 'react'
import * as z from 'zod'
import { CardWrapper } from './card-wrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { ErrorForm } from '../error-form'
import { SuccessForm } from '../success-form'
import { Button } from '../ui/button'
import { RegisterSchema } from '@/schema'
import { register } from '@/action/register'

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, setTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setError(undefined)
    setSuccess(undefined)

    setTransition(() => {
      register(data)
        .then((response) => {
          if (response.error) {
            setError(response.error)
          }
          if (response.success) {
            setSuccess(response.success)
          }
        })
        .catch((error) => {
          setError('An unexpected error occurred')
          console.error(error)
        })
    })
  }

  useEffect(() => {
    // setState çağrısını burada yapın
    setError(undefined)
    setSuccess(undefined)
  }, [])

  return (
    <>
      <CardWrapper
        headerLabel="Create An Account"
        backButtonHref="/auth/register"
        backButtonLabel="Already have an Account"
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <FormField
                control={form.control}
                name="name"
                disabled={isPending}
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Name</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} placeholder="name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                disabled={isPending}
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} placeholder="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                disabled={isPending}
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <ErrorForm message={error} />
              <SuccessForm message={success} />

              <Button type="submit" className="w-full mt-3">
                Register
              </Button>
            </div>
          </form>
        </Form>
      </CardWrapper>
    </>
  )
}

export default RegisterForm
