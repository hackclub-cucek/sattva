/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import OffStageEvents from '../components/offStageEvents'
import FeeDetails from '../components/feeDetails'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Leaderboard from '../components/leaderboard'
import LiveEvents from '../components/liveEvents'
import { google } from 'googleapis';

export default function Home({rows}) {
  return (
    <div className="">
      <Head>
        <title>SATTVA&apos;22</title>
        <meta name="description" content="Sattva Website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
        <link href="https://fonts.googleapis.com/css2?family=Plaster&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="">
        <Banner />
        <Leaderboard data={rows} />
        {/* <LiveEvents /> */}
        <FeeDetails />
        {/* <OffStageEvents /> */}
        <Footer />
      </main>
    </div>
  )
  }

  export async function getServerSideProps() {
    const auth = await google.auth.getClient({scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});
    const sheets = google.sheets({ version: 'v4', auth});

    const range = `data!A2:B8`
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range
    })

    const rows = response.data.values;
    return {
      props: {
        rows,
      },
    }
    
}

