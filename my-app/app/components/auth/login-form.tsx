'use client'

import { useState, useTransition } from 'react'
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

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, setTransation] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data)
  }

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
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} placeholder="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <ErrorForm message=""></ErrorForm>
              <SuccessForm message=""></SuccessForm>

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
