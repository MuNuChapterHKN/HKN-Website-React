import Image from 'next/image'
import styles from '@/styles/Home/Home.module.css'
import activities_styles from '@/styles/Activities/Activities.module.scss'
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import HomeLogo from "../components/Home/HomeLogo";
import RoundButton from "../components/molecules/RoundButton";
import { useEffect, useState } from "react";
import { FeatureFlag, fetchFeatureFlags, fetchHomeAwards } from './api/directus';
import { T, useTranslate } from '@tolgee/react';


export default function Home() {
    const router = useRouter();
    const [windowWidth, setWindowWidth] = useState(0);

    const [awards, setAwards] = useState<string[]>([]);
    const { t } = useTranslate(); 

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchHomeAwards();
            setAwards(data);
        };

        fetchData();
    }, []);

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
                    <text className={styles.drivenByPassion}><T keyName="home.title.dbp" /></text>
                    <text className={styles.drivenByPassion}><T keyName="home.title.gbv" /></text>
                    <text className={styles.welcomeTo}>
                        <T keyName="home.title.welcome" />
                    </text>
                    <div className={styles.titleButtons}>
                        <RoundButton className={styles.joinUsTitleButton} onClick={() => router.push('/JoinUs')}>
                            <T keyName="common.join_us" />
                        </RoundButton>
                        <RoundButton className={styles.aboutUsTitleButton} onClick={() => router.push('/AboutUs')}>
                            <T keyName="common.about_us" />
                        </RoundButton>
                    </div>
                </div>
                <div className={styles.logoContainer}>
                    <HomeLogo />
                </div>
            </div>
            <div className={styles.awardsContainer}>
                <div className={styles.awards}>
                    {[...awards].reverse().map((award, index) => (
                        <img
                            key={index}
                            className={styles.outstandingAward}
                            src={award}
                            alt={t('home.awards.alt_prefix', { number: awards.length - index })}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.visionContainer}>
                <div className={styles.visionLeft}>
                    <text className={styles.visionText}><T keyName="home.vision.kicker" /></text>
                    <text className={styles.visionTitle}><T keyName="home.vision.title" /></text>
                    <text className={styles.vision}>
                        <T keyName="home.vision.description" />
                    </text>
                    <div className={styles.visionButtons}>
                        <RoundButton className={styles.peopleVisionButton}
                            onClick={() => router.push('/AboutUs#vision')}>
                            <T keyName="common.read_me" />
                        </RoundButton>
                        {/*TODO: add link*/}
                        <RoundButton className={styles.galleryVisionButton} onClick={() => router.push('/AboutUs#gallery')}>
                            <T keyName="home.vision.photo_gallery_button" />
                        </RoundButton>
                    </div>
                </div>
                <img className={styles.visionImage} src="/Home/vision.jpg" alt={t('home.vision.alt')} />
            </div>

            <div className={styles.originsContainer}>
                <Image className={styles.originsImage} src="/Home/origins.jpg" alt={t('home.origins.alt')} width="0" height="0" sizes="100vw" />
                <div className={styles.originsRight}>
                    <text className={styles.originsText}><T keyName="home.origins.kicker" /></text>
                    <text className={styles.originsTitle}><T keyName="home.origins.title" /></text>
                    <text className={styles.origins}>
                        <T keyName="home.origins.description" />
                    </text>
                    <div className={styles.originsButtons}>
                        <RoundButton className={styles.readMeOriginsButton} onClick={() => router.push('/AboutUs#origin')}>
                            <T keyName="common.read_me" />
                        </RoundButton>
                        {/*TODO: add link*/}
                    </div>
                </div>
                <Image className={styles.originsImageMobile} src="/Home/origins.jpg" alt={t('home.origins.alt')} width="0" height="0" sizes="100vw" />
            </div>

            {/* <div className={styles.projectsContainer}>
                <text className={styles.projectsText}><T keyName="home.projects.kicker" /></text>
                <text className={styles.projectsTitle}><T keyName="home.projects.title" /></text>
                <text className={styles.projectsSubtitle}><T keyName="common.coming_soon" /></text>
                <div className={styles.projectsCards}>
                    <div className={styles.projectsLeft}>
                        <div className={styles.projectsImageClip}>
                            <img className={styles.projectsPicture} src="/Home/Projects/Sirius_vedere.jpg"
                                alt={t('home.projects.alt')} />
                        </div>
                        <text className={styles.projectTitle}>
                            <T keyName="home.projects.project_1_title" />
                        </text>
                        <text className={styles.project}>
                            <T keyName="home.projects.project_1_description" />
                        </text>
                        {TODO: add link}
                    </div>
                    <div className={styles.projectsCenter}>
                        <div className={styles.projectsImageClip}>
                            <img className={styles.projectsPicture} src="/Home/Projects/Vivere_lassociazione.png"
                                alt={t('home.projects.alt')} />
                        </div>
                        <text className={styles.projectTitle}>
                            <T keyName="home.projects.project_2_title" />
                        </text>
                        <text className={styles.project}>
                            <T keyName="home.projects.project_2_description" />
                        </text>
                        {TODO: add link}
                    </div>
                    <div className={styles.projectsRight}>
                        <div className={styles.projectsImageClip}>
                            <img className={styles.projectsPicture} src="/Home/Projects/Poli_covid.png" alt={t('home.projects.alt')} />
                        </div>
                        <text className={styles.projectTitle}>
                            <T keyName="home.projects.project_3_title" />
                        </text>
                        <text className={styles.project}>
                            <T keyName="home.projects.project_3_description" />
                        </text>
                        {TODO: add link}
                    </div>
                </div>
            </div> */}


            <div className={activities_styles.allActivities}>
                <div className={activities_styles.allActivities__background} />

                <div className={activities_styles.allActivities__content}>
                    <div className={activities_styles.allActivities__events}>
                        <T keyName="home.activities.placeholder" />
                    </div>
                    <div className={activities_styles.allActivities__title}>
                        <T keyName="home.activities.title" />
                    </div>

                    <div className={activities_styles.allActivities__columns}>
                        <div className={activities_styles.allActivities__columns__left}>
                            <div className={activities_styles.allActivities__group1}>
                                <div className={activities_styles.allActivities__group__events}><T keyName="home.activities.group1_kicker" /></div>
                                <div className={activities_styles.allActivities__group__title}><T keyName="home.activities.group1_title" /></div>
                                <div className={activities_styles.allActivities__group__text}>
                                    <T keyName="home.activities.group1_description" />
                                </div>

                                <div className={activities_styles.allActivities__group1__imgcont1}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Events/mentalWellnessDigitalWellBeing.png'} alt={t('home.activities.event_3_alt')} />
                                </div>
                                <div className={activities_styles.allActivities__group1__imgcont2}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Events/event_2022.png'} alt={t('home.activities.event_2_alt')} style={{ objectPosition: "75% 100%" }} />
                                </div>
                                <div className={activities_styles.allActivities__group1__imgcont3}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Events/quantumQuest.png'} alt={t('home.activities.event_1_alt')} />
                                </div>

                                <div className={activities_styles.allActivities__group1__discover}>
                                    <T keyName="common.discover" />
                                    <RoundButton className={activities_styles.allActivities__group__button} onClick={() => router.push('/Activities/Events')}>
                                        <T keyName="home.activities.group1_button" />
                                    </RoundButton>
                                </div>
                            </div>
                            <div className={activities_styles.allActivities__group2}>
                                <div className={activities_styles.allActivities__group__events}><T keyName="home.activities.group2_kicker" /></div>
                                <div className={activities_styles.allActivities__group__title}><T keyName="home.activities.group2_title" /></div>
                                <div className={activities_styles.allActivities__group__text}>
                                    <T keyName="home.activities.group2_description" />
                                </div>

                                <div className={activities_styles.allActivities__group2__imgcont1}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/MentalWellness.jpg'} alt={t('home.activities.discover_1_alt')} />
                                </div>
                                <div className={activities_styles.allActivities__group2__imgcont2}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/Hexakappathlon.jpg'} alt={t('home.activities.discover_2_alt')} style={{ objectPosition: "75% 100%" }} />
                                </div>
                                <div className={activities_styles.allActivities__group2__imgcont3}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/FoundersDay.jpg'} alt={t('home.activities.discover_1_alt')} />
                                </div>

                                <div className={activities_styles.allActivities__group2__discover}>
                                    <T keyName="common.discover" />
                                    {/*<RoundButton className={activities_styles.allActivities__group__button} onClick={() => router.push('/Activities/Masterclasses')}>Masterclasses</RoundButton>*/}
                                    <RoundButton className={activities_styles.allActivities__group__button} onClick={() => { }}>
                                        <T keyName="common.coming_soon" />
                                    </RoundButton>
                                </div>
                            </div>
                        </div>

                        <div className={activities_styles.allActivities__columns__right}>

                            <div className={activities_styles.allActivities__group3}>
                                <div className={activities_styles.allActivities__group__events}><T keyName="home.activities.group3_kicker" /></div>
                                <div className={activities_styles.allActivities__group__title}><T keyName="home.activities.group3_title" /></div>
                                <div className={activities_styles.allActivities__group__text}>
                                    <T keyName="home.activities.group3_description" />
                                </div>

                                <div className={activities_styles.allActivities__group3__imgcont1}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/Discover_2.jpeg'} alt={t('home.activities.discover_1_alt')} />
                                </div>
                                <div className={activities_styles.allActivities__group3__imgcont2}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/FormazioneInternaReply.jpeg'} alt={t('home.activities.discover_2_alt')} style={{ objectPosition: "75% 100%" }} />
                                </div>
                                <div className={activities_styles.allActivities__group3__imgcont3}>
                                    <img className={activities_styles.allActivities__group__img} src={'/Activities/Activities/Discover_3.jpeg'} alt={t('home.activities.discover_1_alt')} />
                                </div>

                                <div className={activities_styles.allActivities__group3__discover}>
                                    <T keyName="common.discover" />
                                    <RoundButton className={activities_styles.allActivities__group__button} onClick={() => router.push('/Activities/StudyGroups')}>
                                        <T keyName="home.activities.group3_button" />
                                    </RoundButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.applyCard}>
                <text className={styles.textAreYouReady}><T keyName="home.apply.kicker" /></text>
                <text className={styles.textJoinOurChapter}><T keyName="home.apply.title_1" /></text>
                <text className={styles.textJoinOurChapter}><T keyName="home.apply.title_2" /></text>
                <RoundButton className={`darkButton ${styles.buttonJoinUs}`} onClick={() => router.push('/JoinUs')}>
                    <T keyName="common.join_us" />
                </RoundButton>
            </div>

        </Layout>
    )
}