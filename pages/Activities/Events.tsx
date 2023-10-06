import Image from 'next/image'
import styles from '@/styles/Activities/Events.module.css'
import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import RoundButton from "../../components/molecules/RoundButton";
import {useEffect, useState} from "react";
import YearEventsColumn, {YearEvents} from "@/components/Events/YearEventsColumn";
import ArrowButton from "@/components/molecules/ArrowButton";
import {latestEvent, pastEvents} from "@/data/Activities/events";

export default function Events() {
    const router = useRouter();
    const [currentPastEvents, setPastEvents] = useState(pastEvents.slice(0, 3));
    const [pastEventsIndex, setPastEventsIndex] = useState<number>(0);

    // this useEffect runs every time the pastEventsIndex changes, it updates the 2 pastEvents array that is displayed
    useEffect(() => {
        if (pastEventsIndex < pastEvents.length - 2) {
            setPastEvents(pastEvents.slice(pastEventsIndex, pastEventsIndex + 2));
        } else {
            setPastEvents(pastEvents.slice(pastEventsIndex, pastEvents.length).concat(pastEvents.slice(0, 2 - (pastEvents.length - pastEventsIndex))));
        }
    }, [pastEventsIndex]);

    const handleRightArrowPastEvents = () => {
        if (pastEventsIndex == pastEvents.length - 1) {
            setPastEventsIndex(0);
        } else {
            setPastEventsIndex(pastEventsIndex + 1)
        }
    }

    // @ts-ignore
    return (
        <Layout triangles>
            <div className={styles.latestEventContainer}>
                <Image className={styles.latestEventImage} src={latestEvent.imageSrc} alt={`${latestEvent.title} poster`} width="0" height="0" sizes="100vw"/>
                <div className={styles.latestEventRight}>
                    <text className={styles.latestEventDate}>{latestEvent.date}</text>
                    <text className={styles.latestEventDate}>{latestEvent.time}</text>
                    {/*<text className={styles.lateEventLocation}>{latestEvent.location}</text>*/}
                    <text className={styles.latestEventTitle}>{latestEvent.title}</text>
                    {
                        latestEvent.description &&
                        <text className={styles.latestEventDesc}>{latestEvent.description}</text>
                    }
                    {
                        latestEvent.link &&
                        <RoundButton style={{color: "black"}} className={styles.latestEventButton} onClick={() => router.push(latestEvent.link)}>
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
                    {currentPastEvents.map((yearEvents, index) => (
                        <YearEventsColumn key={index} yearEvents={yearEvents}/>
                    ))}
                    {currentPastEvents.length > 1 &&
                        <ArrowButton right className={styles.pastEventsButton} onClick={handleRightArrowPastEvents}/>
                    }
                </div>
            </div>
        </Layout>
    )
}
