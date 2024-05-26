import Layout from "@/components/Layout";
import styles from '@/styles/People/PastBoards.module.scss'

// Images should be in a 4:5 ratio
const PastBoardsData: PastBoardProps[] = [
    {
        year: "2022-2023",
        members: [
            {
                name: "Gustavo Nicoletti",
                role: "Recording Secretary",
                imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
            },
            {
                name: "Serena Canavero",
                role: "President",
                imageSrc: "/People/Board/Serena Canavero.png",
            },
            {
                name: "Francesco Anzoino",
                role: "Treasurer",
                imageSrc: "/People/Board/Francesco Anzoino.png",
            },
            {
                name: "Claudio Fantasia",
                role: "Vice President",
                imageSrc: "/People/Board/Claudio Fantasia.png",
            },
            {
                name: "Dario Gosmar",
                role: "Web Correspondent",
                imageSrc: "/People/Board/Dario Gosmar.png",
            },
            {
                name: "Alberto Castrignanò",
                role: "Corresponding Secretary",
                imageSrc: "/People/Board/Alberto Castrignano.png",
            },
        ]
    },
    {
        year: "2021-2022",
        members: [
            {
                name: "Gustavo Nicoletti",
                role: "Recording Secretary",
                imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
            },
            {
                name: "Serena Canavero",
                role: "President",
                imageSrc: "/People/Board/Serena Canavero.png",
            },
            {
                name: "Francesco Anzoino",
                role: "Treasurer",
                imageSrc: "/People/Board/Francesco Anzoino.png",
            },
            {
                name: "Claudio Fantasia",
                role: "Vice President",
                imageSrc: "/People/Board/Claudio Fantasia.png",
            },
            {
                name: "Dario Gosmar",
                role: "Web Correspondent",
                imageSrc: "/People/Board/Dario Gosmar.png",
            },
            {
                name: "Alberto Castrignanò",
                role: "Corresponding Secretary",
                imageSrc: "/People/Board/Alberto Castrignano.png",
            },
        ]
    },
    {
        year: "2020-2021",
        members: [
            {
                name: "Gustavo Nicoletti",
                role: "Recording Secretary",
                imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
            },
            {
                name: "Serena Canavero",
                role: "President",
                imageSrc: "/People/Board/Serena Canavero.png",
            },
            {
                name: "Francesco Anzoino",
                role: "Treasurer",
                imageSrc: "/People/Board/Francesco Anzoino.png",
            },
            {
                name: "Claudio Fantasia",
                role: "Vice President",
                imageSrc: "/People/Board/Claudio Fantasia.png",
            },
            {
                name: "Dario Gosmar",
                role: "Web Correspondent",
                imageSrc: "/People/Board/Dario Gosmar.png",
            },
            {
                name: "Alberto Castrignanò",
                role: "Corresponding Secretary",
                imageSrc: "/People/Board/Alberto Castrignano.png",
            },
        ]
    }
];

export default function PastBoards() {

    return (
        <Layout triangles>
            <text className={styles.title}>Past Boards</text>
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
    boardMemberProps: BoardMemberProps,
}) {
    return (
        <div className={styles.boardMember}>
            <div className={styles.boardMember__imageContainer}>
                <div className={styles.boardMember__imageContainer__mask}>
                    <img className={styles.boardMember__imageContainer__image} src={boardMemberProps.imageSrc} alt={boardMemberProps.name} loading="lazy"/>
                </div>
            </div>
            <text className={styles.boardMember__name}>{boardMemberProps.name}</text>
            <text className={styles.boardMember__role}>{boardMemberProps.role}</text>
        </div>
    );
}


export interface PastBoardProps {
    year: string,
    members: BoardMemberProps[]
}

export interface BoardMemberProps {
    name: string;
    role: string;
    imageSrc?: string;
}
