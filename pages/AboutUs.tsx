import Layout from "../components/Layout";
import styles from "../styles/AboutUs/AboutUs.module.scss";

export default function AboutUs() {

    return (
        <Layout>
            <div className={styles.vision}>
                <div className={styles.vision__title}>
                    Section - Our Vision
                </div>

                <div className={styles.vision__card}>
                    <div className={styles.vision__card__uptitle}>about us</div>
                    <div className={styles.vision__card__title}>We Are HKN</div>
                    <div className={styles.vision__card__description}>IEEE-HKN riconosce l’eccellenza tra pari, incoraggia la crescita individuale attraverso l’educazione e l’impegno professionale nelle attività associative. I pilastri su cui si fondano le nostre attività sono:</div>
                    <div className={styles.vision__card__values}>

                    </div>
                </div>
            </div>
        </Layout>
    )
}
