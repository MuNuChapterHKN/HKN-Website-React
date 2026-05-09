import Layout from '@/components/Layout';
import styles from '@/styles/People/PastBoards.module.scss';
import { fetchPastBoards } from '../api/directus';
import { T } from '@tolgee/react';
import { useAsyncData } from '@/hooks/useAsyncData';
import { useImageExists } from '@/hooks/useImageExists';

export default function PastBoards() {
  const PastBoardsData = useAsyncData(fetchPastBoards, [] as PastBoardProps[]);

  return (
    <Layout triangles>
      <span className={styles.title}>
        <T keyName="past_boards.title" />
      </span>
      {PastBoardsData.map((pastBoard, index) => (
        <PastBoard year={pastBoard.year} members={pastBoard.members} key={index} />
      ))}
    </Layout>
  );
}

function PastBoard({ year, members }: PastBoardProps) {
  return (
    <div className={styles.pastboard}>
      <span className={styles.pastboard__year}>{year}</span>
      <div className={styles.pastboard__members}>
        {members.map((boardMember, index) => (
          <BoardMember boardMemberProps={boardMember} key={index} />
        ))}
      </div>
    </div>
  );
}

function BoardMember({ boardMemberProps }: { boardMemberProps: PastBoardMemberProps }) {
  const imageExists = useImageExists(boardMemberProps.imageSrc);

  return (
    <div className={styles.boardMember}>
      <div className={styles.boardMember__imageContainer}>
        <div className={styles.boardMember__imageContainer__mask}>
          {boardMemberProps.imageSrc && imageExists ? (
            <img
              className={styles.boardMember__imageContainer__image}
              src={boardMemberProps.imageSrc}
              alt={boardMemberProps.name}
              loading="lazy"
            />
          ) : (
            <img
              className={styles.boardMember__imageContainer__placeholder}
              src="/Common/hkn_ideogramma_blu.svg"
              alt={boardMemberProps.name}
              loading="lazy"
            />
          )}
        </div>
      </div>
      <span className={styles.boardMember__name}>{boardMemberProps.name}</span>
      <span className={styles.boardMember__role}>{boardMemberProps.role}</span>
    </div>
  );
}

export interface PastBoardProps {
  year: string;
  members: PastBoardMemberProps[];
}

export interface PastBoardMemberProps {
  name: string;
  role: string;
  imageSrc?: string;
}
