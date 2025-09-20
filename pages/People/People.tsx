import Layout from "../../components/Layout";
import styles from '@/styles/People/People.module.scss'
import RoundButton from "@/components/molecules/RoundButton";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useContext, useEffect, useRef, useState } from "react";
import ArrowButton from "@/components/molecules/ArrowButton";
import { fetchBoard, fetchTeams } from "../api/directus";
import { Feature, FeatureFlagsContext } from "../_app";

export default function People() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800); // o 768px, a seconda del tuo breakpoint
        };

        handleResize(); // inizializza al primo render
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const [Teams, setTeams] = useState<TeamProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTeams();
            setTeams(data);
        };
        fetchData();
    }, []);

    const [Board, setBoard] = useState<BoardMemberProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchBoard();
            setBoard(data);
        };
        fetchData();
    }, []);

    const router = useRouter();
    const [boardIndex, setBoardIndex] = useState(0);
    const [teamIndex, setTeamIndex] = useState(0);
    const [boardPopUpVisible, setBoardPopUpVisible] = useState(false);
    const [teamPopUpVisible, setTeamPopUpVisible] = useState(false);
    const featureFlags = useContext(FeatureFlagsContext);

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
                        <BoardMember boardMemberProps={bmp}
                            index={index}
                            key={index}
                            onClick={() => handleBoardMemberClick(index)} />
                    ))}
                </div>
            </div>

            {featureFlags[Feature.ShowTeams] && (
                <>
                    <TeamPopUp index={teamIndex} visible={teamPopUpVisible} disablePopUp={handleHideTeamPopUp} teams={Teams} isMobile={isMobile} />
                    <div className={styles.teamsContainer}>
                        <text className={styles.theTeams}>THE TEAMS</text>
                        <text className={styles.joinOurTeams}>Our Teams</text>
                        <div className={styles.teamsGrid}>
                            {Teams.map((team, index) => (
                                <Team teamProps={team} key={team.area} onClick={() => featureFlags[Feature.ShowTeamsPopups] && handleTeamMemberClick(index)} />
                            ))}
                        </div>
                    </div>
                </>)}

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
    const featureFlags = useContext(FeatureFlagsContext);

    return (
        <div className={styles.team} onClick={onClick}>
            {featureFlags[Feature.ShowTeamsRespPics] && (
                <img className={styles.teamRespImage} src={teamProps.imageSrc} alt={teamProps.imageSrc} />
            )}
            <div className={styles.teamTextBox}>
                <text className={styles.peopleOf}>people of</text>
                <text className={styles.teamArea}>{teamProps.area}</text>
                <text className={styles.teamDescription}>{teamProps.description}</text>
            </div>
        </div>
    )
}

