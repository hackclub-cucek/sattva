import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sattva&apos;22</title>
        <meta name="description" content="Sattva Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-2xl font-bold text-center">Sattva&apos;22</h1>
      </main>
    </div>
  )
}
