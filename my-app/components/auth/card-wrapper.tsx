import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { BackButton } from './back-button'
import { Header } from './header'
import SocialLogin from './social-login'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  backButtonHref: string
  backButtonLabel: string
  showSocial?: boolean
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[500px] shadow-lg p-10">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && <SocialLogin />}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  )
}
