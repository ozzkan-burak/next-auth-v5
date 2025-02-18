import { Button } from '../ui/button'
import { FaGoogle, FaGithub } from 'react-icons/fa'

export const SocialLogin = () => {
  return (
    <div className="flex items-center w-full gap-9 padding-[20px]">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        //onClick={() => console.log('Google')}
      >
        <FaGoogle className="text-xl" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        //onClick={() => console.log('Google')}
      >
        <FaGithub className="text-xl" />
      </Button>
    </div>
  )
}

export default SocialLogin
