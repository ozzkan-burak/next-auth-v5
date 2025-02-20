'use-client'

import { CardWrapper } from './card-wrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '@/schema'

export const LoginForm = () => {
  return (
    <>
      <CardWrapper
        headerLabel="Welcome Back"
        backButtonHref="/auth/register"
        backButtonLabel="Dont have an Account"
        showSocial
      >
        <div>Login Form</div>
      </CardWrapper>
    </>
  )
}
