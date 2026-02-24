import Layout from "@/components/Layout";
import styles from '@/styles/People/Alumni.module.scss'
import RoundButton from "@/components/molecules/RoundButton";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import ArrowButton from "@/components/molecules/ArrowButton";
import Alumno, {Badge, BadgeType} from "@/components/People/Alumno";
import { fetchAlumni } from "../api/directus";
import { T, useTranslate } from "@tolgee/react";

export default function Alumni() {
    const { t } = useTranslate();
    const [AlumniData, setAlumni] = useState<AlumnoProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAlumni();
            setAlumni(data);
        };

        fetchData();
    }, []);

    const [activeId, setActiveId] = useState<number | null>(null);

    const handleAlumnoClick = (id: number) => {
        setActiveId(id === activeId ? null : id);
    };

    AlumniData.sort((a, b) => {
        const aInductedBadge : Badge | undefined = a.badges?.find(badge => badge.type === BadgeType.Inducted);
        const bInductedBadge : Badge | undefined = b.badges?.find(badge => badge.type === BadgeType.Inducted);

        const aYear: any = aInductedBadge?.year ?? 0;
        const bYear: any = bInductedBadge?.year ?? 0;

        if (aYear !== bYear) {
            return bYear - aYear;
        }

        const aLastName = a.name.split(' ').slice(-1)[0];
        const bLastName = b.name.split(' ').slice(-1)[0];

        return aLastName.localeCompare(bLastName);
    });

    return (
        <Layout triangles>

            <div className={styles.descriptionContainer}>
                <img className={styles.descriptionContainer__image} src="/AboutUs/Gallery/Compleanno%20del%20Chapter%20-%20March%202023.JPG" alt={t('alumni.banner.alt')}/>
                <div className={styles.descriptionContainer__right}>
                    <text className={styles.descriptionContainer__right__title}><T keyName="alumni.banner.title" /></text>
                    <text className={styles.descriptionContainer__right__subtitle}><T keyName="alumni.banner.subtitle" /></text>
                    <text className={styles.descriptionContainer__right__text}>
                        <T keyName="alumni.banner.text" />
                    </text>
                </div>
            </div>

            <div className={styles.alumniContainer}>
                <text className={styles.alumniContainer__directory}><T keyName="alumni.directory.kicker" /></text>
                <text className={styles.alumniContainer__alumni}><T keyName="alumni.directory.title" /></text>
                <div className={styles.alumniContainer__grid}>
                    {AlumniData.map((al, index) => (
                        <Alumno alumno={al} key={index} index={index} onClick={() => handleAlumnoClick(index)}
                                active={index === activeId}/>
                    ))}
                </div>
            </div>

        </Layout>
    )
}

export interface AlumnoProps {
    name: string,
    imageSrc?: string,
    linkedIn?: string,
    badges?: Badge[],
}