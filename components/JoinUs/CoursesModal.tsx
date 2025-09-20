import styles from '../../styles/People/People.module.scss';
import styles2 from '../../styles/JoinUs/CoursesModal.module.css';
import { coursesByDegree } from "@/data/JoinUs/Courses";
import { Degree } from './SubmissionForm';
import { useState } from 'react';

const degrees = ["Bachelor", "Master"] as const;

export function CoursesModal({ visible, disablePopUp }: { visible: Boolean, disablePopUp: () => void }) {
  const [degree, setDegree] = useState<Degree>(degrees[0]);
  const handleClosePupUp = () => disablePopUp();

  return degree && visible && (
    <div
      className={styles2.popUpBackground}
      onClick={handleClosePupUp}
      style={{ visibility: visible ? 'visible' : 'hidden' }}
    >
      <div className={styles.teamPopUp} onClick={(e) => e.stopPropagation()}>
        <div className={styles2.coursesHeader}>
          <h2 className={styles.teamPopUp__Title}>Eligible Courses</h2>
          <text className={styles.teamPopUp__Description}>The following degrees programs are eligible for applying to join our chapter:</text>
        </div>

        <div className={styles2.coursesContainer}>
          <div className={styles2.coursesPills}>
            {degrees.map((d) => (
              <div onClick={() => setDegree(d)} className={`${styles2.coursesPill} ${d == degree ? styles2.selected : ''}`}>
                {d}
              </div>
            ))}
          </div>
          <ul>
            {coursesByDegree[degree].map((course) => (
              <li>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
