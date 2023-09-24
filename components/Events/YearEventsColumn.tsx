import Image from 'next/image'
import styles from '@/styles/components/Activities/YearEventsColumn.module.css'
import {useRouter} from "next/router";

export default function YearEventsColumn({yearEvents}: { yearEvents: YearEvents }) {
    const router = useRouter();

    return (
        <div className={styles.yearEventsColumn}>
            <div className={styles.yearCard}>
                <text className={styles.year}>{yearEvents.year}</text>
            </div>
            {yearEvents.events.map((event, index) => (
                <>
                    <div className={styles.eventRow} key={index}>
                        {index % 2 === 0 && (
                            <>
                                <Image className={styles.eventImage} src={event.imageSrc} alt="Latest Event" width="0"
                                       height="0" sizes="100vw"/>
                                <div className={styles.divider}/>
                                <div className={styles.eventCard}>
                                    <text className={styles.eventDate}>{event.date}</text>
                                    <text className={styles.eventTitle}>{event.title}</text>
                                </div>
                            </>
                        )}

                        {index % 2 !== 0 && (
                            <>
                                <div className={styles.eventCard}>
                                    <text style={{textAlign: "right"}} className={styles.eventDate}>{event.date}</text>
                                    <text style={{textAlign: "right"}} className={styles.eventTitle}>{event.title}</text>
                                </div>
                                <div className={styles.divider}/>

                                <Image className={styles.eventImage} src={event.imageSrc} alt="Latest Event" width="0"
                                       height="0" sizes="100vw"/>

                            </>
                        )}
                    </div>
                    <div className={styles.dividerContainer}>
                        <div className={styles.horizontalDivider}/>
                    </div>
                </>
            ))}
            <div style={yearEvents.events.length % 2 == 0 ? {left: "calc(26% + 10px)"} : {right: "calc(26% + 10px)"}} className={styles.dividerEnd}></div>
        </div>
    )
}

export interface YearEvents {
    year: string,
    events: Event[]
}

export interface Event {
    title: string,
    date: string,
    imageSrc: string,
}
