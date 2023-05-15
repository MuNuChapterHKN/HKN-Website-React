import {useRouter} from "next/router";
import styles from "@/styles/components/Events/StudyGroup.module.css";
import RoundButton from "@/components/molecules/RoundButton";
import Image from "next/image";

export default function StudyGroup({studyGroup, index}: {studyGroup: StudyGroupProps, index: number}) {
    const router = useRouter();

    return (
        <div className={index % 2 == 0 ? styles.cardEven : styles.cardOdd}>
            <div className={styles.left}>
                <text className={styles.name}>{studyGroup.name}</text>
                <Image className={styles.image} src={"/Events/StudyGroups/StudyGroup.jpg"} alt={studyGroup.name} width="0" height="0" sizes="100vw"/>
            </div>

            <div className={styles.center}>
                <text className={styles.textLocation}>🕰️ {studyGroup.date}</text>
                <text className={styles.textLocation}>📍SALA C</text>
                <RoundButton className={index % 2 == 0 ? styles.buttonEven : styles.buttonOdd} onClick={() => window.open(studyGroup.link)} textButton="TELEGRAM"/>
            </div>

            <div className={styles.right}>
                <text className={styles.description}>{studyGroup.description}</text>
            </div>
        </div>
    )
}

export interface StudyGroupProps {
    name: string;
    description: string;
    imageSrc: string;
    link: string;
    date: string;
}
