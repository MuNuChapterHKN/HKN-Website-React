import Layout from "../components/Layout";
import styles from "../styles/AboutUs/AboutUs.module.scss";

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
        </Layout>
    )
}
