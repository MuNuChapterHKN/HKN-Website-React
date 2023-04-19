import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {useRouter} from "next/router";
import Header from "../components/Header";
import BackgroundPolygons from "@/components/BackgroundPolygons";
import Footer from "@/components/Footer";

export default function Events() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>HKN PoliTO</title>
                <meta name="description" content="HKN PoliTo | Mu Nu Chapter of IEEE-HKN"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/hkn_logo_blu_vector.svg"/>
            </Head>
            <main className={styles.main}>

                <BackgroundPolygons/>

                <Header/>


                <Footer/>
            </main>
        </>
    )
}
