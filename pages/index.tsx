import Image from 'next/image'
import styles from '@/styles/Home/Home.module.css'
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import HomeLogo from "../components/Home/HomeLogo";
import RoundButton from "../components/molecules/RoundButton";
import {useEffect, useState} from "react";
import activities_styles from '@/styles/Activities/Activities.module.scss'



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

    // @ts-ignore
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

            <div className={styles.projectsContainer}>
                <text className={styles.projectsText}>NEWS</text>
                <text className={styles.projectsTitle}>Our Latest Projects</text>
                <text className={styles.projectsSubtitle}>COMING SOON</text>
                <div className={styles.projectsCards}>
                    <div className={styles.projectsLeft}>
                        <div className={styles.projectsImageClip}>
                            <img className={styles.projectsPicture} src="/Home/Projects/Sirius_vedere.jpg"
                                 alt="project"/>
                        </div>
                        <text className={styles.projectTitle}>
                            Sirius: Seeing the Future Through the Eyes of the Present
                        </text>
                        <text className={styles.project}>For the first time, it was the HKN students who paid a visit to
                            a company: SIRIUS (Sirius | Home). For the new members, this was their first experience of
                            internal training, but the real novelty involved the existing members: being able to
                            personally visit a company turned out to be an...
                        </text>
                        {/*TODO: add link*/}
                    </div>
                    <div className={styles.projectsCenter}>
                        <div className={styles.projectsImageClip}>
                            <img className={styles.projectsPicture} src="/Home/Projects/Vivere_lassociazione.png"
                                 alt="project"/>
                        </div>
                        <text className={styles.projectTitle}>Living the Association Online: A Beginner's Guide
                        </text>
                        <text className={styles.project}>Initially, the idea was born from loneliness. Staying locked at
                            home and not seeing anyone due to the lockdown was a condition that, while it might have
                            seemed exhilarating and almost heroic at first, had become devastating over time. The
                            thought of becoming a part of an honor society...
                        </text>
                        {/*TODO: add link*/}
                    </div>
                    <div className={styles.projectsRight}>
                        <div className={styles.projectsImageClip}>
                            <img className={styles.projectsPicture} src="/Home/Projects/Poli_covid.png" alt="project"/>
                        </div>
                        <text className={styles.projectTitle}>POLITO, HKN, and Covid-19: A Reflection</text>
                        <text className={styles.project}>Seventeen o'clock on a quiet Sunday in March. Silent because
                            the streets are deserted, and only our thoughts resonate louder than ever. In these cases,
                            all that's left is to give them shape by projecting them into much broader worlds than the
                            walls that confine us in these...
                        </text>
                        {/*TODO: add link*/}
                    </div>
                </div>
            </div>


            <div className={activities_styles.allActivities}>
                <div className={activities_styles.allActivities__background}/>

                <div className={activities_styles.allActivities__content}>
                    <div className={activities_styles.allActivities__events}>
                        events
                    </div>
                    <div className={activities_styles.allActivities__title}>
                        Discover All Our Activities
                    </div>

                    <div className={activities_styles.allActivities__columns}>
                        <div className={activities_styles.allActivities__columns__left}>
                            <div className={activities_styles.allActivities__group1}>
                                <div className={activities_styles.allActivities__group__events}>events</div>
                                <div className={activities_styles.allActivities__group__title}>Events</div>
                                <div className={activities_styles.allActivities__group__text}>Our events are thought for anyone who
                                                                                   likes talking, debating, learning and
                                                                                   discovering
                                </div>

                                <div className={activities_styles.allActivities__group1__imgcont1}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Events/mentalWellnessDigitalWellBeing.png'} alt={'Event 3'}/>
                                </div>
                                <div className={activities_styles.allActivities__group1__imgcont2}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Events/event_2022.png'} alt={'Event 2'} style={{objectPosition: "75% 100%"}}/>
                                </div>
                                <div className={activities_styles.allActivities__group1__imgcont3}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Events/quantumQuest.png'} alt={'Event 1'}/>
                                </div>

                                <div className={activities_styles.allActivities__group1__discover}>
                                    Discover
                                    <RoundButton className={activities_styles.allActivities__group__button} onClick={() => router.push('/Activities/Events')}>events</RoundButton>
                                </div>
                            </div>
                            <div className={activities_styles.allActivities__group2}>
                                <div className={activities_styles.allActivities__group__events}>events</div>
                                <div className={activities_styles.allActivities__group__title}>Masterclass</div>
                                <div className={activities_styles.allActivities__group__text}>Our experts will provide you advices
                                                                                   and tips that will help you improving
                                                                                   your skills & enriching your CV
                                </div>

                                <div className={activities_styles.allActivities__group2__imgcont1}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/MentalWellness.jpg'} alt={'discover1'}/>
                                </div>
                                <div className={activities_styles.allActivities__group2__imgcont2}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/Hexakappathlon.jpg'} alt={'discover2'} style={{objectPosition: "75% 100%"}}/>
                                </div>
                                <div className={activities_styles.allActivities__group2__imgcont3}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/FoundersDay.jpg'} alt={'discover1'}/>
                                </div>

                                <div className={activities_styles.allActivities__group2__discover}>
                                    Discover
                                    {/*<RoundButton className={activities_styles.allActivities__group__button} onClick={() => router.push('/Activities/Masterclasses')}>Masterclasses</RoundButton>*/}
                                    <RoundButton className={activities_styles.allActivities__group__button} onClick={() => {}}>COMING SOON</RoundButton>
                                </div>
                            </div>
                        </div>

                        <div className={activities_styles.allActivities__columns__right}>

                            <div className={activities_styles.allActivities__group3}>
                                <div className={activities_styles.allActivities__group__events}>events</div>
                                <div className={activities_styles.allActivities__group__title}>Study Groups</div>
                                <div className={activities_styles.allActivities__group__text}>HKN members and PhD students will
                                                                                   help you with whatever concept you
                                                                                   might be struggling with
                                </div>

                                <div className={activities_styles.allActivities__group3__imgcont1}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/Discover_2.jpeg'} alt={'discover1'}/>
                                </div>
                                <div className={activities_styles.allActivities__group3__imgcont2}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/FormazioneInternaReply.jpeg'} alt={'discover2'} style={{objectPosition: "75% 100%"}}/>
                                </div>
                                <div className={activities_styles.allActivities__group3__imgcont3}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/Discover_3.jpeg'} alt={'discover1'}/>
                                </div>

                                <div className={activities_styles.allActivities__group3__discover}>
                                    Discover
                                    <RoundButton className={activities_styles.allActivities__group__button} onClick={() => router.push('/Activities/StudyGroups')}>study
                                                                                                                                                        groups</RoundButton>
                                </div>
                            </div>
                        </div>
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
