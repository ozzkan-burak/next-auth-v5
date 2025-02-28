'use server'

import * as z from 'zod'
import { RegisterSchema } from '@/schema'
import { db } from '@/lib/db'
import bcrypt from 'bcrypt'
import { getUserEmail } from '@/data/users'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  try {
    const validateField = RegisterSchema.safeParse(values)

    if (!validateField.success) {
      return { error: 'Invalid data !' }
    }

    const { email, password, name } = validateField.data

    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await getUserEmail(email)

    if (existingUser) {
      return { error: 'email is already exist' }
    }

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return { success: 'Register success !' }
  } catch (error) {
    console.error('Error in register function:', error)
    return { error: 'An unexpected error occurred' }
  }
}
