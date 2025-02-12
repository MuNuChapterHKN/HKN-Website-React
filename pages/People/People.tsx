import Layout from "../../components/Layout";
import styles from '@/styles/People/People.module.scss'
import RoundButton from "@/components/molecules/RoundButton";
import { useRouter } from "next/router";
import React, {MouseEventHandler, useEffect, useRef, useState} from "react";
import ArrowButton from "@/components/molecules/ArrowButton";

// Images should be in a 4:5 ratio
const Board: BoardMemberProps[] = [
    {
        name: "Daniele De Rossi",
        role: "Recording Secretary",
        imageSrc: "/People/members/Daniele_De_Rossi - Modificata.png",
        linkedIn: "https://www.linkedin.com/in/daniele-de-rossi-2600bb209",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Andrea Pignata",
        role: "President",
        imageSrc: "/People/members/andrea_pignata.png",
        linkedIn: "https://www.linkedin.com/in/andrea-pignata-244b9a231/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Alessia De Crescenzo",
        role: "Treasurer",
        imageSrc: "/People/members/alessia_de_crescenzo.png",
        linkedIn: "https://www.linkedin.com/in/alessia-de-crescenzo-67bb7b1bb",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Dario Gosmar",
        role: "Vice President",
        imageSrc: "/People/members/dario_gosmar.png",
        linkedIn: "https://www.linkedin.com/in/dario-gosmar/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    {
        name: "Mattia Molinari",
        role: "Web Correspondent",
        imageSrc: "/People/members/Mattia_Molinari - Modificata.png",
        linkedIn: "https://www.linkedin.com/in/mattia-molinari/",
        roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    },
    //{
    //    name: "Alberto Castrignanò",
    //    role: "Corresponding Secretary",
    //    imageSrc: "/People/members/alberto_castrignano.png",
    //    linkedIn: "https://www.linkedin.com/in/albertocastrignano2/",
    //    roleDescription: "Edoardo is a 3rd year Computer Science student at the University of Bristol. He is the President of the Bristol University Italian Society and the founder of the Bristol U",
    //},
];

