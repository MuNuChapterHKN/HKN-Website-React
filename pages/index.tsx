import Image from 'next/image'
import styles from '@/styles/Home/Home.module.css'
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import HomeLogo from "../components/Home/HomeLogo";
import RoundButton from "../components/molecules/RoundButton";
import {useEffect, useState} from "react";

export default function Home() {
    const router = useRouter();
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Layout triangles>

            <div className={styles.titleContainer}>
                <div className={styles.titleColumn}>
                    <text className={styles.drivenByPassion}>Driven By Passion</text>
                    <text className={styles.drivenByPassion}>Guided By Values</text>
                    <text className={styles.welcomeTo}>Welcome to our world, we are the Mu Nu Chapter of IEEE-HKN at
                        the Polytechnic University of Turin.
                    </text>
                    <div className={styles.titleButtons}>
                        <RoundButton className={styles.joinUsTitleButton} onClick={() => router.push('/JoinUs')}>
                            JOIN US
                        </RoundButton>
                        <RoundButton className={styles.aboutUsTitleButton} onClick={() => router.push('/AboutUs')}>
                            ABOUT US
                        </RoundButton>
                    </div>
                </div>
                {(windowWidth == 0 || windowWidth > 1100) &&
                    <div className={styles.logoContainer}>
                        <HomeLogo/>
                    </div>
                }
            </div>

            <div className={styles.awardsContainer}>
                <div className={styles.awards}>
                    <img className={styles.outstandingAward} src="/Home/outstanding-2019.png"
                           alt="Outstanding Chapter Award 2019"/>
                    <img className={styles.outstandingAward} src="/Home/outstanding-2020.png"
                           alt="Outstanding Chapter Award 2020"/>
                    <img className={styles.outstandingAward} src="/Home/outstanding-2021.png"
                           alt="Outstanding Chapter Award 2021"/>
                    <img className={styles.outstandingAward} src="/Home/outstanding-2022.png"
                           alt="Outstanding Chapter Award 2022"/>
                </div>
            </div>

            <div className={styles.visionContainer}>
                <div className={styles.visionLeft}>
                    <text className={styles.visionText}>VISION</text>
                    <text className={styles.visionTitle}>Discover Mu Nu Chapter</text>
                    <text className={styles.vision}>Since 2017 we are dedicated to the pursuit of a complementary path
                        to our academic studies which encourages the excellence in the
                        IEEE-designated fields of interest.
                    </text>
                    <div className={styles.visionButtons}>
                        <RoundButton className={styles.peopleVisionButton}
                                     onClick={() => router.push('/AboutUs#vision')}>READ ME</RoundButton>
                        {/*TODO: add link*/}
                        <RoundButton className={styles.galleryVisionButton} onClick={() => router.push('/AboutUs#gallery')}>PHOTO
                            GALLERY</RoundButton>
                    </div>
                </div>
                <img className={styles.visionImage} src="/Home/vision.jpg" alt="Vision"/>
            </div>

            <div className={styles.originsContainer}>
                <Image className={styles.originsImage} src="/Home/origins.jpg" alt="Vision" width="0" height="0"
                       sizes="100vw"/>
                <div className={styles.originsRight}>
                    <text className={styles.originsText}>ORIGINS</text>
                    <text className={styles.originsTitle}>Eta Kappa Nu, IEEE Honor Society</text>
                    <text className={styles.origins}>Founded in 1904, Eta Kappa Nu (IEEE-HKN), the honor society of
                        IEEE, promotes the ideals of Scholarship, Character, and Attitude.
                        Catch a glimpse of our origins.
                    </text>
                    <div className={styles.originsButtons}>
                        <RoundButton className={styles.readMeOriginsButton} onClick={() => router.push('/AboutUs#origin')}>
                            READ ME
                        </RoundButton>
                        {/*TODO: add link*/}
                    </div>
                </div>
            </div>

            <div className={styles.applyCard}>
                <text className={styles.textAreYouReady}>ARE YOU READY?</text>
                <text className={styles.textJoinOurChapter}>Join Our Chapter &</text>
                <text className={styles.textJoinOurChapter}>Become The Next HKNuer</text>
                <RoundButton className={`darkButton ${styles.buttonJoinUs}`} onClick={() => router.push('/JoinUs')}>JOIN
                    US</RoundButton>
            </div>

        </Layout>
    )
}
