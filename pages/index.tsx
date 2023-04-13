import Head from 'next/head'
import Image from 'next/image'
import {Inconsolata} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useRouter} from "next/router";
import Header from "../components/Header";
import BackgroundPolygons from "@/components/BackgroundPolygons";

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
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
                <text className={styles.textRandom}>wefa bfawfywaergrstgthtrtgesagifwegyireg</text>
            </main>
        </>
    )
}
