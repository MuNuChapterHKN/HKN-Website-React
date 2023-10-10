import {useRouter} from "next/router";
import styles from "@/styles/Activities/StudyGroups.module.css";
import Layout from "../../components/Layout";
import StudyGroup, {StudyGroupProps} from "@/components/Events/StudyGroup";

const studyGroups: StudyGroupProps[] = [
    {
        name: "Fondamenti di Biologia, Anatomia e Fisiologia",
        description: "COMING SOON",
        imageSrc: "/Activities/Activities/Activities.png",
        link: "",
        date: "MONDAY 18:00",
        tutor: "Orlando Zaccaria"
    },
    {
        name: "Tecniche di Programmazione",
        description: "COMING SOON",
        link: "",
        imageSrc: "/Activities/StudyGroups/StudyGroup.jpg",
        tutor: "Elena Favero",
        date: "THURSDAY 18:00",
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
