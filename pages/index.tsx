import Head from 'next/head'
import Image from 'next/image'
import {Inconsolata} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useRouter} from "next/router";
import Header from "../components/Header";
import BackgroundPolygons from "@/components/BackgroundPolygons";
import Footer from "@/components/Footer";

const inconsolata = Inconsolata({subsets: ['latin']})

export default function Home() {

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

                <div className={styles.ideogramma}>
                    <Image  src="/hkn_ideogramma_blu.svg" alt="HKN PoliTO Logo" width={350} height={350}/>
                </div>

                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>

                <div className={styles.applyCard}>
                    <text className={styles.textAreYouReady}>ARE YOU READY?</text>
                    <text className={styles.textJoinOurChapter}>Join Our Chapter And Become The Next HKNuer</text>
                    <button className={styles.buttonJoinUs}>JOIN US</button>
                </div>

                <Footer/>
            </main>
        </>
    )
}
