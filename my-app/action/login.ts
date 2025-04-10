'use server'

import * as z from 'zod'
import { LoginSchema } from '@/schema'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { getUserEmail } from '@/data/users'
import { sendVerificationEMail } from '@/lib/mail'
import { generateVerificationToken } from '@/lib/token'

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

  if (!exitingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(email)

    if (!verificationToken) {
      return { error: 'Something went wrong !' }
    }
    // Send verification email
    const sendEmail = await sendVerificationEMail(
      verificationToken.email,
      verificationToken.token,
    )

    return { error: 'Email not verified !', sendEmail }
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
  return { error: null }
}
