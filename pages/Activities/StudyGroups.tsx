import {useRouter} from "next/router";
import styles from "@/styles/Activities/StudyGroups.module.css";
import Layout from "../../components/Layout";
import {PolygonProps} from "@/components/Polygon";
import StudyGroup, {StudyGroupProps} from "@/components/Events/StudyGroup";

const studyGroups : StudyGroupProps[] = [
    {
        name: "Study Group 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl",
        imageSrc: "/Activities/StudyGroups/StudyGroup.jpg",
        link: "https://t.me/+ayAR5WTQVyoxMjI8",
        date: "TUESDAY 19:30",
    },

    {
        name: "Study Group 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl",
        imageSrc: "https://t.me/+ayAR5WTQVyoxMjI8",
        link: "/",
        date: "TUESDAY 19:30",
    },


    {
        name: "Study Group 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl",
        imageSrc: "https://t.me/+ayAR5WTQVyoxMjI8",
        link: "/",
        date: "TUESDAY 19:30",
    }
];

export default function StudyGroups() {

    // @ts-ignore
    return (
        <Layout>
            <div className={styles.groupsContainer}>
                {studyGroups.map((sGroup, index) => {
                    return (
                        <StudyGroup studyGroup={sGroup} index={index}/>
                    )}
                )}
            </div>
        </Layout>
    )
}
