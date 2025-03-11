import styles from "@/styles/Activities/StudyGroups.module.css";
import Layout from "../../components/Layout";
import StudyGroup, {StudyGroupProps} from "@/components/Events/StudyGroup";
import { fetchActiveStudyGroups } from "../api/directus";
import { useEffect, useState } from "react";


export default function StudyGroups() {

    const [studyGroups, setStudyGroups] = useState<StudyGroupProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchActiveStudyGroups();
            console.log(data);
            setStudyGroups(data);
        };

        fetchData();
    }, []);

    // @ts-ignore
    return (
        <Layout triangles>
            <div className={styles.groupsContainer}>
                {studyGroups.map((sGroup, index) => {
                        return (
                            <StudyGroup studyGroup={sGroup} index={index} key={sGroup.name}/>
                        )
                    }
                )}
            </div>
        </Layout>
    )
}
