import Layout from "../components/Layout";
import styles from "@/styles/JoinUs/JoinUs.module.scss";
import SubmissionForm, { Degree } from "@/components/JoinUs/SubmissionForm";
import { useEffect, useState, useContext } from "react";
import { fetchRecruitment } from "./api/directus";
import { FeatureFlagsContext, Feature } from './_app';
import { CoursesModal } from '../components/JoinUs/CoursesModal';
import { T, useTranslate } from "@tolgee/react";

export default function JoinUs() {
    const featureFlags = useContext(FeatureFlagsContext);
    const [modalVisible, setModalVisible] = useState(false);
    const { t } = useTranslate();

    const openCoursesModal = () => setModalVisible(true);
    const closeCoursesModal = () => setModalVisible(false);

    return (
        <Layout triangles>
            <CoursesModal visible={modalVisible} disablePopUp={closeCoursesModal} />

            <main className={styles.container}>
                <section>
                    <h2 className={styles.pageSubtitle}><T keyName="join_us.header.subtitle" /></h2>
                    <h1 className={styles.pageTitle}><T keyName="join_us.header.title" /></h1>
                </section>

                {/* Build your future with us */}
                <section className={styles.heading}>
                    <div className={styles.halfWidth}>
                        <h1 className={styles.headingTitle}><T keyName="join_us.build_future.title" /></h1>
                        <p className={styles.headingDescription}>
                            <T keyName="join_us.build_future.description" />
                        </p>
                    </div>
                    <div className={styles.halfWidth}>
                        <img alt={t('join_us.build_future.image_alt')} src="/JoinUs/hiring.png"
                             width={"80%"} height={"auto"} loading="lazy" className={styles.headingImage}/>
                    </div>
                </section>

                <section>
                    {/* Recruitment timeline */}
                    <div className={styles.halfWidth}>
                        <div className={`${styles.recruitmentContainer} ${styles.gradientBackground}`}>
                            <h4 className={styles.recruitmentTitle}><T keyName="join_us.timeline.title" /></h4>
                            <div className={styles.recruitmentStep}>
                                <h5 className={styles.recruitmentStepTitle}><T keyName="join_us.timeline.step1.title" /></h5>
                                <p className={styles.recruitmentStepText}>
                                    <T keyName="join_us.timeline.step1.text" />
                                </p>
                            </div>
                            <div className={styles.recruitmentStep}>
                                <h5 className={styles.recruitmentStepTitle}><T keyName="join_us.timeline.step2.title" /></h5>
                                <p className={styles.recruitmentStepText}>
                                    <T keyName="join_us.timeline.step2.text" />
                                </p>
                            </div>
                            <div className={styles.recruitmentStep}>
                                <h5 className={styles.recruitmentStepTitle}><T keyName="join_us.timeline.step3.title" /></h5>
                                <p className={styles.recruitmentStepText}>
                                    <T keyName="join_us.timeline.step3.text" />
                                </p>
                            </div>
                            <div className={styles.recruitmentStep}>
                                <h5 className={styles.recruitmentStepTitle}><T keyName="join_us.timeline.step4.title" /></h5>
                                <p className={styles.recruitmentStepText}>
                                    <T keyName="join_us.timeline.step4.text" />
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Requirements */}
                    <div className={`${styles.halfWidth} ${styles.requiredGrades}`}>
                        <h4 className={`${styles.requirementTitle} ${styles.boxedText}`}><T keyName="join_us.requirements.bachelor.title" /></h4>
                        <ul className={styles.requirementPointList}>
                            <li className={styles.requirementPoint}><T keyName="join_us.requirements.bachelor.point1" /></li>
                            <li className={styles.requirementPoint}><T keyName="join_us.requirements.bachelor.point2" /></li>
                        </ul>
                        <h4 className={`${styles["requirementTitle--shadow"]} ${styles.boxedText} ${styles.requirementTitle}`}>
                            <T keyName="join_us.requirements.master.title" />
                        </h4>
                        <div className={styles.requiredGradesContainerWhite}>
                            <h5 className={`${styles.requirementSubtitle} ${styles.boxedText} ${styles.requirementColumn}`}>
                                <T keyName="join_us.requirements.master.less_20" />
                            </h5>
                            <div className={styles.requirementColumn}>
                                <span className={`${styles.cfuSliderLeft} ${styles.bgWhite}`}></span>
                                <span className={`${styles.cfuSliderHandle}`}></span>
                                <span className={`${styles.cfuSliderRight} ${styles.bgBlue}`}></span>
                            </div>
                        </div>
                        <ul className={styles.requirementPointList}>
                            <li className={styles.requirementPoint}><T keyName="join_us.requirements.master.avg_26" /></li>
                            <li className={styles.requirementPoint}>
                                <T keyName="join_us.requirements.master.note" />
                            </li>
                        </ul>
                        <div className={styles.requiredGradesContainerGray}>
                            <h5 className={`${styles.requirementSubtitle} ${styles.boxedText} ${styles.requirementColumn}`}>
                                <T keyName="join_us.requirements.master.more_20" />
                            </h5>
                            <div className={styles.requirementColumn}>
                                <span className={`${styles.cfuSliderLeft} ${styles.bgBlue}`}></span>
                                <span className={`${styles.cfuSliderHandle}`}></span>
                                <span className={`${styles.cfuSliderRight} ${styles.bgWhite}`}></span>
                            </div>
                        </div>
                        <ul className={styles.requirementPointList}>
                            <li className={styles.requirementPoint}><T keyName="join_us.requirements.master.avg_27" /></li>
                        </ul>
                        <p className={styles.additionalRequirement}>
                            <T keyName="join_us.requirements.fluency_note_pre" /> <span onClick={openCoursesModal} style={{ cursor: 'pointer', color: '#AEB3B9'}}><T keyName="join_us.requirements.fluency_note_link" /></span> <T keyName="join_us.requirements.fluency_note_post" />
                        </p>
                    </div>
                </section>

                <section className={styles.spacing}>
                    {/* Fees & Instructions */}
                    <div className={styles.halfWidth}>
                        <h4 className={`${styles.requirementTitle} ${styles.noHat} ${styles.boxedText}`}>
                            <T keyName="join_us.fees.title" />
                        </h4>
                        <p className={styles.shortRecruitmentStepText}>
                            <T keyName="join_us.fees.text" />
                        </p>
                        <h4 className={`${styles.requirementTitle} ${styles.noHat} ${styles.boxedText}`}>
                            <T keyName="join_us.form.title" />
                        </h4>
                        <p className={styles.shortRecruitmentStepText}>
                            <T keyName="join_us.form.intro" />
                        </p>
                        <ul className={styles.shortRecruitmentStepText}>
                            <li><T keyName="join_us.form.list.name" /></li>
                            <li><T keyName="join_us.form.list.surname" /></li>
                            <li><T keyName="join_us.form.list.email" /></li>
                            <li><T keyName="join_us.form.list.average" /></li>
                            <li><T keyName="join_us.form.list.degree" /></li>
                        </ul>
                        <p className={styles.shortRecruitmentStepText}>
                            <T keyName="join_us.form.upload_note_pre" /> <strong> <T keyName="join_us.form.upload_note_bold" /></strong>)
                        </p>
                    </div>
                    {/* Exceptions */}
                    <div className={styles.halfWidth}>
                        <div className={`${styles.recruitmentContainer} ${styles.gradientBackground}`}>
                            <h4 className={styles.recruitmentTitle}><T keyName="join_us.exceptions.title" /></h4>
                            <div className={styles.recruitmentStepText}>
                                <T keyName="join_us.exceptions.timely_exams" />
                                <div className={styles.exceptionContainer}>
                                    <h5 className={styles.recruitmentStepTitle}> <T keyName="join_us.requirements.bachelor.title" /> </h5>
                                    <p>25.8/30</p>
                                </div>
                                <div className={styles.exceptionContainer}>
                                    <h5 className={styles.recruitmentStepTitle}> <T keyName="join_us.requirements.master.title" /> </h5>
                                    <p>26.8/30</p>
                                </div>
                            </div>
                            <div className={styles.recruitmentStepText}>
                                <T keyName="join_us.exceptions.awards" />
                                <div className={styles.exceptionContainer}>
                                    <h5 className={styles.recruitmentStepTitle}> <T keyName="join_us.requirements.bachelor.title" /> </h5>
                                    <p>25.6/30</p>
                                </div>
                                <div className={styles.exceptionContainer}>
                                    <h5 className={styles.recruitmentStepTitle}> <T keyName="join_us.requirements.master.title" /> </h5>
                                    <p>26.6/30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Submission form */}
                {featureFlags[Feature.IsRecruitmentOpen] ?
                    <SubmissionForm/>
                    :
                    <div className={styles.disabledJoinUs}>
                        <div className={styles.disabledJoinUs__text}><T keyName="join_us.closed.line1" /></div>
                        <div className={styles.disabledJoinUs__text}><T keyName="join_us.closed.line2" /></div>
                    </div>
                }
            </main>
        </Layout>
    )
}