const Teams: TeamProps[] = [
    {
        area: "Comms",
        longName: "Communications",
        description: "Informing, engaging, motivating and creating: we constitute the link between the chapter and the student community",
        imageSrc: "/People/Resp/resp-comms.png",
        managers: [
            {
                name: "Riccardo Cerrone",
                imageSrc: "/People/members/riccardo_alfonso_cerrone.png",
            }
        ],
        members: [
            {
                name: "Alessio Delli Colli",
                imageSrc: "/People/members/Alessio_Delli_Colli - Modificata.png",
            },
            {
                name: "David Shehu",
                imageSrc: "/People/members/David_Shehu - Modificata.png",
            },
            {
                name: "Joel Topulli",
                imageSrc: "/People/members/Joel_Topulli - Modificata.png",
            },
            {
                name: "Francesca Coriale",
                imageSrc: "/People/members/Francesca_Coriale.jpg - Modificata.png",
            },
            {
                name: "Irene Maria Izzo",
                imageSrc: "/People/members/Irene_Maria_Izzo - Modificata.png",
            },
            {
                name: "Lorenzo Fezza",
                imageSrc: "/People/members/Lorenzo_Fezza - Modificata.png",
            },
        ]
    },
    {
        area: "HR",
        longName: "Human Resources",
        description: "Networking is our keyword: we manage the recruitment and organize any event/activity regarding the chapter",
        imageSrc: "/People/Resp/resp-hr.png",
        managers: [
            {
                name: "Edoardo Demichielis",
                imageSrc: "/People/members/edoardo_demichelis.png",
            },
            {
                name: "Giacomo Maino",
                imageSrc: "/People/members/giacomo_maino.png",
            }
        ],
        members: [
            {
                name: "Filippo Triassi",
                imageSrc: "/People/members/Filippo_Triassi - Modificata.png",
            },
            {
                name: "Marc'Antonio Lopez",
                imageSrc: "/People/members/Marc_Antonio_Lopenz - Modificata.png",
            },
            {
                name: "Matteo Gerard Balestriere",
                imageSrc: "/People/members/Matteo_Gerard_Balestriere - Modificata.png",
            },
            {
                name: "Robjona Toska",
                imageSrc: "/People/members/Robjona_Toska - Modificata.png",
            },
            {
                name: "Giovanni Tirone",
                imageSrc: "/People/members/Giovanni_Tirone - Modificata.png",
            },
            {
                name: "Luca Filippetti",
                imageSrc: "/People/members/luca_filippetti.png",
            },
        ]
    },
    {
        area: "Corporate Training",
        longName: "Corporate Training",
        description: "We are responsible for the talks and the workshops that constitute the interfaces with the professionals  ",
        imageSrc: "/People/Resp/resp-fi.png",
        managers: [
            {
                name: "Lorenzo Barbati",
                imageSrc: "/People/members/lorenzo_barbati.png",
            },
            {
                name: "Riccardo Bracciale",
                imageSrc: "/People/members/riccardo_bracciale.png",
            }
        ],
        members: [
            {
                name: "Fabio Lauro",
                imageSrc: "/People/members/Fabio_Lauro - Modificata.png",
            },
            {
                name: "Mateo Shehu",
                imageSrc: "/People/members/Mateo_Shehu - Modificata.png",
            },
            {
                name: "Paolo Allione",
                imageSrc: "/People/members/Paolo_Allione - Modificata.png",
            },
            {
                name: "Salvatore Lo Sardo",
                imageSrc: "/People/members/Salvatore_Lo_Sardo - Modificata.png",
            },
            {
                name: "Daniel Dimitrov",
                imageSrc: "/People/members/Daniel_Dimitrov - Modificata.png",
            },
            {
                name: "Rubens Brraka",
                imageSrc: "/People/members/Rubens_Brraka - Modificata.png",
            },
            {
                name: "Elena Favero",
                imageSrc: "/People/members/elena_favero.png",
            },
        ]
    },
    {
        area: "Tutoring",
        longName: "Tutoring",
        description: "We put at the first place the networking between the students, organizing masterclasses and study groups open to everyone who wants to join",
        imageSrc: "/People/Resp/resp-tutoring.png",
        managers: [
            {
                name: "Sabina Sarcuni",
                imageSrc: "/People/members/sabina_sarcuni.png",
            },
            {
                name: "Erik Scolaro",
                imageSrc: "/People/members/erik_scolaro.png",
            }
        ],
        members: [
            {
                name: "Amir Reza Khatibi",
                imageSrc: "/People/members/Amir_Reza_Khatibi - Modificata.png",
            },
            {
                name: "Giacomo Gramaglia",
                imageSrc: "/People/members/Giacomo_Gramaglia - Modificata.png",
            },
            {
                name: "Lorenzo Di Muzio",
                imageSrc: "/People/members/Lorenzo_Di_Muzio - Modificata.png",
            },
            {
                name: "Matteo Tedde",
                imageSrc: "/People/members/Matteo_Tedde - Modificata.png",
            },
            {
                name: "Nunzio Licalzi",
                imageSrc: "/People/members/Nunzio_Licalzi - Modificata.png",
            },
            {
                name: "Antonio Angelo Polignano",
                imageSrc: "/People/members/Antonio_Angelo_Polignano - Modificata.png",
            },
            {
                name: "Giulio Cosentino",
                imageSrc: "/People/members/Giulio_Cosentino - Modificata.png",
            },
            {
                name: "Tommaso Pignatelli",
                imageSrc: "/People/members/Tommaso_Pignatelli - Modificata.png",
            },
        ]
    },
    {
        area: "Events",
        longName: "Events",
        description: "We organize hackathons & competitions related to the areas of interest of the students community",
        imageSrc: "/People/Resp/resp-eventi.png",
        managers: [
            {
                name: "Francesco Anzoino",
                imageSrc: "/People/members/francesco_anzoino.png",
            },
            {
                name: "Leonardo Gallina",
                imageSrc: "/People/members/leonardo_gallina.png",
            }
        ],
        members: [
            {
                name: "Alessia Parigi",
                imageSrc: "/People/members/Alessia_Parigi - Modificata.png",
            },
            {
                name: "Federico Mele",
                imageSrc: "/People/members/Federico_Mele - Modificata.png",
            },
            {
                name: "Romano Mancini",
                imageSrc: "/People/members/Romano_Mancini - Modificata.png",
            },
            {
                name: "Alice Santoro",
                imageSrc: "/People/members/Alice_Santoro - Modificata.png",
            },
            {
                name: "Elisabetta Della Porta",
                imageSrc: "/People/members/Elisabetta_Della_Porta - Modificata.png",
            },
            {
                name: "Enrico Junior Cunsolo",
                imageSrc: "/People/members/Enrico_Junior_Cunsolo - Modificata.png",
            },
        ]
    },
    {
        area: "IT",
        longName: "IT",
        description: "We manage IT-related projects for the chapter, such as our own website or the recruitment software",
        imageSrc: "/People/Resp/resp-it.png",
        managers: [
            {
                name: "Antonio Capece",
                imageSrc: "/People/members/antonio_capece.png",
            }
        ],
        members: [
            {
                name: "Alessio Menichinelli",
                imageSrc: "/People/members/alessio_menichinelli.png",
            },
            {
                name: "Francesco Liaci",
                imageSrc: "/People/members/Francesco_Liaci - Modificata.png",
            },
            {
                name: "Paolo La Manna",
                imageSrc: "/People/members/Paolo_La_Manna - Modificata.png",
            },
            {
                name: "Giovanni De Maria",
                imageSrc: "/People/members/Giovanni_De_Maria - Modificata.png",
            },
            {
                name: "Giuseppe Pascale",
                imageSrc: "/People/members/Giuseppe_Pascale - Modificata.png",
            },
            {
                name: "Virginia Ermondi",
                imageSrc: "/People/members/Virginia_Ermondi - Modificata.png",
            },
            {
                name: "Alberto Baroso",
                imageSrc: "/People/members/alberto_baroso.png",
            },
            {
                name: "Isabella Lombardi",
                imageSrc: "/People/members/isabella_lombardi.png",
            },
            {
                name: "Matteo Mugnai",
                imageSrc: "/People/members/matteo_mugnai.png",
            },
            {
                name: "Massimo Aresca",
                imageSrc: "/People/members/massimo_aresca.png",
            }
        ]
    },
];

