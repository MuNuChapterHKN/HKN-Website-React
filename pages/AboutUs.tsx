import Layout from "../components/Layout";
import styles from "../styles/AboutUs/AboutUs.module.scss";
import Gallery from "@/components/AboutUs/Gallery";
import SectionAboutUs, {SectionAboutUsElement} from "@/components/AboutUs/SectionAboutUs";
import {useEffect, useRef, useState} from "react";

const yearWidth = 240;
const yearHeight = 100;

const sections: SectionAboutUsElement[] = [
    {
        title: "HKN - the Founders",
        description: "Eta Kappa Nu was founded on October 28, 1904, as a national honor society for electrical engineering students at the University of Illinois at Urbana-Champaign. Maurice L. Carr and nine other college students formed the first chapter and developed a national structure. Their vision for the honor society combined collegiate commitment with a professional community to assist students and alumni, and to support such professions in general.",
        year: "1904",
    },
    {
        title: "IEEE-HKN - The Merge",
        description: "Starting from 2010, Eta Kappa Nu officially affiliated with IEEE as an organizational unit under the name IEEE-HKN. As a result of the merger, chapters are established internationally, and eligibility for membership is extended to all fields of interest within IEEE.",
        year: "2010",
    },
    {
        title: "Mu Nu Chapter - Installation",
        description: "In 2017, our chapter was founded thanks to the initiative of a brilliant student who quickly transformed an idea of a community into a real fraternity at the Polytechnic University of Turin. Right from the start, the association was established with the goal of providing internal training for members, free tutoring, and public events.",
        year: "2017",
    },
    {
        title: "Mu Nu Chapter - Today",
        description: "Today, the Mu Nu chapter of IEEE-HKN at the Polytechnic University of Turin is a vibrant reality carried forward by an ever-growing group of students passionate about computer science, electronics, and much more. For us, HKN represents a new way to acquire skills and knowledge while at the same time nurturing our passions in an inspiring and stimulating environment.",
        year: "2023",
    },

]
export default function AboutUs() {
    const sectionsRef = useRef<HTMLDivElement>(null);
    const [svgWidth, setSvgWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (sectionsRef.current) {
                setSvgWidth(sectionsRef.current.clientWidth);
            }
        };

        // Initialize
        handleResize();

        // Subscribe to window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [sectionsRef]);


    console.log(svgWidth)
    return (
        <Layout>
            <div className={styles.vision}>
                <div className={styles.vision__card}>

                    <div className={styles.vision__card__bull}>
                        <div className={styles.vision__card__bull__circle}>
                            <img src="/AboutUs/Vision/bull.png" className={styles.vision__card__bull__circle__img} alt="bull" />
                        </div>
                        <div className={styles.vision__card__bull__citation}>
                            <div className={styles.vision__card__bull__citation__text}>HKN IS THE PLACE WHERE I WAS ABLE TO IMPROVE MYSELF, ALLOWING ME TO GET INVOLVED AND BELIEVE IN MY POTENTIAL</div>
                            <div className={styles.vision__card__bull__citation__author}>Matteo Alasio - Student Governor 2023</div>
                            <div className={styles.vision__card__bull__citation__quotes}>
                                <img src="/AboutUs/Vision/quotes.png" className={styles.vision__card__bull__citation__quotes__img} alt="quotes" />
                            </div>

                            <div className={styles.vision__card__bull__citation__halo}/>
                        </div>
                    </div>

                    <div className={styles.vision__card__uptitle}>about us</div>
                    <div className={styles.vision__card__title}>We Are HKN</div>
                    <div className={styles.vision__card__description}> IEEE-HKN recognizes excellence among peers, encourages individual growth through education, and professional commitment in associative activities. The pillars on which our activities are based are:</div>

                    <div className={styles.vision__card__visions}>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/Vision/vision1.png" className={styles.vision__card__visions__col1__img} alt="AboutUs1" />
                        </div>
                        <div className={styles.vision__card__visions__col2}>Our skills are put to the service of the student community through the organization of study groups and masterclasses.</div>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/Vision/vision2.png" className={styles.vision__card__visions__col1__img} alt="AboutUs1" />
                        </div>
                        <div className={styles.vision__card__visions__col2}>The personal and professional growth we aim for with our activities is achieved through meetings with industry professionals and our network of alumni.</div>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/Vision/vision3.png" className={styles.vision__card__visions__col1__img} alt="AboutUs1" />
                        </div>
                        <div className={styles.vision__card__visions__col2}>Within the community, members manage various team-building activities aimed at ensuring a respectful, inclusive, and motivating atmosphere.</div>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/Vision/vision4.png" className={styles.vision__card__visions__col1__img} alt="AboutUs1" />
                        </div>
                        <div className={styles.vision__card__visions__col2}>Our chapter is part of an international network that brings together over 200 IEEE-HKN chapters, allowing members to network.</div>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="102" fill="none">
                <line y1="0" x1="4" y2="102" x2="4" stroke="#64758C" stroke-width="8"/>
                <line y1="0" x1="20" y2="102" x2="20" stroke="#7A8698" stroke-width="8"/>
                <line y1="0" x1="36" y2="102" x2="36" stroke="#929AA6" stroke-width="8"/>
            </svg>

            <Gallery className={styles.gallery}/>

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="230" fill="none">
                <line y1="0" x1="4" y2="230" x2="4" stroke="#64758C" stroke-width="8"/>
                <line y1="0" x1="20" y2="230" x2="20" stroke="#7A8698" stroke-width="8"/>
                <line y1="0" x1="36" y2="230" x2="36" stroke="#929AA6" stroke-width="8"/>
            </svg>

            <div className={styles.divider1}>
                <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height="40" fill="none" >
                    <path d={`M ${yearWidth/2 - 16} 40 A 36 36 90 0 1 ${yearWidth/2 + 20} 4 H ${svgWidth / 2 - 20} A 4 4 90 0 0 ${svgWidth / 2 - 16} 0`} stroke="#64758C" stroke-width="8"/>
                    <path d={`M ${yearWidth/2} 40 A 20 20 90 0 1 ${yearWidth/2 + 20} 20 H ${svgWidth / 2 - 20} A 20 20 90 0 0 ${svgWidth / 2} 0`} stroke="#7A8698" stroke-width="8"/>
                    <path d={`M ${yearWidth/2 + 16} 40 A 4 4 90 0 1 ${yearWidth/2 + 20} 36 H ${svgWidth / 2 - 20} A 36 36 90 0 0 ${svgWidth / 2 + 16} 0`} stroke="#929AA6" stroke-width="8"/>
                </svg>
            </div>

            <div className={styles.sections} ref={sectionsRef}>
                <SectionAboutUs left section={sections[0]}>
                    <div className={styles.section__container_img}>
                        <img src="/AboutUs/Sections/1904_2.jpeg" className={`${styles.section1_image1} ${styles.section_image}`} alt="IEEE_logo" />
                        <img src="/AboutUs/Sections/1904_1.jpeg" className={`${styles.section1_image2} ${styles.section_image}`} alt="IEEE_logo" />
                        <img src="/AboutUs/hkn_simple_logo.png" className={`${styles.section1_image3} ${styles.section_image}`} alt="IEEE_logo" />
                    </div>
                </SectionAboutUs>

                <SectionAboutUs right section={sections[1]}>
                    <div className={styles.section__container_img}>
                        <img src="/AboutUs/Sections/2010_1.jpeg" className={`${styles.section2_image1} ${styles.section_image}`} alt="IEEE_logo" />
                        <img src="/AboutUs/IEEE_logo.png" className={`${styles.section2_image2} ${styles.section_image}`} alt="IEEE_logo" />
                    </div>
                </SectionAboutUs>

                <SectionAboutUs left section={sections[2]}>
                    <div className={styles.section__container_img}>
                        <img src="/AboutUs/Sections/2017_1.jpeg" className={`${styles.section3_image1} ${styles.section_image}`} alt="IEEE_logo" />
                        <img src="/AboutUs/Sections/2017_2.png" className={`${styles.section3_image2} ${styles.section_image}`} alt="IEEE_logo" />
                        <img src="/Common/hkn_logo_white_vector.svg" className={`${styles.section3_image3} ${styles.section_image}`} alt="IEEE_logo" />
                    </div>
                </SectionAboutUs>

                <SectionAboutUs right end section={sections[3]}>
                    <div className={styles.section__container_img}>
                        <img src="/AboutUs/Sections/2023_1.png" className={`${styles.section4_image1} ${styles.section_image}`} alt="IEEE_logo" />
                        <img src="/Common/hkn_ideogramma_white.svg" className={`${styles.section4_image2} ${styles.section_image}`} alt="IEEE_logo" />
                    </div>
                </SectionAboutUs>
            </div>

            <div className={styles.stats}>
                <div className={styles.stats__element}>
                    <div className={styles.stats__container_img}>
                        <img src="/AboutUs/IEEE_logo.png" className={styles.stats__img} alt="IEEE_logo" />
                    </div>
                    <div className={styles.stats__number}>+4000</div>
                    <div className={styles.stats__text}>International memebers</div>
                </div>

                <div className={styles.stats__element}>
                    <div className={styles.stats__container_img}>
                        <img src="/AboutUs/hkn_simple_logo.png" className={styles.stats__img} alt="hkn_simple" />
                    </div>
                    <div className={styles.stats__number}>+200</div>
                    <div className={styles.stats__text}>Different Chapters</div>
                </div>

                <div className={styles.stats__element}>
                    <div className={styles.stats__container_img}>
                        <img src="/Common/hkn_logo_white_vector.svg" className={styles.stats__img} alt="hkn_ideogramma" />
                    </div>
                    <div className={styles.stats__number}>+200</div>
                    <div className={styles.stats__text}>Mu Nu chapter members</div>
                </div>
            </div>

        </Layout>
    )
}
