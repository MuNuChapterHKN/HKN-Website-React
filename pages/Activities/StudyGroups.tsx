import styles from "@/styles/Activities/StudyGroups.module.css";
import Layout from "../../components/Layout";
import StudyGroup, {StudyGroupProps} from "@/components/Events/StudyGroup";
import { fetchActiveStudyGroups } from "../api/directus";
import { useEffect, useState } from "react";
import { T } from "@tolgee/react";

export default function StudyGroups() {

    const [studyGroups, setStudyGroups] = useState<StudyGroupProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchActiveStudyGroups();
            setStudyGroups(data);
        };

        fetchData();
    }, []);

    if (studyGroups.length === 0) {
        return (
            <Layout triangles>
                <div className={styles.groupsContainer}>
                    <h1><T keyName="activities.study_groups.no_active_title" /></h1>
                    <h2><T keyName="activities.study_groups.no_active_desc" /></h2>
                </div>
            </Layout>
        )
    }

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