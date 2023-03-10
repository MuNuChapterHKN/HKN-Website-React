import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>HKN PoliTO</title>
        <meta name="description" content="HKN PoliTo | Mu Nu Chapter of IEEE-HKN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hkn_logo_blu_vector.svg" />
      </Head>
      <main className={styles.main}>

        <div className={styles.grid}>
            <text className={styles.title}>HKN PoliTO</text>
        </div>
      </main>
    </>
  )
}
