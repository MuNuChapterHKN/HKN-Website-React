import Layout from "../components/Layout";
import styles from '@/styles/People.module.css'
import RoundButton from "@/components/molecules/RoundButton";
import {useRouter} from "next/router";

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

    return (
       <Layout>
            <div className={styles.boardContainer}>
                <text className={styles.theBoard}>THE BOARD</text>
                <text className={styles.managementArea}>Management</text>
                <text className={styles.managementArea}>Area</text>
                <div className={styles.boardGrid}>
                    {Board.map((bmp, index) => (
                        <BoardMember boardMemberProps={bmp} index={index}/>
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

function BoardMember({boardMemberProps, index}: {boardMemberProps : BoardMemberProps, index: number}) {
    return (
        <div className={styles.boardMember}>
            <div className={styles.boardImageContainer}>
                <div className={index % 2 == 0 ? styles.boardCardEven : styles.boardCardOdd}/>
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
