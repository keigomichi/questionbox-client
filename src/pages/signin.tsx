import SigninFormContainer from 'components/SigninFormContainer'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SigninPage: NextPage = () => {
  const router = useRouter()
  const handleSignin = async (err?: Error) => {
    if (!err) {
      const redurectTo = (router.query['redirect_to'] as string) ?? '/'
      console.log('Redirecting', redurectTo)
      await router.push(redurectTo)
    }
  }

  return (
    <section className="h-full w-full bg-[#f9fafb]">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-[#ffffff] shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#111827] md:text-2xl">
              管理者用ログイン
            </h1>
            <SigninFormContainer onSignin={handleSignin} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SigninPage
