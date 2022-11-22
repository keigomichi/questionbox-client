import QuestionList from 'components/QuestionList'
import Section from 'components/Section'

const Admin = () => {
  return (
    <>
      <Section title="管理者用" action={{ href: '/', text: 'ログアウト' }}>
        <QuestionList admin={true} />
      </Section>
    </>
  )
}

export default Admin
