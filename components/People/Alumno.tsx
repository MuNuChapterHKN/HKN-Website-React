import styles from "@/styles/components/People/Alumno.module.scss";
import {AlumnoProps} from "@/pages/People/Alumni";
import {useEffect, useRef, useState} from "react";

export enum BadgeType {
    Head,
    Board,
    Inducted
}

export default function Alumno({ alumno, index, onClick, active }: {
    alumno: AlumnoProps,
    index: number,
    onClick: () => void,
    active: boolean,
}) {
    const contentRefPar = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [transitioning, setTransitioning] = useState<boolean>(false);

    useEffect(() => {
        if (transitioning && active) {
            setTimeout(() => {
                if (active && contentRef.current) {
                    const measuredHeight = contentRef.current.scrollHeight;
                    contentRef.current.style.height = measuredHeight + 'px';
                }
                setTransitioning(false);
            }, 400);
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
        <div className={`${styles.alumno} ${active ? styles.alumno__active : ''}`} onClick={onClick} ref={contentRefPar}>
            <div className={`${styles.alumno__imagecontainer} ${active ? styles.alumno__imagecontainer__active : ''}`}>
                <div className={`${styles.alumno__imagecontainer__mask}`}>
                    <img className={`${styles.alumno__imagecontainer__image} ${active ? styles.alumno__imagecontainer__image__active : ''}`} src={alumno.imageSrc} alt={alumno.name} loading="lazy"/>
                </div>
            </div>
            <text className={styles.alumno__name}>{alumno.name}</text>
            {alumno.linkedIn && alumno.linkedIn !== "" &&
                <a className={`${styles.alumno__linkedin} ${active ? styles.alumno__linkedin__active : ''}`} href={alumno.linkedIn}>
                    <img className={`${styles.alumno__linkedin__icon}  ${active ? styles.alumno__linkedin__icon__active : ''}`} src="/Icons/linkedin_logo_blue.png" alt="LinkedIn"/>
                </a>
            }
            {alumno.badges && alumno.badges.length > 0 &&
                <div className={`${active ? styles.alumno__badges__active : styles.alumno__badges}`} ref={contentRef}>
                    {alumno.badges?.map((badge, index) => (
                        <AlumnoBadge key={index} badge={badge} active={active}/>
                    ))}
                </div>
            }
        </div>
);
}

function AlumnoBadge({
    badge, active
}: {
    badge: Badge, active: Boolean }) {
    let style: string = "";
    let letter : string = "";
    let title: string = "";
    switch (badge.type) {
        case BadgeType.Head:
            style = styles.alumno__badgeRow__badge__head;
            letter = "H";
            title = "Head";
            break;
        case BadgeType.Board:
            style = styles.alumno__badgeRow__badge__board;
            letter = "B";
            title = "Board";
            break;
        case BadgeType.Inducted:
            style = styles.alumno__badgeRow__badge__inducted;
            letter = "I";
            title = "Inducted";
            break;
    }
    return (
        <div className={`${styles.alumno__badgeRow} ${active ? styles.alumno__badgeRow__active : ''}`}>
            <div className={`${styles.alumno__badgeRow__badge} ${style} ${active ? styles.alumno__badgeRow__badge__active : ''}`}>
                <text>{letter}</text>
            </div>
            {active &&
                <>
                    <div className={styles.alumno__badgeRow__textcol}>
                        <text className={styles.alumno__badgeRow__title}>{title}</text>
                        <text className={styles.alumno__badgeRow__role}>{badge.role}</text>
                    </div>
                    <text className={styles.alumno__badgeRow__year}>{badge.year}</text>
                </>
            }
        </div>
    );
}

export interface Badge {
    type: BadgeType,
    year: number,
    role: string,
}
