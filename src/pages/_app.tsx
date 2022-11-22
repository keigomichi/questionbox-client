import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QuestionsContextProvider } from 'contexts/QuestionsContext'
import { AuthContextProvider } from 'contexts/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <QuestionsContextProvider>
        <Component {...pageProps} />
      </QuestionsContextProvider>
    </AuthContextProvider>
  )
}
