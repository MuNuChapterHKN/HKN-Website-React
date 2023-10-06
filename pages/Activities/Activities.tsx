import Image from 'next/image'
import styles from '@/styles/Activities/Activities.module.scss'
import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import RoundButton from "../../components/molecules/RoundButton";
export default function External() {
    const router = useRouter();

    // @ts-ignore
    return (
        <Layout darkHeader>

            <div className={styles.latestActivitiesBackground}>
                <div className={styles.latestActivities}>
                    <div className={styles.latestActivities__left}>
                        <div  className={styles.latestActivities__left__title}>
                            Latest Activities
                        </div>

                        <div className={styles.latestActivities__left__card}>
                            <div className={styles.latestActivities__left__card__imageContainer}>
                                <img className={styles.latestActivities__left__card__image} src={'/Activities/Activities/Latest.png'} alt={'latest'}/>
                            </div>

                            <div className={styles.latestActivities__left__card__text}>
                                <div className={styles.latestActivities__left__card__events}>EVENTS</div>
                                <div className={styles.latestActivities__left__card__title}>New Event - Title</div>
                                <div className={styles.latestActivities__left__card__topic}>topic - dd/mm/yyyy</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.latestActivities__right}>
                        <div className={styles.latestActivities__right__masterclass}>
                            <div className={styles.latestActivities__right__card__imageContainer}>
                                <img className={styles.latestActivities__right__card__image} src={'/Activities/Activities/Activities.png'} alt={'latest'}/>
                            </div>

                            <div className={styles.latestActivities__right__card__text}>
                                <div className={styles.latestActivities__right__card__activities}>MASTERCLASS</div>
                                <div className={styles.latestActivities__right__card__title}>Masterclass - Title</div>
                                <div className={styles.latestActivities__right__card__topic}>topic - dd/mm/yyyy</div>
                            </div>
                        </div>

                        <div className={styles.latestActivities__right__studyGroup}>
                            <div className={styles.latestActivities__right__card__imageContainer}>
                                <img className={styles.latestActivities__right__card__image} src={'/Activities/Activities/Activities.png'} alt={'latest'}/>
                            </div>

                            <div className={styles.latestActivities__right__card__text}>
                                <div className={styles.latestActivities__right__card__activities}>STUDY GROUP</div>
                                <div className={styles.latestActivities__right__card__title}>Tutoring - Title</div>
                                <div className={styles.latestActivities__right__card__topic}>topic - dd/mm/yyyy</div>
                            </div>
                        </div>

                        <div className={styles.latestActivities__right__events}>
                            <div className={styles.latestActivities__right__card__imageContainer}>
                                <img className={styles.latestActivities__right__card__image} src={'/Activities/Activities/Activities.png'} alt={'latest'}/>
                            </div>

                            <div className={styles.latestActivities__right__card__text}>
                                <div className={styles.latestActivities__right__card__activities}>EVENTS</div>
                                <div className={styles.latestActivities__right__card__title}>Event - Title</div>
                                <div className={styles.latestActivities__right__card__topic}>topic - dd/mm/yyyy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.allActivities}>
                <div className={styles.allActivities__background}/>

                <div className={styles.allActivities__content}>
                    <div className={styles.allActivities__events}>
                        events
                    </div>
                   <div className={styles.allActivities__title}>
                        Discover All Our Activities
                   </div>

                    <div className={styles.allActivities__columns}>
                        <div className={styles.allActivities__columns__left}>
                            <div className={styles.allActivities__group1}>
                                <div className={styles.allActivities__group__events}>events</div>
                                <div className={styles.allActivities__group__title}>Events</div>
                                <div className={styles.allActivities__group__text}>Our events are thought for anyone who likes talking, debating, learning and discovering</div>

                                <div className={styles.allActivities__group1__imgcont1}>
                                    <img className={styles.allActivities__group__img} src={'/Activities/Events/mentalWellnessDigitalWellBeing.png'} alt={'Event 3'}/>
                                </div>
                                <div className={styles.allActivities__group1__imgcont2}>
                                    <img className={styles.allActivities__group__img} src={'/Activities/Events/event_2022.png'} alt={'Event 2'} style={{objectPosition:"75% 100%"}}/>
                                </div>
                                <div className={styles.allActivities__group1__imgcont3}>
                                    <img className={styles.allActivities__group__img} src={'/Activities/Events/quantumQuest.png'} alt={'Event 1'}/>
                                </div>

                                <div className={styles.allActivities__group1__discover}>
                                    Discover
                                    <RoundButton className={styles.allActivities__group__button} onClick={() => router.push('/Activities/Events') }>events</RoundButton>
                                </div>
                            </div>
                            <div className={styles.allActivities__group2}>
                                <div className={styles.allActivities__group__events}>events</div>
                                <div className={styles.allActivities__group__title}>Masterclass</div>
                                <div className={styles.allActivities__group__text}>Our experts will provide you advices and tips that will help you improving your skills & enriching your CV</div>

                                <div className={styles.allActivities__group2__imgcont1}>
                                    <img className={styles.allActivities__group__img} src={'/AboutUs/MentalWellness.jpg'} alt={'discover1'}/>
                                </div>
                                <div className={styles.allActivities__group2__imgcont2}>
                                    <img className={styles.allActivities__group__img} src={'/AboutUs/Hexakappathlon.jpg'} alt={'discover2'} style={{objectPosition:"75% 100%"}}/>
                                </div>
                                <div className={styles.allActivities__group2__imgcont3}>
                                    <img className={styles.allActivities__group__img} src={'/AboutUs/FoundersDay.jpg'} alt={'discover1'}/>
                                </div>

                                <div className={styles.allActivities__group2__discover}>
                                    Discover
                                    <RoundButton className={styles.allActivities__group__button} onClick={() => router.push('/Activities/Masterclasses') }>masterclass</RoundButton>
                                </div>
                            </div>
                        </div>

                        <div className={styles.allActivities__columns__right}>

                            <div className={styles.allActivities__group3}>
                                <div className={styles.allActivities__group__events}>events</div>
                                <div className={styles.allActivities__group__title}>Study Groups</div>
                                <div className={styles.allActivities__group__text}>HKN members and phd students will help you with whatever concept you might be struggling with</div>

                                <div className={styles.allActivities__group3__imgcont1}>
                                    <img className={styles.allActivities__group__img} src={'/Activities/Activities/Discover_2.jpeg'} alt={'discover1'}/>
                                </div>
                                <div className={styles.allActivities__group3__imgcont2}>
                                    <img className={styles.allActivities__group__img} src={'/AboutUs/FormazioneInternaReply.jpeg'} alt={'discover2'} style={{objectPosition:"75% 100%"}}/>
                                </div>
                                <div className={styles.allActivities__group3__imgcont3}>
                                    <img className={styles.allActivities__group__img} src={'/Activities/Activities/Discover_3.jpeg'} alt={'discover1'}/>
                                </div>

                                <div className={styles.allActivities__group3__discover}>
                                    Discover
                                    <RoundButton className={styles.allActivities__group__button} onClick={() => router.push('/Activities/StudyGroups') }>study groups</RoundButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
