import Image from 'next/image'
import styles from '@/styles/Activities/Events.module.css'
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import RoundButton from "../../components/molecules/RoundButton";
import { useState } from "react";
import YearEventsColumn from "@/components/Events/YearEventsColumn";
import ArrowButton from "@/components/molecules/ArrowButton";
import { latestEvent, pastEvents } from "@/data/Activities/events";

export default function Events() {
    const router = useRouter();
    const [pastEventsIndex, setPastEventsIndex] = useState<number>(0);

    const mod = (n: number, m: number) => {
        return ((n % m) + m) % m;
    }

    const changeEventsPage = (action: number) => {
        setPastEventsIndex((pastEventsIndex) => mod((pastEventsIndex + action), pastEvents.length))
    }

    return (
        <Layout triangles>
            <div className={styles.latestEventContainer} id={latestEvent.id ? latestEvent.id : "latestEvent"}>
                <Image
                    className={styles.latestEventImage}
                    src={latestEvent.imageSrc}
                    alt={`${latestEvent.title} poster`}
                    layout="responsive"
                    width={800}
                    height={450}
                />
                <div className={styles.latestEventRight}>
                    <text className={styles.latestEventDate}>{latestEvent.date}</text>
                    <text className={styles.latestEventDate}>{latestEvent.time}</text>
                    {/* <text className={styles.lateEventLocation}>{latestEvent.location}</text> */}
                    <text className={styles.latestEventTitle}>{latestEvent.title}</text>
                    {
                        latestEvent.description &&
                        <text className={styles.latestEventDesc}>{latestEvent.description}</text>
                    }
                    {
                        latestEvent.link &&
                        <RoundButton className={styles.latestEventButton} onClick={() => router.push(latestEvent.link)}>
                            DISCOVER MORE
                        </RoundButton>
                    }
                </div>
            </div>

            <div className={styles.pastContainer}>
                <text className={styles.pastText}>PAST YEARS</text>
                <text className={styles.pastTitle}>Not Just</text>
                <text className={styles.pastTitle}>Conferences</text>
                <div className={styles.pastEvents}>
                <YearEventsColumn yearEvents={pastEvents[pastEventsIndex]}/>
                    {pastEventsIndex > 0 && <ArrowButton left className={styles.pastEventsButton_1} color="#F2F2F2" onClick={() => changeEventsPage(-1)}/>}
                    {pastEventsIndex < pastEvents.length-1 && <ArrowButton right className={styles.pastEventsButton_2} color="#F2F2F2" onClick={() => changeEventsPage(+1)}/>}
                </div>
            </div>
        </Layout>
    )
}
