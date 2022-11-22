import axios from 'axios'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { Question } from 'types/data'

type QuestionReducerAction =
  | {
      type: 'UPDATE_QUESTIONS'
      payload: Question[]
    }
  | {
      type: 'ADD_QUESTION'
      payload: Question
    }
  | {
      type: 'REMOVE_QUESTION'
      payload: number
    }

type QuestionContextType = {
  questions: Question[]
  updateQuestions: (questions: Question[]) => void
  addQuestion: (question: Question) => void
  removeQuestion: (questionId: number) => void
}

const QuestionsContext = createContext<QuestionContextType>({
  questions: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateQuestions: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addQuestion: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeQuestion: () => {}
})

const updateQuestions = (questions: Question[]) => {
  return questions
}

const addQuestion = (question: Question, state: Question[]) => {
  return [...state, question]
}

const removeQuestion = (questionId: number, state: Question[]) => {
  const removedItemIndex = state.findIndex((item) => item.id === questionId)
  state.splice(removedItemIndex, 1)
  return [...state]
}

const questionsReducer: React.Reducer<Question[], QuestionReducerAction> = (
  state: Question[],
  action: QuestionReducerAction
) => {
  switch (action.type) {
    case 'UPDATE_QUESTIONS':
      return updateQuestions(action.payload)
    case 'ADD_QUESTION':
      return addQuestion(action.payload, state)
    case 'REMOVE_QUESTION':
      return removeQuestion(action.payload, state)
    default:
      return state
  }
}

export const useQuestionsContext = (): QuestionContextType =>
  useContext<QuestionContextType>(QuestionsContext)

interface QuestionsContextProviderProps {
  children?: React.ReactNode
}

export const QuestionsContextProvider = ({
  children
}: QuestionsContextProviderProps) => {
  const questions: Question[] = []
  const [questionsState, dispatch] = useReducer(questionsReducer, questions)

  const updateQuestions = (questions: Question[]) => {
    dispatch({ type: 'UPDATE_QUESTIONS', payload: questions })
  }

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get('/api/questions')
        console.log(response.data)
        updateQuestions(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getQuestions()
  }, [])

  const addQuestion = (question: Question) => {
    dispatch({ type: 'ADD_QUESTION', payload: question })
  }

  const removeQuestion = (questionId: number) => {
    dispatch({ type: 'REMOVE_QUESTION', payload: questionId })
  }

  return (
    <QuestionsContext.Provider
      value={{
        questions: questionsState,
        updateQuestions,
        addQuestion,
        removeQuestion
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}
