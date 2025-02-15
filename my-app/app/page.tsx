import Image from 'next/image'
import { Button } from './components/ui/button'
import { LoginButton } from './components/auth/login-button'
import { Input } from './components/ui/input'
import { FaUnlock } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="space-y-5 text-center">
        <h1 className=" flex text-6xl font-semibold text-white gap-4">
          {' '}
          <FaUnlock /> Auth
        </h1>
        <p className="text-white text-lg">a simple auth service</p>
        <div className="mt-5">
          <LoginButton>
            <Button variant="secondary" size="lg">
              Login
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
