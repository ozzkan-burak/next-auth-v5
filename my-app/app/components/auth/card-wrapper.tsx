interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  backButton: boolean
  showSocial?: boolean
}

const CardWrapper = ({
  children,
  headerLabel,
  backButton,
  showSocial,
}: CardWrapperProps) => {
  return <div>CardWrapper</div>
}

export default CardWrapper
