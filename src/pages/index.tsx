import Head from 'next/head'
import Form from 'components/Form'

export default function Home() {
  return (
    <div>
      <Head>
        <title>質問箱</title>
        <meta name="description" content="匿名でkeigomichiに質問を送る" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form />
    </div>
  )
}
