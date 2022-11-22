import { useForm } from 'react-hook-form'

export type SigninFormData = {
  username: string
  password: string
}

interface SigninFormProps {
  onSignin?: (username: string, password: string) => void
}

const SigninForm = ({ onSignin }: SigninFormProps) => {
  // React Hook Formの使用
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SigninFormData>()
  const onSubmit = (data: SigninFormData) => {
    const { username, password } = data

    onSignin && onSignin(username, password)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 md:space-y-6"
      action="#"
    >
      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-[#111827]"
        >
          ユーザー名
        </label>
        <input
          {...register('username', { required: true })}
          type="text"
          name="username"
          id="username"
          className="block w-full rounded-lg border border-[#d1d5db] bg-[#f9fafb] p-2.5 text-[#111827] focus:border-[#2563eb] focus:ring-[#2563eb] sm:text-sm"
        />
        {errors.username && (
          <span className="text-error">*ユーザ名は必須です</span>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-[#111827]"
        >
          パスワード
        </label>
        <input
          {...register('password', { required: true })}
          type="password"
          name="password"
          id="password"
          className="block w-full rounded-lg border border-[#d1d5db] bg-[#f9fafb] p-2.5 text-[#111827] focus:border-[#2563eb] focus:ring-[#2563eb] sm:text-sm"
        />
        {errors.password && (
          <span className="text-error">*パスワードは必須です</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-[#2563eb] px-5 py-2.5 text-center text-sm font-medium text-[#ffffff] hover:bg-[#1d4ed8] focus:outline-none focus:ring-4 focus:ring-[#93c5fd]"
      >
        ログイン
      </button>
    </form>
  )
}

export default SigninForm
