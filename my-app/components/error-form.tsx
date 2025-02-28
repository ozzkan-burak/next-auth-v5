import { MdError } from 'react-icons/md'

interface ErrorFormProps {
  message?: string
}

export const ErrorForm = ({ message }: ErrorFormProps) => {
  if (!message) return null

  return (
    <div className="bg-red-500 rounded-xl p-4 text-center justify-center items-center text-white flex gap-2">
      <MdError size="18" />
      {message}
    </div>
  )
}
