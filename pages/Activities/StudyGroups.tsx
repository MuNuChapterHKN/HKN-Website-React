import {useRouter} from "next/router";
import styles from "@/styles/Activities/StudyGroups.module.css";
import Layout from "../../components/Layout";
import StudyGroup, {StudyGroupProps} from "@/components/Events/StudyGroup";

const studyGroups: StudyGroupProps[] = [
    {
        name: "Basi di Dati",
        link: "https://t.me/+eIVLBksF6spmODVk",
        description: "In un mondo pieno di dati a destra e a manca, i database fanno il lavoro sprorco per noi, gestendo enormi quantità di informazioni in modo brillante ed efficiente.",
        imageSrc: "/Activities/Activities/Activities.png",
        tutor: "",
        date: "MONDAY 18:00",
    },
    {
        name: "Probabilità e Statistica",
        link: "https://t.me/+zrZAnLyIcCs3ZTU0",
        description: "Con l'unione di queste due materie, possiamo capire la realtà e prevederne l'andamento, così da prendere decisione super-informate basate su dati concreti e senza sprecare tempo sul campo.",
        imageSrc: "/Activities/StudyGroups/StudyGroup.jpg",
        tutor: "",
        date: "WEDNESDAY 18:00",
    },
    {
        name: "Algoritmi e Strutture Dati",
        link: "https://t.me/+DTLQCM7NsYs1MTk0",
        description: "Il grande scoglio della triennale in informatica! E' sicuramente uno degli esami più difficili ma anche uno dei più importanti!",
        imageSrc: "/Activities/Activities/Activities.png",
        tutor: "",
        date: "THURSDAY 18:00",
    },
    {
        name: "Data Science and Data Technology",
        link: "https://t.me/+02g330LxDUQ2ODI0",
        description: "Unlock the mysteries of data science and database technology with our focused study group!",
        imageSrc: "/Activities/StudyGroups/StudyGroup.jpg",
        tutor: "",
        date: "FRIDAY 18:00",
    },
    {
        name: "Equazioni per la fisica matematica",
        link: "https://t.me/+YlgXGt7qWqU3ODZk",
        description: "Cosa c'è di più spaventoso dei primi esami di analisi e fisica? Esatto la fuu-siò-ne tra queste due: Equazioni per la fisica matematica!",
        imageSrc: "/Activities/Activities/Activities.png",
        tutor: "",
        date: "THURSDAY 19:00",
    },
];

export default function StudyGroups() {

    // @ts-ignore
    return (
        <Layout triangles>
            <div className={styles.groupsContainer}>
                {studyGroups.map((sGroup, index) => {
                        return (
                            <StudyGroup studyGroup={sGroup} index={index}/>
                        )
                    }
                )}
            </div>
        </Layout>
    )
}
