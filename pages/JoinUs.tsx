import Layout from "../components/Layout";
import styles from "@/styles/JoinUs.module.css";
import Image from "next/image";

export default function JoinUs() {

    return (
        <Layout>
            <main className={styles.container}>
                <section>
                    <h2 className={styles.pageSubtitle}>DISCOVER HOW TO JOIN US</h2>
                    <h1 className={styles.pageTitle}>What We Look For</h1>
                </section>

                {/* What we look for */}
                <section>
                    <div className={styles.requirementRow}>
                        <span className={styles.emptyCircle}></span>
                    </div>
                    <div className={styles.requirementRow}>
                        <div className={styles.requirementImage}>
                            <Image src="/hkn_logo_blu_vector.svg" alt="TODO" width={0} height={0} className={styles.image}/>
                        </div>
                        <span className={styles.verticalSeparator}></span>
                        <div className={styles.requirementText}>
                            <ul className={styles.requirementList}>
                                <li>Bachelor: at least 80 CFU and weighted average &gt; 26 or, if you have less credit,
                                    we offer the possibility to join our mentoring program. Have a chat with us for
                                    further information
                                </li>
                                <li>Master of Science: at least 20 CFU and weighted average &gt; 27 or less than 20 CFU
                                    and Bachelor's weighted average &gt; 26
                                </li>
                                <li>Speak italian fluently</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.horizontalSeparatorContainer}>
                        <div className={styles.horizontalSeparator}></div>
                        <div className={styles.emptyCircle}></div>
                    </div>
                    <div className={styles.requirementRow}>
                        <p className={styles.requirementText}>
                            If the student has completed the exams under the provided period the threshold on the
                            required average is reduced to 25.8/30 and 26.8/30 in the case of Bachelor's and
                            Master's degrees, respectively. In addition to the prior, if the student has won some
                            national or international awards relating to the areas of interest of IEEE, the required
                            weighted average is further reduced to 25.6/30 and 26.6/30, respectively.
                        </p>
                        <span className={styles.verticalSeparator}></span>
                        <div className={styles.requirementImage}>
                            <Image src="/hkn_logo_blu_vector.svg" alt="TODO" width={0} height={0} className={styles.image}/>
                        </div>
                    </div>
                    <div className={styles.horizontalSeparatorContainer}>
                        <div className={styles.horizontalSeparator}></div>
                        <div className={styles.emptyCircle}></div>
                    </div>
                    <div className={styles.requirementRow}>
                        <div className={styles.requirementImage}>
                            <Image src="/hkn_logo_blu_vector.svg" alt="TODO" width={0} height={0} className={styles.image}/>
                        </div>
                        <span className={styles.verticalSeparator}></span>
                        <p className={styles.requirementText}>
                            Furthermore to become a fully inducted HKN member you have to pay a lump sum membership fee
                            of € 70.00 (IEEE+HKN).
                            <br/>
                            Being an HKN member means not only you're part of an international network of students who
                            will be tomorrow's leaders in the fields of IT and electronics, but also to increase your
                            knowledge and skills.
                        </p>
                    </div>
                    <div className={styles.requirementRow}>
                        <span className={styles.emptyCircle}></span>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
