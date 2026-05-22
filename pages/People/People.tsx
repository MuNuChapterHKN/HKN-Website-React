import Layout from '../../components/Layout';
import styles from '@/styles/People/People.module.scss';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import ArrowButton from '@/components/molecules/ArrowButton';
import { fetchBoard, fetchTeams } from '../api/directus';
import { Feature, FeatureFlagsContext } from '../_app';
import { T, useTranslate } from '@tolgee/react';
import { useAsyncData } from '@/hooks/useAsyncData';
import { useImageExists } from '@/hooks/useImageExists';
import { useMaxWidth, useTeamMembersPerPage } from '@/hooks/useResponsivePeople';
import { chunkArray, splitTeamMembers } from '@/utils/people';

export default function People() {
  const isMobile = useMaxWidth(800);
  const Teams = useAsyncData(fetchTeams, [] as TeamProps[]);
  const Board = useAsyncData(fetchBoard, [] as BoardMemberProps[]);
  const [teamIndex, setTeamIndex] = useState(0);
  const [teamPopUpVisible, setTeamPopUpVisible] = useState(false);
  const featureFlags = useContext(FeatureFlagsContext);

  useEffect(() => {
    if (!teamPopUpVisible) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [teamPopUpVisible]);

  const handleTeamMemberClick = (index: number) => {
    setTeamIndex(index);
    setTeamPopUpVisible(true);
  };

  const handleHideTeamPopUp = () => {
    setTeamPopUpVisible(false);
  };

  return (
    <Layout triangles>
      <div className={styles.boardContainer}>
        <span className={styles.theBoard}>
          <T keyName="people.board.kicker" />
        </span>
        <span className={styles.managementArea}>
          <T keyName="people.board.title" />
        </span>
        <div className={styles.boardGrid}>
          {Board.map((bmp, index) => (
            <BoardMember boardMemberProps={bmp} key={index} />
          ))}
        </div>
      </div>

      {featureFlags[Feature.ShowTeams] && (
        <>
          <TeamPopUp
            index={teamIndex}
            visible={teamPopUpVisible}
            disablePopUp={handleHideTeamPopUp}
            teams={Teams}
            isMobile={isMobile}
          />
          <div className={styles.teamsContainer}>
            <span className={styles.theTeams}>
              <T keyName="people.teams.kicker" />
            </span>
            <span className={styles.joinOurTeams}>
              <T keyName="people.teams.title" />
            </span>
            <div className={styles.teamsGrid}>
              {Teams.map((team, index) => (
                <Team
                  teamProps={team}
                  key={team.area}
                  onClick={() =>
                    featureFlags[Feature.ShowTeamsPopups] && handleTeamMemberClick(index)
                  }
                />
              ))}
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

function BoardMember({ boardMemberProps }: { boardMemberProps: BoardMemberProps }) {
  return (
    <div className={styles.boardMember}>
      <div className={styles.boardImageContainer}>
        <div className={styles.boardCard} />
        <img
          className={styles.boardMemberImage}
          src={boardMemberProps.imageSrc}
          alt={boardMemberProps.name}
          loading="lazy"
        />
      </div>
      <span className={styles.boardMemberName}>{boardMemberProps.name}</span>
      <span className={styles.boardMemberRole}>{boardMemberProps.role}</span>
    </div>
  );
}

function Team({ teamProps, onClick }: { teamProps: TeamProps; onClick: () => void }) {
  const featureFlags = useContext(FeatureFlagsContext);

  return (
    <div className={styles.team} onClick={onClick}>
      {featureFlags[Feature.ShowTeamsRespPics] && (
        <img className={styles.teamRespImage} src={teamProps.imageSrc} alt={teamProps.imageSrc} />
      )}
      <div className={styles.teamTextBox}>
        <span className={styles.peopleOf}>
          <T keyName="people.teams.card.kicker" />
        </span>
        <span className={styles.teamArea}>{teamProps.area}</span>
        <span className={styles.teamDescription}>{teamProps.description}</span>
      </div>
    </div>
  );
}

function TeamPopUp({
  index,
  visible,
  disablePopUp,
  teams,
  isMobile,
}: {
  index: number;
  visible: Boolean;
  disablePopUp: () => void;
  teams: TeamProps[];
  isMobile: boolean;
}) {
  const { t } = useTranslate();

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefFirst = useRef<HTMLDivElement>(null);
  const contentRefSecond = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const numPeople = useTeamMembersPerPage();
  const team = teams[index];
  const { firstRow, secondRow, numPages } = useMemo(
    () =>
      team
        ? splitTeamMembers(team.members, numPeople)
        : { firstRow: [], secondRow: [], numPages: 0 },
    [team, numPeople]
  );

  useEffect(() => {
    if (contentRefFirst.current && contentRefSecond.current) {
      contentRefFirst.current.style.left = `30px`;
      contentRefSecond.current.style.left = `30px`;
    }
    setPageIndex(0);
  }, [team, visible, numPeople]);

  const handleLeftClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    if (contentRefFirst.current && contentRefSecond.current && containerRef.current) {
      contentRefFirst.current.style.left = `${30 - (containerRef.current.offsetWidth - 30) * (pageIndex - 1)}px`;
      contentRefSecond.current.style.left = `${30 - (containerRef.current.offsetWidth - 30) * (pageIndex - 1)}px`;
      setPageIndex(pageIndex - 1);
    }
  };

  const handleRightClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    if (contentRefFirst.current && contentRefSecond.current && containerRef.current) {
      contentRefFirst.current.style.left = `${30 - (containerRef.current.offsetWidth - 30) * (pageIndex + 1)}px`;
      contentRefSecond.current.style.left = `${30 - (containerRef.current.offsetWidth - 30) * (pageIndex + 1)}px`;
      setPageIndex(pageIndex + 1);
    }
  };

  const handleClosePupUp = () => {
    if (contentRefFirst.current && contentRefSecond.current) {
      contentRefFirst.current.style.left = `30px`;
      contentRefSecond.current.style.left = `30px`;
    }
    setPageIndex(0);
    disablePopUp();
  };

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
                  alt={t('people.popup.manager_alt', { area: team.area })}
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
                  <T keyName="people.popup.manager_role" params={{ count: team.managers.length }} />
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
                              alt={t('common_2.linkedin_alt')}
                            />
                          </a>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.teamHeaderRight}>
            <h2 className={styles.teamPopUp__Title}>
              <T keyName="people.popup.title" params={{ area: team.area }} />
            </h2>
            <span className={styles.teamPopUp__Description}>{team.description}</span>
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

          {isMobile &&
            chunkArray(firstRow, 3).map((group, i) => (
              <div key={i} className={styles.teamRow}>
                {group.map((member: TeamMemberProps) => (
                  <TeamMember key={member.name} member={member} />
                ))}
              </div>
            ))}

          {isMobile &&
            chunkArray(secondRow, 3).map((group, i) => (
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

function TeamMember({ member }: { member: TeamMemberProps }) {
  const imageExists = useImageExists(member.imageSrc);
  const { t } = useTranslate();

  return (
    <div className={styles.teamMember}>
      <div className={styles.memberPopUpImageContainer}>
        {imageExists ? (
          <img
            className={styles.memberPopUpImage}
            src={member.imageSrc}
            alt={member.name}
            loading="lazy"
          />
        ) : (
          <img
            className={styles.memberPlaceholderImage}
            src="/Common/hkn_ideogramma_blu.svg"
            alt={member.name}
            loading="lazy"
          />
        )}
      </div>
      <span className={styles.memberName}>{member.name}</span>
      <div className={styles.memberRoleLink}>
        <span className={styles.memberTitle}>
          <T keyName="people.popup.member_role" />
        </span>
        {member.linkedIn && (
          <div className={styles.memberRoleLink__linkIcon}>
            <a className={styles.memberRoleLink__linkIcon} href={member.linkedIn}>
              <img
                className={styles.linkIcon__icon}
                src={'/Icons/linkedin_logo_blue.png'}
                alt={t('common_2.linkedin_alt')}
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export interface TeamMemberProps {
  name: string;
  imageSrc?: string;
  linkedIn?: string;
}

export interface BoardMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  linkedIn?: string;
}

export interface TeamProps {
  area: string;
  longName: string;
  description: string;
  imageSrc: string;
  managers: TeamMemberProps[];
  members: TeamMemberProps[];
}
