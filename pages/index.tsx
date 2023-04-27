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
                        <text className={styles.drivenByPassion}>Driven By Passion</text>
                        <text className={styles.drivenByPassion}>Guided By Values</text>
                        <text className={styles.welcomeTo}>Welcome to our world, we are the Mu Nu Chapter of IEEE-HKN at the Polytechnic University of Turin.</text>
                        <div className={styles.titleButtons}>
                            <RoundButton className={styles.joinUsTitleButton} onClick={() => router.push('/JoinUs')} text={"JOIN US"}/>
                            <RoundButton className={styles.aboutUsTitleButton} onClick={() => router.push('/AboutUs')} text={"ABOUT US"}/>
                        </div>
                    </div>
                    <div className={styles.logoContainer}>
                        <HomeLogo/>
                    </div>
                </div>
            </div>

            <div className={styles.awardsContainer}>
                <div className={styles.awards}>
                <Image className={styles.outstandingAward} src="/outstanding_awards/outstanding-2019.png" alt="HKN PoliTO Logo" width={200} height={200}/>
                <Image className={styles.outstandingAward} src="/outstanding_awards/outstanding-2020.png" alt="HKN PoliTO Logo" width={200} height={200}/>
                <Image className={styles.outstandingAward} src="/outstanding_awards/outstanding-2021.png" alt="HKN PoliTO Logo" width={200} height={200}/>
                <Image className={styles.outstandingAward} src="/outstanding_awards/outstanding-2022.png" alt="HKN PoliTO Logo" width={200} height={200}/>
                </div>
            </div>

            <div className={styles.visionContainer}>
                <div className={styles.visionLeft}>
                    <text className={styles.visionText}>VISION</text>
                    <text className={styles.visionTitle}>Discover Mu Nu Chapter</text>
                    <text className={styles.vision}>Since 2017 we are dedicated to encouraging excellence in the IEEE-designated fields of interest, continuing to reinvent ourselves to meet the needs of our members and society overall</text>
                    <div className={styles.visionButtons}>
                        <RoundButton className={styles.peopleVisionButton} onClick={() => router.push('/JoinUs')} text={"PEOPLE"}/>
                        <RoundButton className={styles.galleryVisionButton} onClick={() => router.push('/AboutUs')} text={"PHOTO GALLERY"}/>
                    </div>
                </div>
            </div>

            <div className={styles.originsContainer}>
                <div className={styles.originsLeft}>

                </div>
                <div className={styles.originsRight}>
                    <text className={styles.originsText}>ORIGINS</text>
                    <text className={styles.originsTitle}>Eta Kappa Nu, IEEE Honor Society</text>
                    <text className={styles.origins}>Founded in 1904, Eta Kappa Nu (IEEE-HKN), the honor society of IEEE, promotes the ideals of Scholarship, Character and Attitude. Catch a glimpse to our origins.</text>
                    <div className={styles.originsButtons}>
                        <RoundButton className={styles.readMeOriginsButton} onClick={() => router.push('/JoinUs')} text={"READ ME"}/>
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
