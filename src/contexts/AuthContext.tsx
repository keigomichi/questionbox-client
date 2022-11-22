import axios from 'axios'
import { createContext, useContext, useEffect } from 'react'
import { User } from 'types/data'

type AuthContextType = {
  authUser?: User
  isLoading: boolean
  signin: (username: string, password: string) => Promise<void>
  signout: () => Promise<void>
}

type AuthContextProviderProps = {
  authUser?: User
}

export type SigninParams = {
  username: string
  password: string
}

const AuthContext = createContext<AuthContextType>({
  authUser: undefined,
  isLoading: false,
  signin: async () => Promise.resolve(),
  signout: async () => Promise.resolve()
})

export const useAuthContext = (): AuthContextType =>
  useContext<AuthContextType>(AuthContext)

export const AuthContextProvider = ({
  authUser,
  children
}: React.PropsWithChildren<AuthContextProviderProps>) => {
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get('/api/whoami')
        console.log(response.data)
        authUser = response.data
      } catch (error) {
        console.error(error)
      }
    }
    getUserInfo()
  }, [])

  const isLoading = !authUser

  const signinInternal = async (username: string, password: string) => {
    await signin({ username, password })
  }

  // サインアウト
  const signoutInternal = async () => {
    await signout()
  }

  const signin = async (params: SigninParams): Promise<User | undefined> => {
    try {
      const res = await axios.post('/api/login', params)
      return res.data()
    } catch (error) {
      console.error(error)
    }
  }

  const signout = async (): Promise<void> => {
    console.log('signout')
    // try {
    //   const res = await axios.post('/api/signout', JSON.stringify(params))
    // } catch (error) {
    //   console.error(error)
    //   throw error
    // }
  }

  return (
    <AuthContext.Provider
      value={{
        authUser,
        isLoading,
        signin: signinInternal,
        signout: signoutInternal
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
