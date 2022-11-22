import { Question } from 'types/data'

const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <div className="flex cursor-pointer flex-col gap-2 rounded-xl bg-surface-5 p-5 transition hover:bg-surface-12 focus:bg-primary-container focus:text-on-primary-container active:bg-primary-container active:text-on-primary-container">
      <h3 className="text-xl font-semibold">{question.content}</h3>
      {question.answer && <p className="">{question.answer}</p>}
    </div>
  )
}

export default QuestionCard
