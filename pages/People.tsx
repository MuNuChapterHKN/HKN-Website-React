import Layout from "../components/Layout";
import styles from '@/styles/People/People.module.scss'
import RoundButton from "@/components/molecules/RoundButton";
import {useRouter} from "next/router";
import {MouseEventHandler, useState} from "react";
import ArrowButton from "@/components/molecules/ArrowButton";

// Images should be in a 4:5 ratio
const Board : BoardMemberProps[] = [
    {
        name: "Claudio Fantasia",
        role: "Vice President",
        imageSrc: "/People/Board/ClaudioFantasia.png",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Serena Canavero",
        role: "President",
        imageSrc: "/People/Board/SerenaCanavero.png",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Francesco Anzoino",
        role: "Tesoriere",
        imageSrc: "/People/Board/FrancescoAnzoino.png",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Gustavo Nicoletti",
        role: "Recording Secretary",
        imageSrc: "/People/Board/GustavoNicoletti.png",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Dario Gosmar",
        role: "Web Correspondent",
        imageSrc: "/People/Board/DarioGosmar.png",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Alberto Castrignanò",
        role: "Corresponding Secretary",
        imageSrc: "/People/Board/AlbertoCastrignano.png",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
];

// Images work well in a 3:5 ratio
const Teams : TeamProps[] = [
    {
        area: "Comms",
        description: "The Comms team is responsible for the communication of the society. This includes the website, social media, and the newsletter.",
        imageSrc: "/People/Teams/resp_comms.png",
        managerName: "Edoardo Colella",
        members: []
    },
    {
        area: "Comms",
        description: "The Comms team is responsible for the communication of the society. This includes the website, social media, and the newsletter.",
        imageSrc: "/People/Teams/resp_comms.png",
        managerName: "Edoardo Colella",
        members: []
    },
    {
        area: "Comms",
        description: "The Comms team is responsible for the communication of the society. This includes the website, social media, and the newsletter.",
        imageSrc: "/People/Teams/resp_comms.png",
        managerName: "Edoardo Colella",
        members: []
    },
    {
        area: "Comms",
        description: "The Comms team is responsible for the communication of the society. This includes the website, social media, and the newsletter.",
        imageSrc: "/People/Teams/resp_comms.png",
        managerName: "Edoardo Colella",
        members: []
    },
    {
        area: "Comms",
        description: "The Comms team is responsible for the communication of the society. This includes the website, social media, and the newsletter.",
        imageSrc: "/People/Teams/resp_comms.png",
        managerName: "Edoardo Colella",
        members: []
    },
    {
        area: "Comms",
        description: "The Comms team is responsible for the communication of the society. This includes the website, social media, and the newsletter.",
        imageSrc: "/People/Teams/resp_comms.png",
        managerName: "Edoardo Colella",
        members: []
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
       <Layout>
            <BoardPopUp index={boardIndex} visible={false} disablePopUp={handleHideBoardPopUp}/>
            <div className={styles.boardContainer}>
                <text className={styles.theBoard}>THE BOARD</text>
                <text className={styles.managementArea}>Management Area</text>
                <div className={styles.boardGrid}>
                    {Board.map((bmp, index) => (
                        <BoardMember boardMemberProps={bmp} index={index} onClick={() => handleBoardMemberClick(index)}/>
                    ))}
                </div>
            </div>

           <div className={styles.teamsContainer}>
               <text className={styles.theTeams}>THE TEAMS</text>
               <text className={styles.joinOurTeams}>Our Teams</text>
               <div className={styles.teamsGrid}>
                   {Teams.map((team, index) => (
                       <Team teamProps={team}/>
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

function BoardMember({boardMemberProps, index, onClick}: {boardMemberProps : BoardMemberProps, index: number, onClick: MouseEventHandler<HTMLDivElement>}) {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className={styles.boardMember} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={onClick}>
            <div className={styles.boardImageContainer}>
                <div className={styles.boardCard}/>
                <img className={styles.boardMemberImage} src={boardMemberProps.imageSrc} alt={boardMemberProps.imageSrc}/>
            </div>
            <text className={styles.boardMemberName}>{boardMemberProps.name}</text>
            <text className={styles.boardMemberRole}>{boardMemberProps.role}</text>
        </div>
    );
}

function Team({teamProps} : {teamProps: TeamProps}) {
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
                            <img className={styles.boardPopUpImage} src={Board[index].imageSrc} alt={Board[index].imageSrc}/>
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
    roleDescription: string;
}

export interface TeamProps {
    area: string;
    description: string;
    imageSrc: string;
    managerName: string;
    members: string[];
}
