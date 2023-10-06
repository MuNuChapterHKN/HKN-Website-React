import Layout from "../components/Layout";
import styles from "@/styles/JoinUs/JoinUs.module.scss";
import Image from "next/image";

export default function JoinUs() {

    return (
        <Layout>
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
                            will be tomorrow's leaders in the fields of IT and Electronics, but also to increase your
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
                            <h5 className={`${styles.requirementSubtitle} ${styles.boxedText}`}>Less than 20 CFU</h5>
                            <div className={styles.requirementColumn}>
                                <input type="range" disabled={true} min="0" max="180" value="40"
                                       className={`${styles.cfuSlider} ${styles.requirementColumn}`}/>
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
                                <input type="range" disabled={true} min="0" max="180" value="40"
                                       className={`${styles.cfuSlider} ${styles['cfuSlider--inverted']}`}/>
                            </div>
                        </div>
                        <ul className={styles.requirementPointList}>
                            <li className={styles.requirementPoint}>Weighted average ≥ 27</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.spacing}>
                    {/* Fees & Instructions */}
                    <div className={styles.halfWidth}>
                        <h4 className={`${styles.requirementTitle} ${styles.noHat} ${styles.boxedText}`}>Induction
                                                                                                         Fees</h4>
                        <p className={styles.shortRecruitmentStepText}>
                            Furthermore to become a fully inducted HKN member you have to pay a lump sum membership fee
                            of € 80.00 (IEEE+HKN).
                        </p>
                        <h4 className={`${styles.requirementTitle} ${styles.noHat} ${styles.boxedText}`}>Form
                                                                                                         Instructions</h4>
                        <p className={styles.shortRecruitmentStepText}>
                            To complete the application form you must enter:
                            <ul>
                                <li>First name</li>
                                <li>Surname</li>
                                <li>Email address</li>
                                <li>Weighted average of your grades</li>
                                <li>Type of degree you're attending</li>
                            </ul>
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
                <section>
                    <p className={styles.formPreamble}>IF WE CONVINCED YOU...</p>
                    <form className={`${styles.submissionForm} ${styles.gradientBackground}`}>

                        <label htmlFor="name" className={styles.formLabel}>Name & Surname</label>
                        <input type="text" id="name" name="name" className={styles.formInput}/>

                        <div className={`${styles.halfWidth} ${styles.paddingRight}`}>
                            <label htmlFor="average" className={styles.formLabel}>Weighted Average</label>
                            <input type="number" id="average" name="average" className={styles.formInput} min={18} max={30} step={0.1}/>
                        </div>
                        <div className={`${styles.halfWidth} ${styles.paddingLeft}`}>
                            <label htmlFor="degreeType" className={styles.formLabel}>Type of Degree</label>
                            <select name="degreeType" id="degreeType" className={styles.formInput}>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Bachelor">Master</option>
                                <option value="Bachelor">PhD</option>
                            </select>
                        </div>

                        <label htmlFor="email" className={styles.formLabel}>University Email Address</label>
                        <input type="email" id="email" name="email" className={styles.formInput}/>

                        <label htmlFor="course" className={styles.formLabel}>Course Degree</label>
                        <select name="course" id="course" className={styles.formInput}>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Bachelor">Master</option>
                            <option value="Bachelor">PhD</option>
                        </select>

                        <div className={styles.fileInputContainer}>
                            <label htmlFor="cv" className={`${styles.formLabel} ${styles.noWidth}`}>
                                Attach Your CV:
                            </label>
                            <label htmlFor="cv" className={styles.fileButton}>ATTACH A FILE</label>
                            <input type="file" className={styles.fileInput} name="cv" id="cv"/>
                        </div>
                        <div className={styles.fileInputContainer}>
                            <label htmlFor="studyPlan" className={`${styles.formLabel} ${styles.noWidth}`}>
                                Attach Your Study Plan:
                            </label>
                            <label htmlFor="studyPlan" className={styles.fileButton}>ATTACH A FILE</label>
                            <input type="file" className={styles.fileInput} name="studyPlan" id="studyPlan"/>
                        </div>

                        <input type="submit" className={styles.submitButton} value="SEND"/>
                        <p className={styles.formText}>
                            *You can contact us using the form above or sending an email to
                            <a href="mailto:info@hknpolito.org"> info@hknpolito.org</a>
                        </p>
                    </form>
                </section>
            </main>
        </Layout>
    )
}
