import * as z from 'zod'
import { RegisterSchema } from '@/schema'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateField = RegisterSchema.safeParse(values)

  if (!validateField.success) {
    return { error: 'Invalid data !' }
  }

  return { success: 'Register success !' }
}
