import Layout from "../../components/Layout";
import styles from '@/styles/People/Alumni.module.scss'
import RoundButton from "@/components/molecules/RoundButton";
import { useRouter } from "next/router";
import {MouseEventHandler, useEffect, useState} from "react";
import ArrowButton from "@/components/molecules/ArrowButton";

enum BadgeType {
    Head,
    Board,
    Inducted
}

// Images should be in a 4:5 ratio
const AlumniData : AlumnoProps[] = [
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
    const router = useRouter();

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
                        <Alumno alumno={al} key={index} />
                    ))}
                </div>
            </div>

        </Layout>
    )
}

function Alumno({ alumno }: {
    alumno: AlumnoProps,
}) {
    return (
        <div className={styles.boardMember} onClick={() => {}}>
            <div className={styles.boardImageContainer}>
                <div className={styles.boardCard} />
                <img className={styles.boardMemberImage} src={alumno.imageSrc} alt={alumno.name} loading="lazy" />
            </div>
            <text className={styles.boardMemberName}>{alumno.name}</text>
        </div>
    );
}

export interface AlumnoProps {
    name: string,
    imageSrc?: string,
    linkedIn?: string,
    badges?: Badge[],
}

interface Badge {
    type: BadgeType,
    year: number,
    role: string,
}
