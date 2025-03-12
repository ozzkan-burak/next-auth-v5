import GitHub from 'next-auth/providers/github'
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import LoginPage from './app/auth/login/page'
import { LoginSchema } from './schema'
import { getUserEmail } from './data/users'
import bcrypt from 'bcryptjs'

export default {
  providers: [
    Credentials({
      async authorize(credentials: unknown) {
        const validateFields = LoginSchema.safeParse(credentials)

        if (validateFields.success) {
          const { email, password }: { email: string; password: string } =
            validateFields.data

          const user = await getUserEmail(email)

          if (!user || !user.password) return null

          const passwordmatch = await bcrypt.compare(password, user.password)

          if (passwordmatch) return user

          return null
        }
      },
    }),
  ],
} satisfies NextAuthConfig
