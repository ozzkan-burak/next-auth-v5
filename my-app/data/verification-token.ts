import { db } from '@/lib/db'

export const getVerificationToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: {
        token,
      },
    })
    if (!verificationToken) {
      return null
    }
    const { expires } = verificationToken
    const isExpired = new Date() > expires
    if (isExpired) {
      await db.verificationToken.delete({
        where: {
          token,
        },
      })
      return null
    }
    return {
      verificationToken,
      expires,
    }
  } catch (error) {
    console.error('Error fetching verification token:', error)
    return null
  }
}

export const getVerificationEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    })
    if (!verificationToken) {
      return null
    }

    return {
      verificationToken,
    }
  } catch (error) {
    console.error('Error fetching verification token:', error)
    return null
  }
}
