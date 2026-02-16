import Layout from "../components/Layout";
import styles from "../styles/AboutUs/AboutUs.module.scss";
import Gallery from "@/components/AboutUs/Gallery";
import SectionAboutUs, { SectionAboutUsElement } from "@/components/AboutUs/SectionAboutUs";
import { useEffect, useMemo, useRef, useState } from "react"; 
import { T, useTranslate } from "@tolgee/react"; 

const yearWidth = 240;
const yearHeight = 100;

// L'array 'sections' è stato spostato DENTRO il componente 'AboutUs'

export default function AboutUs() {
    const sectionsRef = useRef<HTMLDivElement>(null);
    const [svgWidth, setSvgWidth] = useState(0);
    const { t } = useTranslate(); 

    // Definiamo 'sections' qui usando useMemo e 't'
    const sections: SectionAboutUsElement[] = useMemo(() => [
        {
            title: t('about_us.history.section1.title'),
            description: t('about_us.history.section1.description'),
            year: "1904",
        },
        {
            title: t('about_us.history.section2.title'),
            description: t('about_us.history.section2.description'),
            year: "2010",
        },
        {
            title: t('about_us.history.section3.title'),
            description: t('about_us.history.section3.description'),
            year: "2017",
        },
        {
            title: t('about_us.history.section4.title'),
            description: t('about_us.history.section4.description'),
            year: new Date().getFullYear().toString(),
        },
    ], [t]); 

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

    return (
        <Layout>
            <div className={styles.vision} id="vision">
                <div className={styles.vision__card}>

                    <div className={styles.vision__card__bull}>
                        <div className={styles.vision__card__bull__circle}>
                            <img src="/AboutUs/Vision/bull.png" loading="lazy" className={styles.vision__card__bull__circle__img} alt={t('about_us.vision.alt_bull')} />
                        </div>
                        <div className={styles.vision__card__bull__citation}>
                            <div className={styles.vision__card__bull__citation__text}><T keyName="about_us.vision.quote_text" /></div>
                            <div className={styles.vision__card__bull__citation__author}><T keyName="about_us.vision.quote_author" /></div>
                            <div className={styles.vision__card__bull__citation__quotes}>
                                <img src="/AboutUs/Vision/quotes.png" className={styles.vision__card__bull__citation__quotes__img} alt={t('about_us.vision.alt_quotes')} />
                            </div>
                            <div className={styles.vision__card__bull__citation__halo} />
                        </div>
                    </div>

                    <div className={styles.vision__card__uptitle}><T keyName="about_us.vision.kicker" /></div>
                    <div className={styles.vision__card__title}><T keyName="about_us.vision.title" /></div>
                    <div className={styles.vision__card__description}><T keyName="about_us.vision.description" /></div>

                    <div className={styles.vision__card__visions}>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/Vision/vision1.png" className={styles.vision__card__visions__col1__img} alt={t('about_us.vision.alt_vision1')} />
                        </div>
                        <div className={styles.vision__card__visions__col2}><T keyName="about_us.vision.pillar1" /></div>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/Vision/vision2.png" className={styles.vision__card__visions__col1__img} alt={t('about_us.vision.alt_vision2')} />
                        </div>
                        <div className={styles.vision__card__visions__col2}><T keyName="about_us.vision.pillar2" /></div>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/Vision/vision3.png" className={styles.vision__card__visions__col1__img} alt={t('about_us.vision.alt_vision3')} />
                        </div>
                        <div className={styles.vision__card__visions__col2}><T keyName="about_us.vision.pillar3" /></div>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/Vision/vision4.png" className={styles.vision__card__visions__col1__img} alt={t('about_us.vision.alt_vision4')} />
                        </div>
                        <div className={styles.vision__card__visions__col2}><T keyName="about_us.vision.pillar4" /></div>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="102" fill="none" id="gallery">
                <line y1="0" x1="4" y2="102" x2="4" stroke="#64758C" stroke-width="8" />
                <line y1="0" x1="20" y2="102" x2="20" stroke="#7A8698" stroke-width="8" />
                <line y1="0" x1="36" y2="102" x2="36" stroke="#929AA6" stroke-width="8" />
            </svg>

            <Gallery className={styles.gallery} />

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="230" fill="none" id="origin">
                <line y1="0" x1="4" y2="230" x2="4" stroke="#64758C" stroke-width="8" />
                <line y1="0" x1="20" y2="230" x2="20" stroke="#7A8698" stroke-width="8" />
                <line y1="0" x1="36" y2="230" x2="36" stroke="#929AA6" stroke-width="8" />
            </svg>

            <div className={styles.divider1}>
                <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height="40" fill="none" >
                    <path d={`M ${yearWidth / 2 - 16} 40 A 36 36 90 0 1 ${yearWidth / 2 + 20} 4 H ${svgWidth / 2 - 20} A 4 4 90 0 0 ${svgWidth / 2 - 16} 0`} stroke="#64758C" stroke-width="8" />
                    <path d={`M ${yearWidth / 2} 40 A 20 20 90 0 1 ${yearWidth / 2 + 20} 20 H ${svgWidth / 2 - 20} A 20 20 90 0 0 ${svgWidth / 2} 0`} stroke="#7A8698" stroke-width="8" />
                    <path d={`M ${yearWidth / 2 + 16} 40 A 4 4 90 0 1 ${yearWidth / 2 + 20} 36 H ${svgWidth / 2 - 20} A 36 36 90 0 0 ${svgWidth / 2 + 16} 0`} stroke="#929AA6" stroke-width="8" />
                </svg>
            </div>

            <div className={styles.sections} ref={sectionsRef}>
                <SectionAboutUs left section={sections[0]}>
                    <div className={styles.section__container_img}>
                        <img src="/AboutUs/Sections/1904_2.jpeg" loading="lazy" className={`${styles.section1_image1} ${styles.section_image}`} alt={t('about_us.history.alt.section1_img1')} />
                        <img src="/AboutUs/Sections/1904_1.jpeg" loading="lazy" className={`${styles.section1_image2} ${styles.section_image}`} alt={t('about_us.history.alt.section1_img2')} />
                        <img src="/AboutUs/hkn_simple_logo.png" loading="lazy" className={`${styles.section1_image3} ${styles.section_image}`} alt={t('about_us.history.alt.hkn_simple_logo')} />
                    </div>
                </SectionAboutUs>

                <SectionAboutUs right section={sections[1]}>
                    <div className={styles.section__container_img}>
                        <img src="/AboutUs/Sections/2010_1.jpeg" loading="lazy" className={`${styles.section2_image1} ${styles.section_image}`} alt={t('about_us.history.alt.section2_img1')} />
                        <img src="/AboutUs/IEEE_logo.png" loading="lazy" className={`${styles.section2_image2} ${styles.section_image}`} alt={t('about_us.history.alt.ieee_logo')} />
                    </div>
                </SectionAboutUs>

                <SectionAboutUs left section={sections[2]}>
                    <div className={styles.section__container_img}>
                        <img src="/AboutUs/Sections/2017_1.jpeg" loading="lazy" className={`${styles.section3_image1} ${styles.section_image}`} alt={t('about_us.history.alt.section3_img1')} />
                        <img src="/AboutUs/Sections/2017_2.png" loading="lazy" className={`${styles.section3_image2} ${styles.section_image}`} alt={t('about_us.history.alt.section3_img2')} />
                        <img src="/Common/hkn_logo_white_vector.svg" loading="lazy" className={`${styles.section3_image3} ${styles.section_image}`} alt={t('about_us.history.alt.hkn_logo_vector')} />
                    </div>
                </SectionAboutUs>

                <SectionAboutUs right end section={sections[3]}>
                    <div className={styles.section__container_img}>
                        <img src="/AboutUs/Sections/2023_1.png" loading="lazy" className={`${styles.section4_image1} ${styles.section_image}`} alt={t('about_us.history.alt.section4_img1')} />
                        <img src="/Common/hkn_ideogramma_white.svg" loading="lazy" className={`${styles.section4_image2} ${styles.section_image}`} alt={t('about_us.history.alt.hkn_ideogram')} />
                    </div>
                </SectionAboutUs>
            </div>

            <div className={styles.stats}>
                <div className={styles.stats__element}>
                    <div className={styles.stats__container_img}>
                        <img src="/AboutUs/IEEE_logo.png" className={styles.stats__img} alt={t('about_us.history.alt.ieee_logo')} />
                    </div>
                    <div className={styles.stats__number}><T keyName="about_us.stats.stat1_number" /></div>
                    <div className={styles.stats__text}><T keyName="about_us.stats.stat1_text" /></div>
                </div>

                <div className={styles.stats__element}>
                    <div className={styles.stats__container_img}>
                        <img src="/AboutUs/hkn_simple_logo.png" className={styles.stats__img} alt={t('about_us.history.alt.hkn_simple_logo')} />
                    </div>
                    <div className={styles.stats__number}><T keyName="about_us.stats.stat2_number" /></div>
                    <div className={styles.stats__text}><T keyName="about_us.stats.stat2_text" /></div>
                </div>

                <div className={styles.stats__element}>
                    <div className={styles.stats__container_img}>
                        <img src="/Common/hkn_logo_white_vector.svg" className={styles.stats__img} alt={t('about_us.history.alt.hkn_logo_vector')} />
                    </div>
                    <div className={styles.stats__number}><T keyName="about_us.stats.stat3_number" /></div>
                    <div className={styles.stats__text}><T keyName="about_us.stats.stat3_text" /></div>
                </div>
            </div>

        </Layout>
    )
}