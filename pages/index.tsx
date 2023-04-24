import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {useRouter} from "next/router";
import Layout from "./Layout";
import HomeLogo from "../components/HomeLogo";
import RoundButton from "../components/molecules/RoundButton";

export default function Home() {
    const router = useRouter();

    // @ts-ignore
    return (
        <Layout>

            <div className={styles.titleFlexContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleColumn}>
                        <text className={styles.driveByPassion}>Driven By Passion</text>
                        <text className={styles.driveByPassion}>Guided By Values</text>
                        <text className={styles.welcomeTo}>Welcome to our world, we are the Mu Nu Chapter of IEEE-HKN at the Polytechnic University of Turin.</text>
                        <div className={styles.titleButtons}>
                            <RoundButton onClick={() => router.push('/JoinUs')} text={"JOIN US"} className={styles.joinUsTitleButton}/>
                            <RoundButton onClick={() => router.push('/AboutUs')} text={"ABOUT US"} className={styles.aboutUsTitleButton}/>
                        </div>
                    </div>
                    <div className={styles.logoContainer}>
                        <HomeLogo/>
                    </div>
                </div>
            </div>
                {/*<div className={styles.ideogrammaContainer}>

                    <HomeLogo/>
                    <div className={styles.ideogramma}>
                        <Image  src="/hkn_ideogramma_blu.svg" alt="HKN PoliTO Logo" width={350} height={350}/>
                    </div>
                </div>*/}

                <div className={styles.applyCard}>
                    <text className={styles.textAreYouReady}>ARE YOU READY?</text>
                    <text className={styles.textJoinOurChapter}>Join Our Chapter And</text>
                    <text className={styles.textJoinOurChapter}>Become The Next HKNuer</text>
                    <RoundButton className={styles.buttonJoinUs} text={"JOIN US"} onClick={() => router.push('/JoinUs')}/>
                </div>

        </Layout>
    )
}