export default function People() {
    const router = useRouter();
    const [boardIndex, setBoardIndex] = useState(0);
    const [teamIndex, setTeamIndex] = useState(0);
    const [boardPopUpVisible, setBoardPopUpVisible] = useState(false);
    const [teamPopUpVisible, setTeamPopUpVisible] = useState(false);

    const handleBoardMemberClick = (index: number) => {
        setBoardIndex(index);
        setBoardPopUpVisible(true);
    }

    const handleTeamMemberClick = (index: number) => {
        setTeamIndex(index);
        setTeamPopUpVisible(true);
        document.body.style.overflow = 'hidden';
    }

    const handleHideBoardPopUp = () => {
        setBoardPopUpVisible(false);
    }

    const handleHideTeamPopUp = () => {
        setTeamPopUpVisible(false);
        document.body.style.overflow = 'auto';
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
                            onClick={() => handleBoardMemberClick(index)} />
                    ))}
                </div>
            </div>

            <TeamPopUp index={teamIndex} visible={teamPopUpVisible} disablePopUp={handleHideTeamPopUp} />
            <div className={styles.teamsContainer}>
                <text className={styles.theTeams}>THE TEAMS</text>
                <text className={styles.joinOurTeams}>Our Teams</text>
                <div className={styles.teamsGrid}>
                    {Teams.map((team, index) => (
                        <Team teamProps={team} key={team.area} onClick={() => handleTeamMemberClick(index)} />
                    ))}
                </div>
            </div>

        </Layout>
    )
}

function BoardMember({ boardMemberProps, index, onClick }: {
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
                <div className={styles.boardCard} />
                <img className={styles.boardMemberImage} src={boardMemberProps.imageSrc} alt={boardMemberProps.name} loading="lazy" />
            </div>
            <text className={styles.boardMemberName}>{boardMemberProps.name}</text>
            <text className={styles.boardMemberRole}>{boardMemberProps.role}</text>
        </div>
    );
}

