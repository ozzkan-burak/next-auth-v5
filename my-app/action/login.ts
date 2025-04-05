'use server'

import * as z from 'zod'
import { LoginSchema } from '@/schema'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { getUserEmail } from '@/data/users'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateField = LoginSchema.safeParse(values)

  if (!validateField.success) {
    return { error: 'Invalid data !' }
  }

  const { email, password } = validateField.data

  const exitingUser = await getUserEmail(email)

  if (!exitingUser || !exitingUser.password || !exitingUser.email) {
    return { error: 'Invalid credentials !' }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials !' }
        default:
          return { error: 'Something went wrong !' }
      }
    }
  }

  return { success: 'Login success !' }
}
