import { FaCheckCircle } from 'react-icons/fa'

interface SuccessFormProps {
  message?: string
}

export const SuccessForm = ({ message }: SuccessFormProps) => {
  if (!message) return null

  return (
    <div className="bg-green-500 rounded-xl p-4 text-center justify-center items-center text-white flex gap-2">
      <FaCheckCircle size="18" />
      {message}
    </div>
  )
}
