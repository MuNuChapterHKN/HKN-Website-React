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
        description: "Eta Kappa Nu è stata fondata il 28 ottobre 1904 come società d'onore nazionale per gli studenti di ingegneria elettrica presso l'Università dell'Illinois a Urbana-Champaign. Maurice L. Carr e altri nove studenti universitari formarono il primo capitolo e svilupparono una struttura nazionale. La loro visione dell'associazione d'onore combinava l'impegno collegiale con una comunità professionale per aiutare gli studenti e gli ex studenti e per sostenere tali professioni in generale.",
        year: "1904",
    },
    {
        title: "IEEE-HKN - The Merge",
        description: "A partire dal 2010 Eta Kappa Nu si è legata in via ufficiale a IEEE in veste di unità organizzativa sotto il nome di IEEE-HKN. Come risultato della fusione, i capitoli vengono istituiti a livello internazionale e l'idoneità all'adesione viene estesa a tutti i campi di interesse dell'IEEE.",
        year: "2010",
    },
    {
        title: "Mu Nu Chapter - Installation",
        description: "Nel 2017 il nostro capitolo viene fondato grazie all’iniziativa di una brillante studentessa che presto trasforma un’idea di community in una vera e propria confraternita al Politecnico di Torino. Già da allora l’associazione nasce con l’obbiettivo di portare formazione interna per i membri, tutoraggi gratuiti e eventi pubblici.",
        year: "2017",
    },
    {
        title: "Mu Nu Chapter - Today",
        description: "Oggi il Mu Nu chapter di IEEE-HKN al Politecnico di Torino è una vivace realtà portata avanti da un sempre più grande gruppo di studenti appassionati di informatica, elettronica e molto altro. HKN rappresenta per noi un nuovo modo di apprendere competenze e conoscenze e allo stesso tempo di coltivare le proprie passioni circondati da un ambiente ispirante e stimolante.",
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
                            <img src="/AboutUs/bull.png" className={styles.vision__card__bull__circle__img} alt="bull" />
                        </div>
                        <div className={styles.vision__card__bull__citation}>
                            <div className={styles.vision__card__bull__citation__text}>HKN IS THE PLACE WHERE I WAS ABLE TO IMPROVE MYSELF, ALLOWING ME TO GET INVOLVED AND BELIEVE IN MY POTENTIAL</div>
                            <div className={styles.vision__card__bull__citation__author}>Matteo Alasio - Student Governor 2023</div>
                            <div className={styles.vision__card__bull__citation__quotes}>
                                <img src="/AboutUs/quotes.png" className={styles.vision__card__bull__citation__quotes__img} alt="quotes" />
                            </div>

                            <div className={styles.vision__card__bull__citation__halo}/>
                        </div>
                    </div>

                    <div className={styles.vision__card__uptitle}>about us</div>
                    <div className={styles.vision__card__title}>We Are HKN</div>
                    <div className={styles.vision__card__description}>IEEE-HKN riconosce l’eccellenza tra pari, incoraggia la crescita individuale attraverso l’educazione e l’impegno professionale nelle attività associative. I pilastri su cui si fondano le nostre attività sono:</div>

                    <div className={styles.vision__card__visions}>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/vision1.png" className={styles.vision__card__visions__col1__img} alt="AboutUs1" />
                        </div>
                        <div className={styles.vision__card__visions__col2}>Le nostre competenze vengono messe al servizio della comunità studentesca attraverso l'organizzazione di gruppi studio e masterclass</div>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/vision2.png" className={styles.vision__card__visions__col1__img} alt="AboutUs1" />
                        </div>
                        <div className={styles.vision__card__visions__col2}>La crescita personale e professionale a cui miriamo con le nostre attività si realizza tramite l'incontro coi professionisti del settore e con la nostra rete di alumni.</div>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/vision3.png" className={styles.vision__card__visions__col1__img} alt="AboutUs1" />
                        </div>
                        <div className={styles.vision__card__visions__col2}>All'interno della community gli associati curano numerose attività di team-building volte ad assicurare un'atmosfera rispettosa, inclusiva e motivante.</div>
                        <div className={styles.vision__card__visions__col1}>
                            <img src="/AboutUs/vision4.png" className={styles.vision__card__visions__col1__img} alt="AboutUs1" />
                        </div>
                        <div className={styles.vision__card__visions__col2}>il nostro Capitolo è parte di una rete internazionale che riunisce oltre 200 capitoli  dei IEEE-hkn, ciò permette agli associati di fare networking.</div>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="102" fill="none">
                <line x1="17.4998" y1="0.965348" x2="18.4998" y2="101.965" stroke="#929AA6" stroke-width="7"/>
                <line x1="3.49983" y1="0.965348" x2="4.49983" y2="101.965" stroke="#64758C" stroke-width="7"/>
                <line x1="31.4998" y1="0.965348" x2="32.4998" y2="101.965" stroke="#929AA6" stroke-width="7"/>
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
                        <img src="/AboutUs/1904_2.jpeg" className={`${styles.section1_image1} ${styles.section_image}`} alt="IEEE_logo" />
                        <img src="/AboutUs/1904_1.jpeg" className={`${styles.section1_image2} ${styles.section_image}`} alt="IEEE_logo" />
                        <img src="/AboutUs/hkn_simple_logo.png" className={`${styles.section1_image3} ${styles.section_image}`} alt="IEEE_logo" />
                    </div>
                </SectionAboutUs>

                <SectionAboutUs right section={sections[1]}>
                    <div className={styles.section__container_img}>
                        <img src="/AboutUs/2010_1.jpeg" className={`${styles.section2_image1} ${styles.section_image}`} alt="IEEE_logo" />
                        <img src="/AboutUs/IEEE_logo.png" className={`${styles.section2_image2} ${styles.section_image}`} alt="IEEE_logo" />
                    </div>
                </SectionAboutUs>

                <SectionAboutUs left section={sections[2]}>
                    <div className={styles.section__container_img}>
                        <img src="/AboutUs/2017_1.jpeg" className={`${styles.section3_image1} ${styles.section_image}`} alt="IEEE_logo" />
                        <img src="/AboutUs/2017_2.png" className={`${styles.section3_image2} ${styles.section_image}`} alt="IEEE_logo" />
                        <img src="/Common/hkn_logo_white_vector.svg" className={`${styles.section3_image3} ${styles.section_image}`} alt="IEEE_logo" />
                    </div>
                </SectionAboutUs>

                <SectionAboutUs right end section={sections[3]}>
                    <div className={styles.section__container_img}>
                        <img src="/AboutUs/2023_1.png" className={`${styles.section4_image1} ${styles.section_image}`} alt="IEEE_logo" />
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
                    <div className={styles.stats__text}>International memebers</div>
                </div>

                <div className={styles.stats__element}>
                    <div className={styles.stats__container_img}>
                        <img src="/Common/hkn_logo_white_vector.svg" className={styles.stats__img} alt="hkn_ideogramma" />
                    </div>
                    <div className={styles.stats__number}>+200</div>
                    <div className={styles.stats__text}>International memebers</div>
                </div>
            </div>

        </Layout>
    )
}
