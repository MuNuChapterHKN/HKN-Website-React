import styles from '@/styles/components/Activities/StudyGroup.module.css';
import RoundButton from '@/components/molecules/RoundButton';

export default function StudyGroup({ studyGroup }: { studyGroup: StudyGroupProps }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <h2 className={styles.name}>{studyGroup.name}</h2>
      </div>
      <div className={styles['card-body']}>
        <div className={styles.center}>
          <span className={styles.description}>{studyGroup.description}</span>
        </div>
        <div className={styles.right}>
          <div className={styles.location}>
            <img
              className={styles.iconLocation}
              src="/Activities/StudyGroups/clock.png"
              alt="Calendar"
            />
            <span className={styles.textLocation}>{studyGroup.date}</span>
          </div>
          <div className={styles.location}>
            <img
              className={styles.iconLocation}
              src="/Activities/StudyGroups/pin.png"
              alt="Calendar"
            />
            <span className={styles.textLocation}>SALA C</span>
          </div>
          <RoundButton
            className={`darkButton ${styles.buttonTelegram}`}
            onClick={() => window.open(studyGroup.link)}
          >
            TELEGRAM
          </RoundButton>
        </div>
      </div>
    </div>
  );
}

export interface StudyGroupProps {
  name: string;
  tutor: string;
  description: string;
  imageSrc: string;
  link: string;
  date: string;
  location: string;
}
