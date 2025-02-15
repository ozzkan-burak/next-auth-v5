import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { BackButton } from './back-button'
import { Header } from './header'

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
    <Card className="w-[500px] shadow-lg">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  )
}
