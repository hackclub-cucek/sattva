import Head from 'next/head';
import React from 'react'
import ResultBanner from '../components/resultBanner';
import ResultsList from '../components/resultsList';
import { getDataFromSheets } from './api/results';

export default function Results({ data }) {
    return (
        <div>
            <Head>
                <title>SATTVA&apos;22 Results</title>
                <meta name='description' content='Sattva Website' />
                <link rel='icon' href='/favicon.ico' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Plaster&display=swap'
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <ResultBanner />
            <ResultsList data={data} />
        </div>
    )
}


export async function getStaticProps(context) {
    const sheet = await getDataFromSheets();
    return {
        props: {
            data: sheet.slice(1, sheet.length), // remove sheet header
        },
        revalidate: 1, // In seconds
    };
}