import TextareaAutosize from '@mui/base/TextareaAutosize'
import axios from 'axios'
import { useQuestionsContext } from 'contexts/QuestionsContext'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  content: string
}

const QuestionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>()

  const { updateQuestions } = useQuestionsContext()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post('/api/send_question', data)
      reset()
      updateQuestions(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-3 flex min-h-[56px] w-full items-center rounded-[28px] bg-surface-variant p-2"
    >
      <div className="w-full py-1.5">
        <TextareaAutosize
          maxRows={3}
          placeholder="匿名で keigomichi に質問を送る"
          className="block h-[44px] w-full resize-none border-none pl-4 text-on-surface outline-none placeholder:text-on-surface-variant"
          {...register('content', { required: true })}
        />
      </div>
      <button
        type="submit"
        className="flex min-h-[36px] min-w-[36px] items-center justify-center rounded-full transition hover:bg-[#C5C6D0] focus:bg-[#AAABB4]"
      >
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  )
}

export default QuestionForm
