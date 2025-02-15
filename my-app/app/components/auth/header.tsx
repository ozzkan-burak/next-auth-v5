import { Title } from './title'

interface HeaderProps {
  label: string
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <>
      <Title titleColor="text-slate-600" />
      <div className="w-full flex text-lg flex-col mt-[20px] items-center justify-center">
        {label}
      </div>
    </>
  )
}
