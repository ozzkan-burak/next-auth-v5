import Image from 'next/image'
import { Button } from './components/ui/button'
import { LoginButton } from './components/auth/login-button'
import { Input } from './components/ui/input'
import { Title } from './components/auth/title'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="space-y-5 text-center">
        <Title titleColor="text-white" />
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
