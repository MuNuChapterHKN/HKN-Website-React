import Layout from "../components/Layout";
import styles from "../styles/AboutUs/AboutUs.module.scss";
import Gallery from "@/components/AboutUs/Gallery";

export default function AboutUs() {

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

            <div className={styles.divider1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="102" viewBox="0 0 36 102" fill="none">
                    <line x1="17.4998" y1="0.965348" x2="18.4998" y2="101.965" stroke="#929AA6" stroke-opacity="0.74902" stroke-width="7"/>
                    <line x1="3.49983" y1="0.965348" x2="4.49983" y2="101.965" stroke="#64758C" stroke-width="7"/>
                    <line x1="31.4998" y1="0.965348" x2="32.4998" y2="101.965" stroke="#929AA6" stroke-width="7"/>
                </svg>
            </div>

            <Gallery className={styles.gallery}/>

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="230" viewBox="0 0 40 230" fill="none">
                <line y1="0" x1="4" y2="230" x2="4" stroke="#929AA6" stroke-opacity="0.74902" stroke-width="8"/>
                <line y1="0" x1="20" y2="230" x2="20" stroke="#64758C" stroke-width="8"/>
                <line y1="0" x1="36" y2="230" x2="36" stroke="#929AA6" stroke-width="8"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                <path d="M 4 0 A 4 4 0 0 1 0 4" stroke="#929AA6" stroke-opacity="0.74902" stroke-width="8"/>
                <path d="M 20 0 A 20 20 0 0 1 0 20" stroke="#64758C" stroke-width="8"/>
                <path d="M 36 0 A 36 36 0 0 1 0 36" stroke="#929AA6" stroke-width="8"/>
            </svg>

        </Layout>
    )
}
