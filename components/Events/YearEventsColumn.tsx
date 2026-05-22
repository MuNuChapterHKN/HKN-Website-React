import Image from 'next/image';
import styles from '@/styles/components/Activities/YearEventsColumn.module.css';

export default function YearEventsColumn({ yearEvents }: { yearEvents: YearEvents }) {
  return (
    <div className={styles.yearEventsColumn}>
      <div className={styles.yearCard}>
        <span className={styles.year}>{yearEvents.year}</span>
      </div>
      {yearEvents.events.map((event, index) => (
        <>
          <div className={styles.eventRow} key={index}>
            {index % 2 === 0 && (
              <>
                <a href={event.link} className={styles.eventLink} rel="noopener" target="_blank">
                  {event.image ? (
                    <Image
                      className={styles.eventImage}
                      src={event.image}
                      alt={`${event.title} poster`}
                      width="0"
                      height="0"
                      sizes="100vw"
                    />
                  ) : (
                    <Image
                      className={styles.eventImage}
                      src="/Common/hkn_ideogramma_white.svg"
                      alt={`${event.title} placeholder`}
                      width="0"
                      height="0"
                      sizes="100vw"
                      loading="lazy"
                    />
                  )}
                </a>
                <div className={styles.divider} />
                <div className={styles.eventCard}>
                  <span className={styles.eventDate}>{event.date}</span>
                  <span className={styles.eventLocation}>{event.location}</span>
                  <span className={styles.eventTitle}>{event.title}</span>
                </div>
              </>
            )}

            {index % 2 !== 0 && (
              <>
                <div className={styles.eventCard}>
                  <span style={{ textAlign: 'right' }} className={styles.eventDate}>
                    {event.date}
                  </span>
                  <span style={{ textAlign: 'right' }} className={styles.eventLocation}>
                    {event.location}
                  </span>
                  <span style={{ textAlign: 'right' }} className={styles.eventTitle}>
                    {event.title}
                  </span>
                </div>
                <div className={styles.divider} />

                <a href={event.link} className={styles.eventLink} rel="noopener" target="_blank">
                  {event.image ? (
                    <Image
                      className={styles.eventImage}
                      src={event.image}
                      alt={`${event.title} poster`}
                      width="0"
                      height="0"
                      sizes="100vw"
                    />
                  ) : (
                    <Image
                      className={styles.eventImage}
                      src="/Common/hkn_ideogramma_white.svg"
                      alt={`${event.title} placeholder`}
                      width="0"
                      height="0"
                      sizes="100vw"
                      loading="lazy"
                    />
                  )}
                </a>
              </>
            )}
          </div>
          <div className={styles.dividerContainer}>
            <div className={styles.horizontalDivider} />
          </div>
        </>
      ))}
      <div
        style={
          yearEvents.events.length % 2 == 0
            ? { left: 'calc(30% + 10px)' }
            : { right: 'calc(30% + 10px)' }
        }
        className={styles.dividerEnd}
      ></div>
    </div>
  );
}

export interface YearEvents {
  year: string;
  events: Event[];
}

export interface Event {
  title: string;
  date: string;
  location: string;
  description?: string;
  image?: string;
  link?: string;
  booking_link?: string;
}
