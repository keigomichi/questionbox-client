import { useQuestionsContext } from 'contexts/QuestionsContext'
import QuestionCard from './QuestionCard'

const QuestionList = ({ admin }: { admin: boolean }) => {
  const { questions } = useQuestionsContext()

  return (
    <div className="flex flex-col gap-3">
      {questions.map((question) => (
        <QuestionCard question={question} />
      ))}
    </div>
  )
}

export default QuestionList
