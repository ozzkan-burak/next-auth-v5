import { FaUnlock } from 'react-icons/fa'

interface TitleProps {
  titleColor: string
}

export const Title = ({ titleColor }: TitleProps) => {
  return (
    <h1
      className={`flex justify-center text-6xl font-semibold gap-4 ${titleColor}`}
    >
      <FaUnlock /> Auth
    </h1>
  )
}
