import { db } from '@/lib/db'
import { getVerificationEmail } from '@/data/verification-token'
import { v4 as uuidv4 } from 'uuid'

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour expiration
  const exitingToken = await getVerificationEmail(email)
  if (exitingToken) {
    await db.verificationToken.delete({
      where: { token: exitingToken.verificationToken.token },
    })
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      id: uuidv4(),
      token,
      email,
      expires,
    },
  })
  return verificationToken
}
