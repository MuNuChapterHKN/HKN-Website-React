import Layout from "../components/Layout";
import styles from '@/styles/People/People.module.scss'
import RoundButton from "@/components/molecules/RoundButton";
import {useRouter} from "next/router";
import {MouseEventHandler, useState} from "react";
import ArrowButton from "@/components/molecules/ArrowButton";
import React, {useRef, useEffect} from "react";

// Images should be in a 4:5 ratio
const Board: BoardMemberProps[] = [
    {
        name: "Gustavo Nicoletti",
        role: "Recording Secretary",
        imageSrc: "/People/Board/Gustavo Nicoletti Rosa.png",
        linkedIn: "https://www.linkedin.com/in/gustavo-nicoletti-rosa/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Serena Canavero",
        role: "President",
        imageSrc: "/People/Board/Serena Canavero.png",
        linkedIn: "https://www.linkedin.com/in/serenacanavero/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Francesco Anzoino",
        role: "Treasurer",
        imageSrc: "/People/Board/Francesco Anzoino.png",
        linkedIn: "",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Claudio Fantasia",
        role: "Vice President",
        imageSrc: "/People/Board/Claudio Fantasia.png",
        linkedIn: "https://www.linkedin.com/in/claudio-fantasia-120560224/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Dario Gosmar",
        role: "Web Correspondent",
        imageSrc: "/People/Board/Dario Gosmar.png",
        linkedIn: "https://www.linkedin.com/in/dario-gosmar/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Alberto Castrignanò",
        role: "Corresponding Secretary",
        imageSrc: "/People/Board/Alberto Castrignano.png",
        linkedIn: "https://www.linkedin.com/in/albertocastrignano2/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
];

// Images work well in a 3:5 ratio
const Teams: TeamProps[] = [
    {
        area: "Comms",
        longName: "Communications",
        description: "Informing, engaging, motivating and creating: we constitute the link between the chapter and the student community",
        imageSrc: "/People/Resp/resp-comms.png",
        managerName: "Dario Gosmar",
        members: [
            'Alessia Scardi',
            'Lorenzo Fezza'
        ]
    },
    {
        area: "HR",
        longName: "Human Resources",
        description: "Networking is our keyword: we manage the recruitment and organize any event/activity regarding the chapter",
        imageSrc: "/People/Resp/resp-hr.png",
        managerName: "Francesca Portadibasso & Luca Filippetti",
        members: [
            "Davide D'Adamo",
            "Giacomo Maino"
        ]
    },
    {
        area: "Corporate training",
        longName: "Corporate training",
        description: "We are responsible for the talks and the workshops that constitute the interfaces with the professionals  ",
        imageSrc: "/People/Resp/resp-fi.png",
        managerName: "Claudio Fantasia",
        members: [
            'Matteo Sperti',
            'Costanza Galante',
        ]
    },
    {
        area: "Tutoring",
        longName: "Tutoring",
        description: "We put at the first place the networking between the students, organizing masterclasses and study groups open to everyone who wants to join",
        imageSrc: "/People/Resp/resp-tutoring.png",
        managerName: "Orlando Zaccaria & Elena Favero",
        members: []
    },
    {
        area: "Events",
        longName: "Events",
        description: "We organize hackathons & competitions related to the areas of interest of the students community",
        imageSrc: "/People/Resp/resp-eventi.png",
        managerName: "Sebastiano Guzzone",
        members: [
            'Alessandro Cardinale',
            'Davide Macario',
            'Mattia Chiarle'
        ]
    },
    {
        area: "IT",
        longName: "IT",
        description: "We manage IT-related projects for the chapter, such as our own website or the recruitment software",
        imageSrc: "/People/Resp/resp-it.png",
        managerName: "Alberto Baroso & Francesco Baldini",
        members: [
            'Manuel Colotti',
            'Marco Pascarella',
            'Marco Rosa Gobbo',
            'Micol Rosini',
            'Vito Palmisano'
        ]
    },
];

export default function People() {
    const router = useRouter();
    const [boardIndex, setBoardIndex] = useState(0);
    const [boardPopUpVisible, setBoardPopUpVisible] = useState(false);

    const handleBoardMemberClick = (index: number) => {
        setBoardIndex(index);
        setBoardPopUpVisible(true);
    }

    const handleHideBoardPopUp = () => {
        setBoardPopUpVisible(false);
    }

    return (
       <Layout triangles>
           {/*<BoardPopUp index={boardIndex} visible={false} disablePopUp={handleHideBoardPopUp}/>*/}
            <div className={styles.boardContainer}>
                <text className={styles.theBoard}>THE BOARD</text>
                <text className={styles.managementArea}>Management Area</text>
                <div className={styles.boardGrid}>
                    {Board.map((bmp, index) => (
                        <BoardMember boardMemberProps={bmp} index={index} key={index}
                                     onClick={() => handleBoardMemberClick(index)}/>
                    ))}
                </div>
            </div>

           <div className={styles.teamsContainer}>
               <text className={styles.theTeams}>THE TEAMS</text>
               <text className={styles.joinOurTeams}>Our Teams</text>
               <div className={styles.teamsGrid}>
                   {Teams.map((team, index) => (
                       <Team teamProps={team} key={team.area}/>
                   ))}
               </div>
           </div>

            <div className={styles.discover}>
                <div className={styles.discover__coming}>coming soon</div>
                <div className={styles.discover__title}>discover</div>
                <div className={styles.discover__title}>past boards and alumni</div>
            </div>
        </Layout>
    )
}

function BoardMember({boardMemberProps, index, onClick}: {
    boardMemberProps: BoardMemberProps,
    index: number,
    onClick: MouseEventHandler<HTMLDivElement>
}) {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className={styles.boardMember} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
             onClick={onClick}>
            <div className={styles.boardImageContainer}>
                <div className={styles.boardCard}/>
                <img className={styles.boardMemberImage} src={boardMemberProps.imageSrc} alt={boardMemberProps.name} loading="lazy"/>
            </div>
            <text className={styles.boardMemberName}>{boardMemberProps.name}</text>
            <text className={styles.boardMemberRole}>{boardMemberProps.role}</text>
        </div>
    );
}