function TeamPopUp({ index, visible, disablePopUp, teams, isMobile }: { index: number, visible: Boolean, disablePopUp: () => void, teams: TeamProps[], isMobile: boolean }) {

    const Teams = teams;

    const containerRef = useRef<HTMLDivElement>(null);
    const contentRefFirst = useRef<HTMLDivElement>(null);
    const contentRefSecond = useRef<HTMLDivElement>(null);
    const [pageIndex, setPageIndex] = useState(0);
    const [numPages, setNumPages] = useState(0);
    const [firstRow, setFirstRow] = useState<TeamMemberProps[]>([]);
    const [secondRow, setSecondRow] = useState<TeamMemberProps[]>([]);
    const [team, setTeam] = useState(Teams[index]);
    const [numPeople, setNumPeople] = useState(6);

    useEffect(() => {
        if (Teams.length > 0) {
            let newTeam = Teams[index];
            let fRow: TeamMemberProps[] = [];
            let sRow: TeamMemberProps[] = [];
            const memberswithpictures = newTeam.members.filter(member => member.imageSrc !== undefined);
            const memberswithoutpictures = newTeam.members.filter(member => member.imageSrc === undefined);

            const sortedMembers = [...memberswithpictures, ...memberswithoutpictures];

            if (newTeam.members.length <= numPeople) {
                fRow = sortedMembers;
            } else if (newTeam.members.length <= numPeople * 2) {
                fRow = sortedMembers.slice(0, numPeople);
                sRow = sortedMembers.slice(numPeople);
            } else {
                let n = Math.ceil(sortedMembers.length / 2);
                if (memberswithpictures.length > numPeople * 2) {
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
        }
    }, [index, visible, numPeople]);

    useEffect(() => {
        const handleResize = () => {
            const updateNumPeople = () => {
                if (window.innerWidth > 1050) {
                    setNumPeople(4);
                } else if (window.innerWidth > 800) {
                    setNumPeople(3);
                } else {
                    setNumPeople(6);
                }
            };

            updateNumPeople(); // Call the function on initial load
            window.addEventListener('resize', updateNumPeople); // Update on resize

            return () => {
                window.removeEventListener('resize', updateNumPeople); // Cleanup on unmount
            };
        };
        handleResize(); // Call the function on initial load

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

    return !team ? null : (
        <div
            className={styles.popUpBackground}
            onClick={handleClosePupUp}
            style={{ visibility: visible ? 'visible' : 'hidden' }}
        >
            <div className={styles.teamPopUp} onClick={(e) => e.stopPropagation()}>
                <div className={styles.teamHeader}>
                    <div className={styles.teamHeaderLeft}>
                        <div className={styles.managerDetails}>
                            <div className={styles.managerPopUpImageContainer}>
                                <img
                                    className={styles.managerImage}
                                    alt={`Coordinators of ${team.area} area`}
                                    src={team.imageSrc}
                                    width={'100px'}
                                    height={'100px'}
                                />
                            </div>

                            {team.managers.map((m, i) => (
                                <div key={i} className={styles.managerName}>
                                    {m.name}
                                    {i < team.managers.length - 1 ? ' &' : ''}
                                </div>
                            ))}

                            <div className={styles.managerTitleLink}>
                                <div className={styles.managerTitle}>
                                    Area manager{team.managers.length > 1 ? 's' : ''}
                                </div>
                                <div className={styles.managersLinkedin}>
                                    {team.managers.map(
                                        (m, i) =>
                                            m.linkedIn && (
                                                <div key={i} className={styles.linkIcon}>
                                                    <a className={styles.linkIcon} href={m.linkedIn}>
                                                        <img
                                                            className={styles.linkIcon__icon}
                                                            src="/Icons/linkedin_logo_blue.png"
                                                            alt="LinkedIn Icon"
                                                        />
                                                    </a>
                                                </div>
                                            )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Arrow buttons aligned right */}
                    </div>

                    <div className={styles.teamHeaderRight}>
                        <h2 className={styles.teamPopUp__Title}>We are {team.area}</h2>
                        <text className={styles.teamPopUp__Description}>{team.description}</text>
                    </div>
                </div>

                <div className={styles.teamContainer} ref={containerRef}>
                    {pageIndex > 0 && !isMobile && (
                        <ArrowButton
                            className={`${styles.teamContainer__button} ${styles.teamContainer__button__left} `}
                            size={37}
                            onClick={(e: React.MouseEvent) => handleLeftClick(e)}
                            color={'#FFFFFF'}
                            left
                        />
                    )}

                    {isMobile && chunkArray(firstRow, 3).map((group, i) => (
                        <div key={i} className={styles.teamRow}>
                            {group.map((member: TeamMemberProps) => (
                                <TeamMember key={member.name} member={member} />
                            ))}
                        </div>
                    ))}

                    {isMobile && chunkArray(secondRow, 3).map((group, i) => (
                        <div key={i} className={styles.teamRowTwo}>
                            {group.map((member: TeamMemberProps) => (
                                <TeamMember key={member.name} member={member} />
                            ))}
                        </div>
                    ))}

                    {!isMobile && (
                        <>
                            <div className={styles.teamRow} ref={contentRefFirst}>
                                {firstRow.map((member: TeamMemberProps) => (
                                    <TeamMember key={member.name} member={member} />
                                ))}
                            </div>

                            <div className={styles.teamRowTwo} ref={contentRefSecond}>
                                {secondRow.map((member: TeamMemberProps) => (
                                    <TeamMember key={member.name} member={member} />
                                ))}
                            </div>
                        </>
                    )}


                    {pageIndex < numPages - 1 && !isMobile && (
                        <ArrowButton
                            className={`${styles.teamContainer__button} ${styles.teamContainer__button__right}`}
                            size={37}
                            onClick={(e: React.MouseEvent) => handleRightClick(e)}
                            color={'#FFFFFF'}
                            right
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

function chunkArray<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}


function TeamMember({ member }: { member: TeamMemberProps }) {
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
                        alt={member.name} loading="lazy" />
                    :
                    <img className={styles.memberPlaceholderImage} src="/Common/hkn_ideogramma_blu.svg" alt={member.name} loading="lazy" />
                }
            </div>
            <text className={styles.memberName}>{member.name}</text>
            <div className={styles.memberRoleLink}>
                <text className={styles.memberTitle}>MEMBER</text>
                {member.linkedIn &&
                    <div className={styles.memberRoleLink__linkIcon}>
                        <a className={styles.memberRoleLink__linkIcon} href={member.linkedIn}>
                            <img className={styles.linkIcon__icon} src={"/Icons/linkedin_logo_blue.png"}
                                alt="LinkedIn Icon" />
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
