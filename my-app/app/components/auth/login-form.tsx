import { CardWrapper } from './card-wrapper'
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