function Team({teamProps}: { teamProps: TeamProps }) {
    return (
        <div className={styles.team}>
            <img className={styles.teamRespImage} src={teamProps.imageSrc} alt={teamProps.imageSrc}/>
            <div className={styles.teamTextBox}>
                <text className={styles.peopleOf}>people of</text>
                <text className={styles.teamArea}>{teamProps.area}</text>
                <text className={styles.teamDescription}>{teamProps.description}</text>
            </div>
        </div>
    )
}

function BoardPopUp({index, visible, disablePopUp}: {index: number, visible: Boolean, disablePopUp:  MouseEventHandler<HTMLDivElement>}) {
    return (
        <div className={styles.popUpBackground} onClick={disablePopUp} style={{visibility: visible ? 'visible' : 'hidden'}}>
            <div className={styles.boardPopUp}>
                <div className={styles.imageContainer}>
                    <ArrowButton left onClick={() => {}} className={styles.arrowButtonLeft}/>
                    <div className={styles.imageBackground}>
                        <div className={styles.imageClipMask}>
                            <img className={styles.boardPopUpImage} src={Board[index].imageSrc} alt={Board[index].imageSrc} loading="lazy"/>
                        </div>
                    </div>
                    <ArrowButton right onClick={() => {}} className={styles.arrowButtonRight}/>
                </div>
                <div className={styles.popUpTextContainer}>
                    <text className={styles.ourBoard}>OUR BOARD</text>
                    <text className={styles.role}>{Board[index].role}</text>
                    <text className={styles.roleDescription}>{Board[index].roleDescription}</text>
                </div>
            </div>
        </div>
    )
}
export interface BoardMemberProps {
    name: string;
    role: string;
    imageSrc: string;
    linkedIn: string;
    roleDescription: string;
}

export interface TeamProps {
    area: string;
    longName: string;
    description: string;
    imageSrc: string;
    managerName: string;
    members: string[];
}
