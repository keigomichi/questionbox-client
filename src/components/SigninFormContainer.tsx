import SigninForm from 'components/SigninForm'
import { useAuthContext } from 'contexts/AuthContext'

interface SigninFormContainerProps {
  onSignin: (error?: Error) => void
}

const SigninFormContainer = ({ onSignin }: SigninFormContainerProps) => {
  const { signin } = useAuthContext()
  const handleSignin = async (username: string, password: string) => {
    try {
      await signin(username, password)
      onSignin && onSignin()
    } catch (err: unknown) {
      if (err instanceof Error) {
        window.alert(err.message)
        onSignin && onSignin(err)
      }
    }
  }
  return <SigninForm onSignin={handleSignin} />
}

export default SigninFormContainer
