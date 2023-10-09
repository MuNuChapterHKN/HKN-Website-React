import styles from "../../styles/components/AboutUs/SectionAboutUs.module.scss";
import {useEffect, useRef, useState} from "react";

const yearWidth = 240;
const yearHeight = 100;

export type SectionAboutUsElement = {
    title: string,
    description: string,
    year: string,
}

type SectionAboutUsProps = {
    section: SectionAboutUsElement,
    left?: boolean,
    right?: boolean,
    end?: boolean,
    children?: React.ReactNode
}
export default function SectionAboutUs({ section, left = false, right = false, end = false, children }: SectionAboutUsProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const [svgHeight, setSvgHeight] = useState(0);
    const [parentWidth, setParentWidth] = useState(0);

    useEffect(() => {
        if (svgRef.current && svgRef.current.parentElement) {
            const parentHeight = svgRef.current.parentElement.clientHeight;
            svgRef.current.setAttribute('height', `${parentHeight}px`);
            setSvgHeight(parentHeight);
            setParentWidth(svgRef.current.parentElement.clientWidth);

        }
    }, [svgRef]);


    console.log(parentWidth)
    if (right) {
        return (
            <div className={`${styles.section} ${right ? styles.section__right : styles.section__left}`}>
                <div className={styles.section__images}>
                    {children}
                </div>

                <div className={styles.section__texts}>
                    <div className={styles.section__texts__title}>{section.title}</div>
                    <div className={styles.section__texts__description}>{section.description}</div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width={yearWidth} fill="none" ref={svgRef}>
                    <line y1="0" x1="104" y2={(svgHeight - yearHeight) * 0.5} x2="104" stroke="#64758C" stroke-width="8"/>
                    <line y1="0" x1="120" y2={(svgHeight - yearHeight) * 0.5 + 4} x2="120" stroke="#7A8698" stroke-width="8"/>
                    <line y1="0" x1="136" y2={(svgHeight - yearHeight) * 0.5} x2="136" stroke="#929AA6" stroke-width="8"/>

                    <path d={`M ${yearWidth/2 - 12} ${(svgHeight - yearHeight) * 0.5} H 24 A 24 24 90 0 0 4 ${(svgHeight - yearHeight) * 0.5 + 24} V ${(svgHeight + yearHeight) * 0.5 - 20} A 20 20 90 0 0 24 ${(svgHeight + yearHeight) * 0.5} H ${yearWidth/2 - 12}`} stroke="#64758C" stroke-width="8"/>
                    <path d={`M ${yearWidth/2 + 12} ${(svgHeight - yearHeight) * 0.5} H ${yearWidth - 24} A 24 24 90 0 1 ${yearWidth - 4} ${(svgHeight - yearHeight) * 0.5 + 24} V ${(svgHeight + yearHeight) * 0.5 - 20} A 20 20 90 0 1 ${yearWidth - 24} ${(svgHeight + yearHeight) * 0.5} H ${yearWidth/2 + 12}`} stroke="#929AA6" stroke-width="8"/>


                    {!end && <line y1={(svgHeight + yearHeight) * 0.5} x1="104" y2={svgHeight} x2="104" stroke="#64758C" stroke-width="8"/>}
                    {!end && <line y1={(svgHeight + yearHeight) * 0.5 - 4} x1="120" y2={svgHeight} x2="120" stroke="#7A8698" stroke-width="8"/>}
                    {!end && <line y1={(svgHeight + yearHeight) * 0.5} x1="136" y2={svgHeight} x2="136" stroke="#929AA6 " stroke-width="8"/>}
                </svg>
                <div className={`${styles.section__year} ${styles.section__year__right}`}>{section.year}</div>

                {!end &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" style={{position: "absolute", bottom: -40}}>
                        <line y1="36" x1="0" y2="36" x2="200" stroke="#929AA6" stroke-width="8"/>
                        <line y1="20" x1="0" y2="20" x2="200" stroke="#7A8698" stroke-width="8"/>
                        <line y1="4" x1="0" y2="4" x2="200" stroke="#64758C" stroke-width="8"/>
                    </svg>
                }
            </div>
        )
    } else {

        return (
            <div className={`${styles.section} ${right ? styles.section__right : styles.section__left}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={yearWidth} fill="none" ref={svgRef}>
                    <line y1="0" x1="104" y2={(svgHeight - yearHeight) * 0.5} x2="104" stroke="#64758C" stroke-width="8"/>
                    <line y1="0" x1="120" y2={(svgHeight - yearHeight) * 0.5 + 4} x2="120" stroke="#7A8698" stroke-width="8"/>
                    <line y1="0" x1="136" y2={(svgHeight - yearHeight) * 0.5} x2="136" stroke="#929AA6" stroke-width="8"/>

                    <path d={`M ${yearWidth/2 - 12} ${(svgHeight - yearHeight) * 0.5} H 24 A 24 24 90 0 0 4 ${(svgHeight - yearHeight) * 0.5 + 24} V ${(svgHeight + yearHeight) * 0.5 - 20} A 20 20 90 0 0 24 ${(svgHeight + yearHeight) * 0.5} H ${yearWidth/2 - 12}`} stroke="#64758C" stroke-width="8"/>
                    <path d={`M ${yearWidth/2 + 12} ${(svgHeight - yearHeight) * 0.5} H ${yearWidth - 24} A 24 24 90 0 1 ${yearWidth - 4} ${(svgHeight - yearHeight) * 0.5 + 24} V ${(svgHeight + yearHeight) * 0.5 - 20} A 20 20 90 0 1 ${yearWidth - 24} ${(svgHeight + yearHeight) * 0.5} H ${yearWidth/2 + 12}`} stroke="#929AA6" stroke-width="8"/>

                    <line y1={(svgHeight + yearHeight) * 0.5} x1="104" y2={svgHeight} x2="104" stroke="#64758C" stroke-width="8"/>
                    <line y1={(svgHeight + yearHeight) * 0.5 - 4} x1="120" y2={svgHeight} x2="120" stroke="#7A8698" stroke-width="8"/>
                    <line y1={(svgHeight + yearHeight) * 0.5} x1="136" y2={svgHeight} x2="136" stroke="#929AA6 " stroke-width="8"/>
                </svg>

                <div className={styles.section__texts}>
                    <div className={styles.section__texts__title}>{section.title}</div>
                    <div className={styles.section__texts__description}>{section.description}</div>
                </div>
                <div className={styles.section__images}>
                    {children}
                </div>
                <div className={styles.section__year}>{section.year}</div>

                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="40" fill="none" style={{position: "absolute", bottom: -40}}>
                    <line y1="36" x1="100" y2="36" x2="200" stroke="#929AA6" stroke-width="8"/>
                    <line y1="20" x1="100" y2="20" x2="200" stroke="#7A8698" stroke-width="8"/>
                    <line y1="4" x1="100" y2="4" x2={parentWidth} stroke="#64758C" stroke-width="8"/>
                </svg>
            </div>
        )
    }
}
