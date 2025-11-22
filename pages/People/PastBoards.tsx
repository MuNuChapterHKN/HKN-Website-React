import Layout from "@/components/Layout";
import styles from '@/styles/People/PastBoards.module.scss'
import {useEffect, useState} from "react";
import { fetchPastBoards } from "../api/directus";
import { T, useTranslate } from "@tolgee/react";

export default function PastBoards() {

    const [PastBoardsData, setBoard] = useState<PastBoardProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPastBoards();
            setBoard(data);
        };

        fetchData();
    }, []);

    return (
        <Layout triangles>
            <text className={styles.title}><T keyName="past_boards.title" /></text>
            {PastBoardsData.map((pastBoard, index) => (
                <PastBoard year={pastBoard.year} members={pastBoard.members} key={index}/>
            ))}
        </Layout>
    )
}

function PastBoard({year, members}: PastBoardProps) {
    return (
        <div className={styles.pastboard}>
            <text className={styles.pastboard__year}>{year}</text>
            <div className={styles.pastboard__members}>
                {members.map((boardMember, index) => (
                    <BoardMember boardMemberProps={boardMember} key={index}/>
                ))}
            </div>
        </div>
    )
}

function BoardMember({boardMemberProps}: {
    boardMemberProps: PastBoardMemberProps,
}) {

    const [imageExists, setImageExists] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = boardMemberProps.imageSrc || "";
        img.onload = () => setImageExists(true);
    }, []);

    return (
        <div className={styles.boardMember}>
            <div className={styles.boardMember__imageContainer}>
                <div className={styles.boardMember__imageContainer__mask}>
                    {boardMemberProps.imageSrc && imageExists ?
                        <img className={styles.boardMember__imageContainer__image} src={boardMemberProps.imageSrc} alt={boardMemberProps.name} loading="lazy"/>
                    :
                        <img className={styles.boardMember__imageContainer__placeholder} src="/Common/hkn_ideogramma_blu.svg" alt={boardMemberProps.name} loading="lazy"/>
                    }
                </div>

            </div>
            <text className={styles.boardMember__name}>{boardMemberProps.name}</text>
            <text className={styles.boardMember__role}>{boardMemberProps.role}</text>
        </div>
    );
}


export interface PastBoardProps {
    year: string,
    members: PastBoardMemberProps[]
}

export interface PastBoardMemberProps {
    name: string;
    role: string;
    imageSrc?: string;
}
