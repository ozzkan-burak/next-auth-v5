import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEMail = async (email: string, token: string) => {
  const confirmAdressLink = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-email?token=${token}`

  try {
    const { data, error } = await resend.emails.send({
      from: 'Change Password <onboarding@resend.dev>',
      to: email,
      subject: 'Confirm your mail adress',
      html: `<p>Click <a href="${confirmAdressLink}">here</a> confirm to email</p>`,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
