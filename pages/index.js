/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import CountDown from '../components/countDown'
import OffStageEvents from '../components/offStageEvents'
import FeeDetails from '../components/feeDetails'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sattva&apos;22</title>
        <meta name="description" content="Sattva Website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className="">
        <CountDown />
        <FeeDetails />
        <OffStageEvents />
      </main>
    </div>
  )
}
