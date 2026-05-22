import styles from '@/styles/components/People/Alumno.module.scss';
import { AlumnoProps } from '@/pages/People/Alumni';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useImageExists } from '@/hooks/useImageExists';
import { sortBadgesByType } from '@/utils/people';

export enum BadgeType {
  Board,
  Head,
  Inducted,
}

export default function Alumno({
  alumno,
  onClick,
  active,
}: {
  alumno: AlumnoProps;
  onClick: () => void;
  active: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const imageExists = useImageExists(alumno.imageSrc);
  const sortedBadges = useMemo(() => sortBadgesByType(alumno.badges ?? []), [alumno.badges]);

  useEffect(() => {
    if (transitioning && active) {
      const timeout = setTimeout(() => {
        if (active && contentRef.current) {
          const measuredHeight = contentRef.current.scrollHeight;
          contentRef.current.style.height = measuredHeight + 'px';
        }
        setTransitioning(false);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [transitioning, active]);

  useEffect(() => {
    if (active) {
      setTransitioning(true);
      if (contentRef.current) {
        contentRef.current.style.height = 'auto';
      }
    } else {
      setTransitioning(true);
      if (contentRef.current) {
        contentRef.current.style.height = '40px';
      }
    }
  }, [active]);

  return (
    <div className={`${styles.alumno} ${active ? styles.alumno__active : ''}`} onClick={onClick}>
      <div
        className={`${styles.alumno__imagecontainer} ${active && imageExists ? styles.alumno__imagecontainer__active : ''}`}
      >
        {alumno.imageSrc && (
          <div className={`${styles.alumno__imagecontainer__mask}`}>
            {imageExists ? (
              <img
                className={`${styles.alumno__imagecontainer__image} ${active ? styles.alumno__imagecontainer__image__active : ''}`}
                src={alumno.imageSrc}
                alt={alumno.name}
                loading="lazy"
              />
            ) : (
              <img
                className={`${styles.alumno__imagecontainer__placeholder} ${active ? styles.alumno__imagecontainer__placeholder__active : ''}`}
                src="/Common/hkn_ideogramma_blu.svg"
                alt={alumno.name}
              />
            )}
          </div>
        )}
      </div>
      <span className={styles.alumno__name}>{alumno.name}</span>
      {alumno.linkedIn && alumno.linkedIn !== '' && (
        <a
          className={`${styles.alumno__linkedin} ${active ? styles.alumno__linkedin__active : ''}`}
          href={alumno.linkedIn}
        >
          <img
            className={`${styles.alumno__linkedin__icon}  ${active ? styles.alumno__linkedin__icon__active : ''}`}
            src="/Icons/linkedin_logo_blue.png"
            alt="LinkedIn"
          />
        </a>
      )}
      {alumno.badges && alumno.badges.length > 0 && (
        <div
          className={`${active ? styles.alumno__badges__active : styles.alumno__badges}`}
          ref={contentRef}
        >
          {sortedBadges.map((badge, index) => (
            <AlumnoBadge key={index} badge={badge} active={active} />
          ))}
        </div>
      )}
    </div>
  );
}

function AlumnoBadge({ badge, active }: { badge: Badge; active: Boolean }) {
  let style: string = '';
  let letter: string = '';
  let title: string = '';
  switch (badge.type) {
    case BadgeType.Head:
      style = styles.alumno__badgeRow__badge__head;
      letter = 'H';
      title = 'Head';
      break;
    case BadgeType.Board:
      style = styles.alumno__badgeRow__badge__board;
      letter = 'B';
      title = 'Board';
      break;
    case BadgeType.Inducted:
      style = styles.alumno__badgeRow__badge__inducted;
      letter = 'I';
      title = 'Inducted';
      break;
  }

  return (
    <div className={`${styles.alumno__badgeRow} ${active ? styles.alumno__badgeRow__active : ''}`}>
      <div
        className={`${styles.alumno__badgeRow__badge} ${style} ${active ? styles.alumno__badgeRow__badge__active : ''}`}
      >
        <span>{letter}</span>
      </div>
      {active && (
        <>
          <div className={styles.alumno__badgeRow__textcol}>
            <span className={styles.alumno__badgeRow__title}>{title}</span>
            {badge.role && <span className={styles.alumno__badgeRow__role}>{badge.role}</span>}
          </div>
          <span
            className={`${styles.alumno__badgeRow__year} ${badge.role === undefined ? styles.alumno__badgeRow__year__centered : ''}`}
          >
            {badge.year}
          </span>
        </>
      )}
    </div>
  );
}

export interface Badge {
  type: BadgeType;
  year: number;
  role?: string;
}
