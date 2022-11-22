import Head from 'next/head'
import Form from 'components/QuestionForm'
import QuestionList from 'components/QuestionList'
import Section from 'components/Section'

export default function Home() {
  return (
    <div>
      <Head>
        <title>質問箱</title>
        <meta name="description" content="匿名でkeigomichiに質問を送る" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section
        title="質問箱"
        action={{ href: '/signin', text: '管理者用ログイン' }}
      >
        <Form />
        <QuestionList admin={false} />
      </Section>
    </div>
  )
}
