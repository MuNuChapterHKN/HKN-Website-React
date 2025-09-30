import { coursesByDegree } from "@/data/JoinUs/Courses";
import { Feature, FeatureFlagsContext } from "@/pages/_app";
import styles from "@/styles/JoinUs/JoinUs.module.scss";
import React, { useState, FormEvent, useMemo, useContext } from "react";

export type Degree = "Bachelor" | "Master" | "PhD";

interface Errors {
    name?: string
    email?: string
    average?: string
    cv?: string
    studyPlan?: string
}

export default function SubmissionForm() {
    const featureFlags = useContext(FeatureFlagsContext);
    const [acceptGDPR, setAcceptGDPR] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [average, setAverage] = useState<number>();
    const [degree, setDegree] = useState<Degree>('Bachelor');
    const courses = useMemo(() => coursesByDegree[degree] as string[], [degree])
    const [course, setCourse] = useState(courses[0]);
    const [area, setArea] = useState('');
    const [studyPlanFile, setStudyPlanFile] = useState(null);
    const [cvFile, setCvFile] = useState(null);
    const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [submissionError, setSubmissionError] = useState<string | null>(null);

    const setFileName = (setFileNameFunction: Function, files: FileList | null) => {
        if (files)
            setFileNameFunction(files[0].name)
    }

    const validateForm = () => {
        let errors: { [key: string]: string } = {};

        if (!acceptGDPR)
            errors.acceptGDPR = 'Please, accept GDPR terms';

        if (!name)
            errors.name = 'Please, provide your full name';

        if (!average)
            errors.average = 'Provide your average';
        else if (average < 25.6 && degree === 'Bachelor')
            errors.average = 'Your average must be ≥ 25.6';
        else if (average < 26.6 && degree === 'Master')
            errors.average = 'Your average must be ≥ 26.6';

        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Provide a valid email address';
        }
        // else if (!email.endsWith('polito.it')) {
        //     errors.email = 'Please use your PoliTo email';
        // }

        const cv = (document.getElementById('cv') as HTMLInputElement).files?.[0];
        if (!cv)
            errors.cv = 'Upload your resume (CV)'
        else if (cv.type !== 'application/pdf')
            errors.cv = 'Upload a .pdf file'
        else if (cv.size > 2097152)
            errors.cv = 'File is too large, maximum size: 2MB'

        const studyPlan = (document.getElementById('studyPlan') as HTMLInputElement).files?.[0];
        if (!studyPlan)
            errors.studyPlan = 'Upload your study plan'
        else if (studyPlan.type !== 'application/pdf')
            errors.studyPlan = 'Upload a .pdf file'
        else if (studyPlan.size > 2097152)
            errors.studyPlan = 'File is too large, maximum size: 2MB'

        setErrors(errors);
        return Object.entries(errors).length === 0;
    };

    async function onSubmit(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setSubmissionError(null);

        try {
            const formData = new FormData(event.currentTarget);
            const cv = (document.getElementById('cv') as HTMLInputElement).files?.[0] as File;
            const studyPlan = (document.getElementById('studyPlan') as HTMLInputElement).files?.[0] as File;
            formData.set('cv', cv);
            formData.set('studyPlan', studyPlan);
            const response = await fetch('/api/application', {
                method: 'POST',
                body: formData,
            });
            console.log(response)
            if (response.ok) {
                setSubmitted(true);
            } else {
                switch (response.status) {
                    case 413:
                        setSubmissionError("The files you provided were too large (Max 2MB) or not in the correct format. Try again.");
                        break;
                    case 422:
                        setSubmissionError("The provided data was incorrect or invalid, try again");
                        break;
                    case 405:
                        setSubmissionError("Something went wrong, refresh the page and try again");
                        break;
                    default:
                        setSubmissionError("An error occurred, please try again later or send an email");
                }
            }
        } catch (error: any) {
            console.error(error)
            setSubmissionError(error.message);
        } finally {
            setIsLoading(false)
        }
    }

    const resetError = (field: keyof Errors) => {
        setErrors((errors) => {
            let e = { ...errors };
            delete e[`${field}`];
            return e
        })
    }

    const updateField = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Errors, setField: Function) => {
        // Clear error message when offending field is updated
        resetError(field);
        // Update field value
        setField(e.target.value)
    }

    return (
        !submitted ?
            <section>
                {featureFlags[Feature.ShowImageAfterApply] &&
                    (<img src="/JoinUs/successfulSubmission.png" alt={"Submission sent!"} width={'100%'}
                        height={'auto'} className={styles.submissionImage} />)
                }
                <div className={`${styles.submissionText}`}>
                    {/*<div className={styles.successfulSubmission}>*/}
                    <div className={styles.disabledJoinUs__text}>
                        Thank you! Your application has been sent, we'll evaluate it and contact you as soon as possible
                    </div>
                </div>
            </section>
            :
            <section>
                <p className={styles.formPreamble}>IF WE CONVINCED YOU...</p>
                <form className={`${styles.submissionForm} ${styles.gradientBackground}`} onSubmit={onSubmit}>

                    <label htmlFor="name" className={styles.formLabel}>Name & Surname</label>
                    <input type="text" id="name" name="name" className={styles.formInput} value={name} maxLength={100}
                        onChange={(e) => updateField(e, "name", setName)} required={true} />
                    {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}

                    <div className={`${styles.halfWidth} ${styles.paddingRight}`}>
                        <label htmlFor="average" className={styles.formLabel}>Weighted Average</label>
                        <input type="number" id="average" name="average" className={styles.formInput} min={18} max={30}
                            step={0.1}
                            value={average} onChange={(e) => {
                                resetError('average');
                                setAverage(Number(e.target.value));
                            }} required={true} />
                        {errors.average && <p className={styles.errorMessage}>{errors.average}</p>}
                    </div>
                    <div className={`${styles.halfWidth} ${styles.paddingLeft}`}>
                        <label htmlFor="degree" className={styles.formLabel}>Type of Degree</label>
                        <select name="degree" id="degree" className={styles.formInput} value={degree} required={true}
                            onChange={(e) => setDegree(e.target.value as Degree)}>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Master">Master</option>
                            <option value="PhD">PhD</option>
                        </select>
                    </div>

                    <label htmlFor="email" className={styles.formLabel}>University Email Address</label>
                    <input type="email" id="email" name="email" className={styles.formInput} value={email}
                        maxLength={255}
                        onChange={(e) => updateField(e, "email", setEmail)} required={true} />
                    {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}


                    {degree != 'PhD' ? (
                        <>
                            <label htmlFor="course" className={styles.formLabel}>Degree Course</label>
                            <select name="course" id="course" className={styles.formInput} value={course} required={true}
                                onChange={(e) => setCourse(e.target.value)}>
                                {
                                    ...courses.map(
                                        (course) => <option key={course} value={course}>{course}</option>
                                    )
                                }
                            </select>
                        </>
                    ) : (
                        <input id="course" name="course" value="PhD" hidden />
                    )}

                    <label htmlFor="area" className={styles.formLabel}>Degree Area</label>
                    <input id="area" name="area" className={styles.formInput} value={area} maxLength={400}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder={'e.g. AI, Quantum Engineering, Nanotechnologies for ICTs...'} />

                    <div className={styles.fileInputContainer}>
                        <label htmlFor="cv" className={`${styles.formLabel} ${styles.noWidth}`}>
                            Attach Your CV:
                        </label>
                        <input type="file" className={styles.fileInput} name="cv" id="cv" accept={'application/pdf'}
                            required={true}
                            onChange={(e) => {
                                resetError('cv');
                                setFileName(setCvFile, e.currentTarget.files)
                            }} />
                        <label htmlFor="cv" className={styles.fileButton}>ATTACH A FILE</label>
                    </div>
                    {cvFile && <span className={styles.fileName}>{cvFile}</span>}
                    {errors.cv && <p className={styles.errorMessage}>{errors.cv}</p>}
                    <div className={styles.fileInputContainer}>
                        <label htmlFor="studyPlan" className={`${styles.formLabel} ${styles.noWidth}`}>
                            Attach Your Study Plan:
                        </label>
                        <input type="file" className={styles.fileInput} name="studyPlan" id="studyPlan"
                            accept={'application/pdf'} required={true}
                            onChange={(e) => {
                                resetError('studyPlan');
                                setFileName(setStudyPlanFile, e.currentTarget.files)
                            }} />
                        <label htmlFor="studyPlan" className={styles.fileButton}>ATTACH A FILE</label>
                    </div>
                    {studyPlanFile && <span className={styles.fileName}>{studyPlanFile}</span>}
                    {errors.studyPlan && <p className={styles.errorMessage}>{errors.studyPlan}</p>}

                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="acceptGDPR" name="acceptGDPR" className={styles.checkboxInput}
                            onChange={() => setAcceptGDPR(!acceptGDPR)} required={true} />
                        <label htmlFor="acceptGDPR" className={styles.checkboxLabel}>
                            I authorize the treatment of personal data contained in the documents according to the D.Lgs. 2018/101 and GDPR (EU Regulation 2016/679).
                        </label>
                    </div>

                    <input type="submit" className={styles.submitButton} value="SEND" disabled={isLoading} />
                    <p className={styles.formText}>
                        *You can contact us using the form above or sending an email to
                        <a href="mailto:info@hknpolito.org"> info@hknpolito.org</a>
                    </p>

                    {
                        isLoading &&
                        <div className={styles.overlay}>
                            <div className={styles.loader}></div>
                        </div>
                    }
                </form>
                {submissionError && <span onClick={() => setSubmissionError(null)} className={styles.submissionError}>
                    {submissionError}
                </span>}
            </section>
    );
}
