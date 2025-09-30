import Image from 'next/image'
import styles from '@/styles/Activities/Events.module.css'
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import RoundButton from "../../components/molecules/RoundButton";
import { useEffect, useState} from "react";
import YearEventsColumn from "@/components/Events/YearEventsColumn";
import ArrowButton from "@/components/molecules/ArrowButton";
import { fetchEvents } from '../api/directus';
import { Event, YearEvents } from "@/components/Events/YearEventsColumn";

export default function Events() {
    const router = useRouter();

    const [pastEvents, setPastEvents] = useState<{ year: string; events: any[] }[]>([]);
    const [latestEvent, setLatestEvent] = useState<Event>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchEvents();
            setPastEvents(data.pastEvents);
            setLatestEvent(data.lastEvent);
        };

        fetchData();
    }, []);

    const [pastEventsIndex, setPastEventsIndex] = useState<number>(0);

    const mod = (n: number, m: number) => {
        return ((n % m) + m) % m;
    }

    const changeEventsPage = (action: number) => {
        setPastEventsIndex((pastEventsIndex) => mod((pastEventsIndex + action), pastEvents.length))
    }

    return (
        <Layout triangles>
            {latestEvent && (
            <div className={styles.latestEventContainer} id="latestEvent">
                <Image className={styles.latestEventImage} src={latestEvent.image || '/Common/hkn_ideogramma_white.svg'} alt={`${latestEvent.title} poster`} width="0" height="0" sizes="100vw"/>
                <div className={styles.latestEventRight}>
                    <text className={styles.latestEventDate}>{latestEvent.date}</text>
                    {/* <text className={styles.latestEventDate}>{latestEvent.time}</text> */}
                    {/*<text className={styles.lateEventLocation}>{latestEvent.location}</text>*/}
                    <text className={styles.latestEventTitle}>{latestEvent.title}</text>
                    {
                        latestEvent.description &&
                        <text className={styles.latestEventDesc}>{latestEvent.description}</text>
                    }
                    {
                        latestEvent.link && new Date() < new Date(latestEvent.date) ? (
                            latestEvent.booking_link && (
                                <RoundButton className={styles.latestEventButton} onClick={() => latestEvent.booking_link && router.push(latestEvent.booking_link)}>
                                    BOOK NOW
                                </RoundButton>
                            )
                        ) : (
                            <RoundButton className={styles.latestEventButton} onClick={() => latestEvent.link && router.push(latestEvent.link)}>
                                WATCH NOW
                            </RoundButton>
                        )
                    }
                </div>
            </div>
            )}

            {pastEvents.length > 0 && (
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
            )}
        </Layout>
    )
}
