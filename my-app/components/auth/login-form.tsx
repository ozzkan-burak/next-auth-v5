'use client'

import { useState, useTransition, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { CardWrapper } from './card-wrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '@/schema'
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
import { login } from '@/action/login'

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, setTransition] = useTransition()

  const router = useRouter()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit', // Sadece submit işleminde validate et
  })

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setError(undefined)
    setSuccess(undefined)

    try {
      const response = await login(data)
      if (response.error) {
        setError(response.error)
      }
      if (response.success) {
        setSuccess(response.success)
        router.push('/settings')
      }
    } catch (error) {
      setError('Beklenmeyen bir hata oluştu')
      console.error(error)
    }
  }

  // Tüm form alanlarını render işlemi başlamadan önce sıfırla
  useEffect(() => {
    setError(undefined)
    setSuccess(undefined)
  }, [])

  return (
    <>
      <CardWrapper
        headerLabel="Welcome Back"
        backButtonHref="/auth/register"
        backButtonLabel="Dont have an Account"
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
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
                render={({ field }) => (
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
                Login
              </Button>
            </div>
          </form>
        </Form>
      </CardWrapper>
    </>
  )
}
