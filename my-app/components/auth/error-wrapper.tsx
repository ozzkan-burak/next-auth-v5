import { CardWrapper } from './card-wrapper'
import { MdDangerous } from 'react-icons/md'

const ErrorWrapper = () => {
  return (
    <CardWrapper
      headerLabel="Ooopps something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-100 flex justify-center text-red-700">
        <MdDangerous size={100} />
      </div>
      <p className="mt-3 text-center">
        Sorry, an error occurred. Please try again later.
      </p>
    </CardWrapper>
  )
}

export default ErrorWrapper
