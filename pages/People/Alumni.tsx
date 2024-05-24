import Layout from "@/components/Layout";
import styles from '@/styles/People/Alumni.module.scss'
import RoundButton from "@/components/molecules/RoundButton";
import { useRouter } from "next/router";
import { useState } from "react";
import ArrowButton from "@/components/molecules/ArrowButton";
import Alumno, {Badge, BadgeType} from "@/components/People/Alumno";

// Images should be in a 4:5 ratio
const AlumniData : AlumnoProps[] = [
    {
        name: "Gustavo Nicoletti",
        imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
        badges: []
    },
    {
        name: "Gustavo Nicoletti",
        imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
        linkedIn: "https://www.linkedin.com/in/gustavo-nicoletti-rosa/",
        badges: [
            {
                type: BadgeType.Head,
                year: 2021,
                role: "Head of Communications"
            },
            {
                type: BadgeType.Board,
                year: 2020,
                role: "Vice President"
            },
            {
                type: BadgeType.Inducted,
                year: 2019,
                role: "Member of Comms"
            }
        ]
    },
    {
        name: "Gustavo Nicoletti",
        imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
        linkedIn: "https://www.linkedin.com/in/gustavo-nicoletti-rosa/",
        badges: [
            {
                type: BadgeType.Board,
                year: 2020,
                role: "Vice President"
            },
            {
                type: BadgeType.Inducted,
                year: 2019,
                role: "Member of Comms"
            }
        ]
    },
    {
        name: "Gustavo Nicoletti",
        imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
        linkedIn: "https://www.linkedin.com/in/gustavo-nicoletti-rosa/",
        badges: [
            {
                type: BadgeType.Inducted,
                year: 2019,
                role: "Member of Comms"
            }
        ]
    },
    {
        name: "Gustavo Nicoletti",
        imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
        badges: [
            {
                type: BadgeType.Head,
                year: 2021,
                role: "Head of Communications"
            },
            {
                type: BadgeType.Inducted,
                year: 2019,
                role: "Member of Comms"
            }
        ]
    },
    {
        name: "Gustavo Nicoletti",
        imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
        linkedIn: "https://www.linkedin.com/in/gustavo-nicoletti-rosa/",
    },
    {
        name: "Gustavo Nicoletti",
        imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
        linkedIn: "https://www.linkedin.com/in/gustavo-nicoletti-rosa/",
        badges: [
            {
                type: BadgeType.Head,
                year: 2021,
                role: "Head of Communications"
            },
            {
                type: BadgeType.Board,
                year: 2020,
                role: "Vice President"
            },
            {
                type: BadgeType.Inducted,
                year: 2019,
                role: "Member of Comms"
            }
        ]
    },
    {
        name: "Gustavo Nicoletti",
        imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
        linkedIn: "https://www.linkedin.com/in/gustavo-nicoletti-rosa/",
        badges: [
            {
                type: BadgeType.Head,
                year: 2021,
                role: "Head of Communications"
            },
            {
                type: BadgeType.Board,
                year: 2020,
                role: "Vice President"
            },
            {
                type: BadgeType.Inducted,
                year: 2019,
                role: "Member of Comms"
            }
        ]
    },
    {
        name: "Gustavo Nicoletti",
        imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
        linkedIn: "https://www.linkedin.com/in/gustavo-nicoletti-rosa/",
        badges: [
            {
                type: BadgeType.Head,
                year: 2021,
                role: "Head of Communications"
            },
            {
                type: BadgeType.Board,
                year: 2020,
                role: "Vice President"
            },
            {
                type: BadgeType.Inducted,
                year: 2019,
                role: "Member of Comms"
            }
        ]
    },
];

export default function Alumni() {
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleAlumnoClick = (id : number) => {
        setActiveId(id === activeId ? null : id);
    };

    return (
        <Layout triangles>

            <div className={styles.descriptionContainer}>
                <img className={styles.descriptionContainer__image} src="/Home/vision.jpg" alt="Vision"/>
                <div className={styles.descriptionContainer__right}>
                    <text className={styles.descriptionContainer__right__title}>Alumni</text>
                    <text className={styles.descriptionContainer__right__subtitle}>ETA KAPPA MENTORING</text>
                    <text className={styles.descriptionContainer__right__text}>Since 2017 we are dedicated to encouraging excellence in the IEEE-designated fields of interest, continuing to reinvent ourselves to meet the needs of our members and society overall</text>
                </div>
            </div>

            <div className={styles.alumniContainer}>
                <text className={styles.alumniContainer__directory}>Directory</text>
                <text className={styles.alumniContainer__alumni}>Alumni</text>
                <div className={styles.alumniContainer__grid}>
                    {AlumniData.map((al, index) => (
                        <Alumno alumno={al} key={index} index={index} onClick={() => handleAlumnoClick(index)} active={index===activeId}/>
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
