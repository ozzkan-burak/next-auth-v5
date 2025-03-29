import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { UserRole } from '@prisma/client'
import { db } from './lib/db'
import authconfig from './auth.config'
import { getUserById } from './data/users'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      id?: string
      role?: UserRole | string
    } & DefaultSession['user']
  }

  interface User extends DefaultUser {
    role?: UserRole
  }
}

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole
      }
      return session
    },

    async jwt({ token }) {
      if (!token.sub) return token

      const exitingUSer = await getUserById(token.sub)
      if (!exitingUSer) return token

      token.role = exitingUSer.role

      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authconfig,
})
