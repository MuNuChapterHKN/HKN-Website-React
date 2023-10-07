import styles from "@/styles/JoinUs/JoinUs.module.scss";
import {courses} from "@/data/JoinUs/Courses";
import {useState} from "react";

type Degree = "Bachelor" | "Master" | "PhD";

export default function SubmissionForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [average, setAverage] = useState<number>();
    const [degree, setDegree] = useState<Degree>('Bachelor');
    const [course, setCourse] = useState(courses[0]);
    const [area, setArea] = useState('');
    const [studyPlanFile, setStudyPlanFile] = useState(null);
    const [cvFile, setCvFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(true);

    const setFileName = (setFileNameFunction: Function, files: FileList | null) => {
        if (files)
            setFileNameFunction(files[0].name)
    }

    const validateForm = () => {
        let errors: { [key: string]: string } = {};

        if (!name) {
            errors.name = 'Name is required.';
        }

        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        setErrors(errors);
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        submitted ?
            <section>
                <div className={styles.successfulSubmission}>
                    <img src="/JoinUs/successfulSubmission.png" alt={"Submission sent!"} width={'100%'} height={'auto'}/>
                    <h3>
                        Thank you! Your application has been sent, we'll evaluate it and contact you as soon as
                        possible
                    </h3>
                </div>
            </section>
            :
            <section>
                <p className={styles.formPreamble}>IF WE CONVINCED YOU...</p>
                <form className={`${styles.submissionForm} ${styles.gradientBackground}`}>

                    <label htmlFor="name" className={styles.formLabel}>Name & Surname</label>
                    <input type="text" id="name" name="name" className={styles.formInput} value={name}
                           onChange={(e) => setName(e.target.value)}/>

                    <div className={`${styles.halfWidth} ${styles.paddingRight}`}>
                        <label htmlFor="average" className={styles.formLabel}>Weighted Average</label>
                        <input type="number" id="average" name="average" className={styles.formInput} min={18} max={30} step={0.1}
                               value={average} onChange={(e) => setAverage(Number(e.target.value))}/>
                    </div>
                    <div className={`${styles.halfWidth} ${styles.paddingLeft}`}>
                        <label htmlFor="degree" className={styles.formLabel}>Type of Degree</label>
                        <select name="degree" id="degree" className={styles.formInput} value={degree}
                                onChange={(e) => setDegree(e.target.value as Degree)}>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Master">Master</option>
                            <option value="PhD">PhD</option>
                        </select>
                    </div>

                    <label htmlFor="email" className={styles.formLabel}>University Email Address</label>
                    <input type="email" id="email" name="email" className={styles.formInput} value={email}
                           onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="course" className={styles.formLabel}>Degree Course</label>
                    <select name="course" id="course" className={styles.formInput} value={course}
                            onChange={(e) => setCourse(e.target.value)}>
                        {
                            ...courses.map(
                                (course) => <option key={course} value={course}>{course}</option>
                            )
                        }
                    </select>

                    <label htmlFor="area" className={styles.formLabel}>Degree Area</label>
                    <input type="area" id="area" name="area" className={styles.formInput} value={area}
                           onChange={(e) => setArea(e.target.value)}
                           placeholder={'e.g. AI, Quantum Engineering, Nanotechnologies for ICTs...'}/>

                    <div className={styles.fileInputContainer}>
                        <label htmlFor="cv" className={`${styles.formLabel} ${styles.noWidth}`}>
                            Attach Your CV:
                        </label>
                        <input type="file" className={styles.fileInput} name="cv" id="cv" accept={'application/pdf'}
                               onChange={(e) => setFileName(setCvFile, e.currentTarget.files)}/>
                        <label htmlFor="cv" className={styles.fileButton}>ATTACH A FILE</label>
                    </div>
                    {cvFile && <span className={styles.fileName}>{cvFile}</span>}
                    <div className={styles.fileInputContainer}>
                        <label htmlFor="studyPlan" className={`${styles.formLabel} ${styles.noWidth}`}>
                            Attach Your Study Plan:
                        </label>
                        <input type="file" className={styles.fileInput} name="studyPlan" id="studyPlan" accept={'application/pdf'}
                               onChange={(e) => setFileName(setStudyPlanFile, e.currentTarget.files)}/>

                        <label htmlFor="studyPlan" className={styles.fileButton}>ATTACH A FILE</label>
                    </div>
                    {studyPlanFile && <span className={styles.fileName}>{studyPlanFile}</span>}

                    <input type="submit" className={styles.submitButton} value="SEND"/>
                    <p className={styles.formText}>
                        *You can contact us using the form above or sending an email to
                        <a href="mailto:info@hknpolito.org"> info@hknpolito.org</a>
                    </p>
                </form>
            </section>
    );
}