function Team({ teamProps, onClick }: { teamProps: TeamProps, onClick: () => void }) {
    return (
        <div className={styles.team} onClick={onClick}>
            <img className={styles.teamRespImage} src={teamProps.imageSrc} alt={teamProps.imageSrc} />
            <div className={styles.teamTextBox}>
                <text className={styles.peopleOf}>people of</text>
                <text className={styles.teamArea}>{teamProps.area}</text>
                <text className={styles.teamDescription}>{teamProps.description}</text>
            </div>
        </div>
    )
}

function TeamPopUp({ index, visible, disablePopUp }: { index: number, visible: Boolean, disablePopUp: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRefFirst = useRef<HTMLDivElement>(null);
    const contentRefSecond = useRef<HTMLDivElement>(null);
    const [pageIndex, setPageIndex] = useState(0);
    const [numPages, setNumPages] = useState(0);
    const [firstRow, setFirstRow] = useState<TeamMemberProps[]>([]);
    const [secondRow, setSecondRow] = useState<TeamMemberProps[]>([]);
    const [team, setTeam] = useState(Teams[index]);
    const [numPeople, setNumPeople] = useState(4);

    useEffect(() => {
        let newTeam = Teams[index];
        let fRow: TeamMemberProps[] = [];
        let sRow: TeamMemberProps[] = [];
        const memberswithpictures = newTeam.members.filter(member => member.imageSrc !== undefined);
        const memberswithoutpictures = newTeam.members.filter(member => member.imageSrc === undefined);

        const sortedMembers = [...memberswithpictures, ...memberswithoutpictures];

        if (newTeam.members.length <= numPeople) {
            fRow = sortedMembers;
        } else if (newTeam.members.length <= numPeople*2) {
            fRow = sortedMembers.slice(0, numPeople);
            sRow = sortedMembers.slice(numPeople);
        } else {
            let n = Math.ceil(sortedMembers.length / 2);
            if (memberswithpictures.length > numPeople*2) {
                fRow = memberswithpictures.slice(0, Math.ceil(memberswithpictures.length / 2));
                sRow = memberswithpictures.slice(Math.ceil(memberswithpictures.length / 2));
                let l = fRow.length;
                fRow = [...fRow, ...memberswithoutpictures.slice(0, n - l)];
                sRow = [...sRow, ...memberswithoutpictures.slice(n - l)];
            } else {
                fRow = memberswithpictures.slice(0, numPeople);
                sRow = memberswithpictures.slice(numPeople);
                let l = fRow.length;
                fRow = [...fRow, ...memberswithoutpictures.slice(0, n - l)];
                sRow = [...sRow, ...memberswithoutpictures.slice(n - l)];
            }
        }

        if (contentRefFirst.current && contentRefSecond.current) {
            contentRefFirst.current.style.left = `30px`;
            contentRefSecond.current.style.left = `30px`;
        }
        setTeam(newTeam);
        setFirstRow(fRow);
        setSecondRow(sRow);
        setNumPages(Math.ceil(fRow.length / numPeople));
        setPageIndex(0);
    }, [index, visible, numPeople]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1050) {
                setNumPeople(4);
            } else if (window.innerWidth > 800) {
                setNumPeople(3);
            } else {
                setNumPeople(2);
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLeftClick = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        if (contentRefFirst.current && contentRefSecond.current && containerRef.current) {
            contentRefFirst.current.style.left = `${30 - ((containerRef.current.offsetWidth - 30) * (pageIndex - 1))}px`;
            contentRefSecond.current.style.left = `${30 - ((containerRef.current.offsetWidth - 30) * (pageIndex - 1))}px`;
            setPageIndex(pageIndex - 1);
        }
    }

    const handleRightClick = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        if (contentRefFirst.current && contentRefSecond.current && containerRef.current) {
            contentRefFirst.current.style.left = `${30 - ((containerRef.current.offsetWidth - 30) * (pageIndex + 1))}px`;
            contentRefSecond.current.style.left = `${30 - ((containerRef.current.offsetWidth - 30) * (pageIndex + 1))}px`;
            setPageIndex(pageIndex + 1);
        }
    }

    const handleClosePupUp = () => {
        if (contentRefFirst.current && contentRefSecond.current) {
            contentRefFirst.current.style.left = `30px`;
            contentRefSecond.current.style.left = `30px`;
        }
        setPageIndex(0);
        disablePopUp();
    }

    return (
        <div className={styles.popUpBackground} onClick={handleClosePupUp} style={{ visibility: visible ? 'visible' : 'hidden' }}>
            <div className={styles.teamPopUp}>
                <div className={styles.teamHeader}>
                    <div className={styles.teamHeaderLeft}>
                        <div className={styles.managerPopUpImageContainer}>
                            <img className={styles.managerImage} alt={`Coordinators of ${team.area} area`}
                                 src={team.imageSrc} width={'100px'} height={'100px'}/>
                        </div>
                        <div className={styles.managerName}>{team.managers[0].name + (team.managers.length > 1 ? ' &' : '')}</div>
                        {team.managers.length > 1 &&
                            <div className={styles.managerName}>{team.managers[1].name}</div>
                        }
                        <div className={styles.managerTitleLink}>
                            <div className={styles.managerTitle}>Area manager{team.managers.length > 1 ? 's' : ''}</div>
                            <div className={styles.managersLinkedin}>
                                {team.managers.map(manager => {
                                        return (manager.linkedIn &&
                                            <div className={styles.linkIcon}>
                                                <a className={styles.linkIcon} href={manager.linkedIn}>
                                                    <img className={styles.linkIcon__icon} src={"/Icons/linkedin_logo_blue.png"}
                                                         alt="LinkedIn Icon"/>
                                                </a>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.teamHeaderRight}>
                        <h2 className={styles.teamPopUp__Title}>We are {team.area}</h2>
                        <text className={styles.teamPopUp__Description}>{team.description}</text>
                    </div>
                </div>
                <div className={styles.teamContainer} ref={containerRef}>
                    {pageIndex > 0  && <ArrowButton className={`${styles.teamContainer__button} ${styles.teamContainer__button__left}`} size={37} onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleLeftClick(e)} color={'#FFFFFF'} left/>}
                    <div className={styles.teamRow} ref={contentRefFirst}>
                        {firstRow.map((member: TeamMemberProps) =>
                            <TeamMember key={member.name} member={member}/>
                        )}
                    </div>
                    <div className={styles.teamRowTwo} ref={contentRefSecond}>
                        {secondRow.map((member: TeamMemberProps) =>
                            <TeamMember key={member.name} member={member}/>
                        )}
                    </div>
                    {pageIndex < numPages-1 && <ArrowButton className={`${styles.teamContainer__button} ${styles.teamContainer__button__right}`} size={37} onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleRightClick(e)} color={'#FFFFFF'} right/>}
                </div>
            </div>
        </div>
    )
}

function TeamMember({member } : {member : TeamMemberProps}) {
    const [imageExists, setImageExists] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = member.imageSrc || "";
        img.onload = () => setImageExists(true);
    }, []);

    return (
        <div className={styles.teamMember}>
            <div className={styles.memberPopUpImageContainer}>
                {imageExists ?
                    <img className={styles.memberPopUpImage} src={member.imageSrc}
                         alt={member.name} loading="lazy"/>
                    :
                    <img className={styles.memberPlaceholderImage} src="/Common/hkn_ideogramma_blu.svg" alt={member.name} loading="lazy"/>
                }
            </div>
            <text className={styles.memberName}>{member.name}</text>
            <div className={styles.memberRoleLink}>
                <text className={styles.memberTitle}>MEMBER</text>
                {member.linkedIn &&
                    <div className={styles.memberRoleLink__linkIcon}>
                        <a className={styles.memberRoleLink__linkIcon} href={member.linkedIn}>
                            <img className={styles.linkIcon__icon} src={"/Icons/linkedin_logo_blue.png"}
                                 alt="LinkedIn Icon"/>
                        </a>
                    </div>
                }
            </div>
        </div>
    );
}

export interface TeamMemberProps {
    name: string,
    imageSrc?: string,
    linkedIn?: string,
}

export interface BoardMemberProps {
    name: string;
    role: string;
    imageSrc: string;
    linkedIn?: string;
    roleDescription: string;
}

export interface TeamProps {
    area: string;
    longName: string;
    description: string;
    imageSrc: string;
    managers: TeamMemberProps[];
    members: TeamMemberProps[];
}
