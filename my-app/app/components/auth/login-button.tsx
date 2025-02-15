'use client'

import { useRouter } from 'next/navigation'

interface LoginButtonProps {
  children?: React.ReactNode
  mode: 'modal' | 'redirect'
  asChild?: boolean
}

export const LoginButton = ({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) => {
  const router = useRouter()
  const handleClick = () => {
    if (mode === 'redirect') {
      router.push('/auth/login')
    }
  }

  if (mode === 'modal') {
    return <div>LoginButton</div>
  }

  return <span onClick={handleClick}>{children}</span>
}
