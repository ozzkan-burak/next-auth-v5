import { Title } from './title'

interface HeaderProps {
  label: string
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <>
      <Title titleColor="text-slate-600" />
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        {label}
      </div>
    </>
  )
}
