import {useRouter} from "next/router";
import styles from "@/styles/components/Activities/StudyGroup.module.css";
import RoundButton from "@/components/molecules/RoundButton";
import Image from "next/image";

export default function StudyGroup({studyGroup, index}: {studyGroup: StudyGroupProps, index: number}) {
    const router = useRouter();

    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <text className={styles.name}>{studyGroup.name}</text>
                <Image className={styles.image} src={studyGroup.imageSrc} alt={studyGroup.name} width="0" height="0" sizes="100vw"/>
            </div>

            <div className={styles.center}>
                <div className={styles.location}>
                    <img className={styles.iconLocation} src="/Activities/StudyGroups/clock.png" alt="Calendar"/>
                    <text className={styles.textLocation}>{studyGroup.date}</text>
                </div>
                <div className={styles.location}>
                    <img className={styles.iconLocation} src="/Activities/StudyGroups/pin.png" alt="Calendar"/>
                    <text className={styles.textLocation}>SALA C</text>
                </div>
                {/*<RoundButton className={styles.buttonTelegram} onClick={() => window.open(studyGroup.link)}>TELEGRAM</RoundButton> TODO add back*/}
            </div>

            <div className={styles.right}>
                <text className={styles.description}>{studyGroup.description}</text>
            </div>
        </div>
    )
}

export interface StudyGroupProps {
    name: string;
    tutor: string;
    description: string;
    imageSrc: string;
    link: string;
    date: string;
}
