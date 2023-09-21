import Layout from "../components/Layout";
import styles from '@/styles/People.module.css'
import RoundButton from "@/components/molecules/RoundButton";
import {useRouter} from "next/router";
import {MouseEventHandler, useState} from "react";
import ArrowButton from "@/components/molecules/ArrowButton";

// Images should be in a 4:5 ratio
const Board : BoardMemberProps[] = [
    {
        name: "Edoardo Colella",
        role: "President",
        imageSrc: "/People/Board/EdoardoColella.png",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Edoardo Colella",
        role: "President",
        imageSrc: "/People/Board/EdoardoColella.png",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Edoardo Colella",
        role: "President",
        imageSrc: "/People/Board/EdoardoColella.png",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Edoardo Colella",
        role: "President",
        imageSrc: "/People/Board/EdoardoColella.png",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Edoardo Colella",
        role: "President",
        imageSrc: "/People/Board/EdoardoColella.png",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Edoardo Colella",
        role: "President",
        imageSrc: "/People/Board/EdoardoColella.png",
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
            <BoardPopUp index={boardIndex} visible={boardPopUpVisible} disablePopUp={handleHideBoardPopUp}/>
            <div className={styles.boardContainer}>
                <text className={styles.theBoard}>THE BOARD</text>
                <text className={styles.managementArea}>Management</text>
                <text className={styles.managementArea}>Area</text>
                <div className={styles.boardGrid}>
                    {Board.map((bmp, index) => (
                        <BoardMember boardMemberProps={bmp} index={index} onClick={() => handleBoardMemberClick(index)}/>
                    ))}
                </div>
            </div>

           <div className={styles.teamsContainer}>
               <text className={styles.theTeams}>THE TEAMS</text>
               <text className={styles.joinOurTeams}>Join</text>
               <text className={styles.joinOurTeams}>Our Teams</text>
               <div className={styles.teamsGrid}>
                   {Teams.map((team, index) => (
                       <Team teamProps={team}/>
                   ))}
               </div>
           </div>

           <div className={styles.discoverContainer}>
                <div className={styles.discoverCard}>
                    <div className={styles.discoverTextContainer}>
                        <text className={styles.discoverText}>Discover</text>
                        <text className={styles.discoverTitle}>Alumni</text>
                        <text className={styles.discoverDescription}>Former members of the chapter share their stories and their careers </text>
                    </div>
                    <RoundButton className={styles.discoverButton} onClick={() => router.push("/404")}>ALUMNI</RoundButton>
                </div>
                <div className={styles.discoverCard}>
                    <div className={styles.discoverTextContainer}>
                        <text className={styles.discoverText}>Discover</text>
                        <text className={styles.discoverTitle}>Professionals</text>
                        <text className={styles.discoverDescription}>Discover the many connections that the chapter shares with the professional figures of the Politecnico</text>
                    </div>
                    <RoundButton className={styles.discoverButton} onClick={() => router.push("/404")}>Professionals</RoundButton>
                </div>
                <div className={styles.discoverCard}>
                    <div className={styles.discoverTextContainer}>
                        <text className={styles.discoverText}>Discover</text>
                        <text className={styles.discoverTitle}>Past Boards</text>
                        <text className={styles.discoverDescription}>Heads of areas and past boards share their careers and stories with the chapter</text>
                    </div>
                    <RoundButton className={styles.discoverButton} onClick={() => router.push("/404")}>PAST BOARDS</RoundButton>
                </div>
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
                <div className={index % 2 == 0 ? styles.boardCardEven : styles.boardCardOdd}/>
                <div className={styles.overlayContainer}>
                    <img style={{visibility: isHovered ? 'visible' : 'hidden'}} className={`${styles.boardOverlay} ${isHovered ? styles.slideIn : styles.slideOut}`}
                        src={'/People/Board/' + (index % 2 == 0 ? 'overlay_board_red.svg' : 'overlay_board_blue.svg')} alt={'overlay'}/>
                </div>
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
