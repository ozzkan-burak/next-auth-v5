import { Button } from '../ui/button'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const SocialLogin = () => {
  const handleSocialLogin = (provider: 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="flex items-center w-full gap-9 pr-6 pl-6">
      <Button
        size="lg"
        className="w-full"
        variant="google"
        //onClick={() => console.log('Google')}
      >
        <FaGoogle size={22} className="text-xl" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="github"
        onClick={() => handleSocialLogin('github')}
      >
        <FaGithub size={22} className="text-xl" />
      </Button>
    </div>
  )
}

export default SocialLogin
