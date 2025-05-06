import Layout from "../components/Layout";
import styles from "@/styles/JoinUs/JoinUs.module.scss";
import SubmissionForm from "@/components/JoinUs/SubmissionForm";
import { useEffect, useState } from "react";
import { fetchRecruitment } from "./api/directus";

const JoinUsEnabled = false;

export default function JoinUs() {

    const [JoinUsEnabled, setJoinUsEnabled] = useState(false);

    useEffect(() => {
        const fetchStatus = async () => {
            const data = await fetchRecruitment();
            setJoinUsEnabled(data);
        }
        fetchStatus();
    }, []);

    

    return (
        <Layout triangles>
            <main className={styles.container}>
                <section>
                    <h2 className={styles.pageSubtitle}>DISCOVER HOW TO JOIN US</h2>
                    <h1 className={styles.pageTitle}>What We Look For</h1>
                </section>

                {/* Build your future with us */}
                <section className={styles.heading}>
                    <div className={styles.halfWidth}>
                        <h1 className={styles.headingTitle}>Build your future with us</h1>
                        <p className={styles.headingDescription}>
                            Being an HKN member means not only you're part of an international network of students who
                            will be tomorrow's leaders in the STEM fields, but also to increase your
                            knowledge and skills.
                        </p>
                    </div>
                    <div className={styles.halfWidth}>
                        <img alt="Person applying at Mu Nu Chapter of HKN" src="/JoinUs/hiring.png"
                             width={"80%"} height={"auto"} loading="lazy" className={styles.headingImage}/>
                    </div>
                </section>

                <section>
                    {/* Recruitment timeline */}
                    <div className={styles.halfWidth}>
                        <div className={`${styles.recruitmentContainer} ${styles.gradientBackground}`}>
                            <h4 className={styles.recruitmentTitle}>Recruitment timeline</h4>
                            <div className={styles.recruitmentStep}>
                                <h5 className={styles.recruitmentStepTitle}>Submission</h5>
                                <p className={styles.recruitmentStepText}>
                                    Initially, we will collect your information and your CV through the form at the
                                    bottom of the page
                                </p>
                            </div>
                            <div className={styles.recruitmentStep}>
                                <h5 className={styles.recruitmentStepTitle}>General Interview</h5>
                                <p className={styles.recruitmentStepText}>
                                    The selected candidates participate in an introductory interview
                                </p>
                            </div>
                            <div className={styles.recruitmentStep}>
                                <h5 className={styles.recruitmentStepTitle}>Trial Period</h5>
                                <p className={styles.recruitmentStepText}>
                                    We will welcome you to the association and will evaluate your participation in the
                                    activities
                                </p>
                            </div>
                            <div className={styles.recruitmentStep}>
                                <h5 className={styles.recruitmentStepTitle}>Inducted member</h5>
                                <p className={styles.recruitmentStepText}>
                                    At the end of the trial period you will receive your induction certificate and
                                    become an inducted member of HKN!
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Requirements */}
                    <div className={`${styles.halfWidth} ${styles.requiredGrades}`}>
                        <h4 className={`${styles.requirementTitle} ${styles.boxedText}`}>Bachelor Students</h4>
                        <ul className={styles.requirementPointList}>
                            <li className={styles.requirementPoint}>At least 52 CFU</li>
                            <li className={styles.requirementPoint}>Weighted average ≥ 26</li>
                        </ul>
                        <h4 className={`${styles["requirementTitle--shadow"]} ${styles.boxedText} ${styles.requirementTitle}`}>
                            Master of Science
                        </h4>
                        <div className={styles.requiredGradesContainerWhite}>
                            <h5 className={`${styles.requirementSubtitle} ${styles.boxedText} ${styles.requirementColumn}`}>
                                Less than 20 CFU
                            </h5>
                            <div className={styles.requirementColumn}>
                                <span className={`${styles.cfuSliderLeft} ${styles.bgWhite}`}></span>
                                <span className={`${styles.cfuSliderHandle}`}></span>
                                <span className={`${styles.cfuSliderRight} ${styles.bgBlue}`}></span>
                            </div>
                        </div>
                        <ul className={styles.requirementPointList}>
                            <li className={styles.requirementPoint}>Weighted average ≥ 26</li>
                            <li className={styles.requirementPoint}>
                                The grades of bachelor degree course are considered
                            </li>
                        </ul>
                        <div className={styles.requiredGradesContainerGray}>
                            <h5 className={`${styles.requirementSubtitle} ${styles.boxedText} ${styles.requirementColumn}`}>
                                20 CFU or more
                            </h5>
                            <div className={styles.requirementColumn}>
                                <span className={`${styles.cfuSliderLeft} ${styles.bgBlue}`}></span>
                                <span className={`${styles.cfuSliderHandle}`}></span>
                                <span className={`${styles.cfuSliderRight} ${styles.bgWhite}`}></span>
                            </div>
                        </div>
                        <ul className={styles.requirementPointList}>
                            <li className={styles.requirementPoint}>Weighted average ≥ 27</li>
                        </ul>
                        <p className={styles.additionalRequirement}>Fluency in the Italian language is a prerequisite
                            for admission to the chapter</p>
                    </div>
                </section>

                <section className={styles.spacing}>
                    {/* Fees & Instructions */}
                    <div className={styles.halfWidth}>
                        <h4 className={`${styles.requirementTitle} ${styles.noHat} ${styles.boxedText}`}>
                            Induction Fees
                        </h4>
                        <p className={styles.shortRecruitmentStepText}>
                            Furthermore to become a fully inducted HKN member you have to pay a lump sum membership fee
                            of 78.00$ (IEEE+HKN).
                        </p>
                        <h4 className={`${styles.requirementTitle} ${styles.noHat} ${styles.boxedText}`}>
                            Form Instructions
                        </h4>
                        <p className={styles.shortRecruitmentStepText}>
                            To complete the application form you must enter:
                        </p>
                        <ul className={styles.shortRecruitmentStepText}>
                            <li>First name</li>
                            <li>Surname</li>
                            <li>Email address</li>
                            <li>Weighted average of your grades</li>
                            <li>Type of degree you're attending</li>
                        </ul>
                        <p className={styles.shortRecruitmentStepText}>
                            Finally, it is necessary to upload a PDF file with your CV and the extract of grades
                            (obtainable from the personal university page under the heading:
                            <strong> General Secretariat/Self-certifications</strong>)
                        </p>
                    </div>
                    {/* Exceptions */}
                    <div className={styles.halfWidth}>
                        <div className={`${styles.recruitmentContainer} ${styles.gradientBackground}`}>
                            <h4 className={styles.recruitmentTitle}>Exceptions</h4>
                            <div className={styles.recruitmentStepText}>
                                If the student has taken the exams within the required period, the required average
                                threshold is reduced to:
                                <div className={styles.exceptionContainer}>
                                    <h5 className={styles.recruitmentStepTitle}> Bachelor </h5>
                                    <p>25.8/30</p>
                                </div>
                                <div className={styles.exceptionContainer}>
                                    <h5 className={styles.recruitmentStepTitle}> Master Of Science </h5>
                                    <p>26.8/30</p>
                                </div>
                            </div>
                            <div className={styles.recruitmentStepText}>
                                If the student has won some national or international awards related to the IEEE's areas
                                of interest, the weighted average required is further reduced to:
                                <div className={styles.exceptionContainer}>
                                    <h5 className={styles.recruitmentStepTitle}> Bachelor </h5>
                                    <p>25.6/30</p>
                                </div>
                                <div className={styles.exceptionContainer}>
                                    <h5 className={styles.recruitmentStepTitle}> Master Of Science </h5>
                                    <p>26.6/30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Submission form */}
                {JoinUsEnabled ?
                    <SubmissionForm/>
                    :
                    <div className={styles.disabledJoinUs}>
                        <div className={styles.disabledJoinUs__text}>Applications are currently closed</div>
                        <div className={styles.disabledJoinUs__text}>Come back at the beginning of the next semester!
                        </div>
                    </div>
                }
            </main>
        </Layout>
    )
}
