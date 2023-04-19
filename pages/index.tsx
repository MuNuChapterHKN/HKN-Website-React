import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {useRouter} from "next/router";
import Layout from "./Layout";

export default function Home() {
    const router = useRouter();

    return (
        <Layout>

            <div className={styles.ideogrammaContainer}>
                <div className={styles.ideogramma}>
                    <Image  src="/hkn_ideogramma_blu.svg" alt="HKN PoliTO Logo" width={350} height={350}/>
                </div>
            </div>

            <div className={styles.applyCard}>
                <text className={styles.textAreYouReady}>ARE YOU READY?</text>
                <text className={styles.textJoinOurChapter}>Join Our Chapter And</text>
                <text className={styles.textJoinOurChapter}>Become The Next HKNuer</text>
                <button className={styles.buttonJoinUs} onClick={() => router.push('/Apply')}>JOIN US</button>
            </div>

        </Layout>
    )
}
