import Image from 'next/image'
import styles from '@/styles/EventsExternal.module.css'
import {useRouter} from "next/router";
import Layout from "./Layout";
import HomeLogo from "../components/Home/HomeLogo";
import RoundButton from "../components/molecules/RoundButton";
import {PolygonProps} from "@/components/Polygon";
import {useEffect, useState} from "react";
import ProfessionalCard from "@/components/Recognitions/ProfessionalCard";
import YearEventsColumn, {YearEvents} from "@/components/Events/YearEventsColumn";

const latestEvent = {
    imageSrc: "/Events/EventsExternal/latestEvent.png",
    title: "New event - Title Long",
    date: "20 MAY 2021",
    description: "haifahbdf ahbhbfoahbdhbadhfbahdbfah bdfhabfhasbchabo hdb afhabfhbad hbaohbfahbd ohbdahbdhbahakf kabkjfkabfkjab kfjbkjbakjbfka bkbakbfka",
}

const pastEvents : YearEvents[] = [
    {
        year: "2022",
        events: [
            {
                title: "Hackaton Carduino & ConnectiCity",
                date: "21 MAY 2022",
                imageSrc: "/Events/EventsExternal/event_2022.png",
            },
            {
                title: "Hackaton Carduino & ConnectiCity",
                date: "22 MAY 2022",
                imageSrc: "/Events/EventsExternal/event_2022.png",
            },
            {
                title: "Hackaton Carduino & ConnectiCity",
                date: "23 MAY 2022",
                imageSrc: "/Events/EventsExternal/event_2022.png",
            }
        ],
    },
    {
        year: "2021",
        events: [
            {
                title: "Block Chain - (not) a bitcoin event",
                date: "11 DECEMBER 2021",
                imageSrc: "/Events/EventsExternal/event_2021.png",
            },
            {
                title: "Block Chain - (not) a bitcoin event",
                date: "11 DECEMBER 2021",
                imageSrc: "/Events/EventsExternal/event_2021.png",
            },
            {
                title: "Block Chain - (not) a bitcoin event",
                date: "11 DECEMBER 2021",
                imageSrc: "/Events/EventsExternal/event_2021.png",
            },
        ],
    },
    {
        year: "2020",
        events: [
            {
                title: "Block Chain - (not) a bitcoin event",
                date: "11 DECEMBER 2020",
                imageSrc: "/Events/EventsExternal/event_2021.png",
            },
            {
                title: "Block Chain - (not) a bitcoin event",
                date: "11 DECEMBER 2020",
                imageSrc: "/Events/EventsExternal/event_2021.png",
            },
        ],
    }
];

const polygons: PolygonProps[] = [

];

export default function EventsExternal() {
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
        <Layout polygons={polygons}>
            <div className={styles.latestEventContainer}>
                <Image className={styles.latestEventImage} src={latestEvent.imageSrc} alt="Latest Event"  width="0" height="0" sizes="100vw"/>
                <div className={styles.latestEventRight}>
                    <text className={styles.latestEventDate}>{latestEvent.date}</text>
                    <text className={styles.latestEventTitle}>{latestEvent.title}</text>
                    <text className={styles.latestEventDesc}>{latestEvent.description}</text>
                    {/* TODO: Add link to event page */}
                    <RoundButton style={{color: "black"}} className={styles.latestEventButton} onClick={() => router.push('/404')} textButton={"READ MORE"}/>
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
                        <button className={styles.pastEventsButton} onClick={handleRightArrowPastEvents}>
                            <Image src="/right-arrow.svg" alt="Right Arrow" width={35} height={35}/>
                        </button>
                    }
                </div>
            </div>
        </Layout>
    )
}
