import Layout from "../../components/Layout";
import styles from '@/styles/People/Professionals.module.scss'
import { useRouter } from "next/router";
import Image from 'next/image';

// Images should be in a 4:5 ratio
const ProfessionalsData : ProfessionalProps[] = [
    {
        name: "Claudio Fantasia",
        imageSrc: "/People/Board/Claudio Fantasia.png",
    },
    {
        name: "Claudio Fantasia",
        imageSrc: "/People/Board/Claudio Fantasia.png",
    },
    {
        name: "Claudio Fantasia",
        imageSrc: "/People/Board/Claudio Fantasia.png",
    },
    {
        name: "Claudio Fantasia",
        imageSrc: "/People/Board/Claudio Fantasia.png",
    },
    {
        name: "Claudio Fantasia",
        imageSrc: "/People/Board/Claudio Fantasia.png",
    },
    {
        name: "Claudio Fantasia",
        imageSrc: "/People/Board/Claudio Fantasia.png",
    },
    {
        name: "Claudio Fantasia",
        imageSrc: "/People/Board/Claudio Fantasia.png",
    },
    {
        name: "Claudio Fantasia",
        imageSrc: "/People/Board/Claudio Fantasia.png",
    },
];

export default function Professionals() {

    return (
        <Layout triangles>

            <div className={styles.faculty}>
                <div className={styles.faculty__left}>
                    <div className={styles.faculty__left__imageContainer}>
                        <div className={styles.faculty__left__imageContainer__mask}>
                            <Image className={styles.faculty__left__imageContainer__image} src={'/People/Board/Francesco Anzoino.png'}
                                   alt="Faculty Advisor" width="0" height="0" sizes="100vw"/>
                        </div>
                    </div>
                    <text className={styles.faculty__left__name}>Paolo Montuschi</text>
                    <text className={styles.faculty__left__role}>Associate professor</text>
                </div>

                <div className={styles.faculty__right}>
                    <text className={styles.faculty__right__subtitle}>SOMETHING</text>
                    <text className={styles.faculty__right__title}>FACULTY ADVISOR</text>
                    <text className={styles.faculty__right__text}>LOREM IPSUM ... The IEEE-Eta Kappa Nu HKN PoliTo
                        chapter was awarded among 253 selected chapters
                        around the world, alongside universities such as
                        the Massachusetts Institute of Technology (MIT)
                        and UCLA.
                    </text>
                </div>
            </div>

            <div className={styles.professionalsContainer}>
                <text className={styles.professionalsContainer__professionals}>professionals</text>
                <text className={styles.professionalsContainer__inducted}>Inducted Members</text>

                <div className={styles.professionalsContainer__grid}>
                    {ProfessionalsData.map((al, index) => (
                        <Professional professional={al} key={index}/>
                    ))}
                </div>
            </div>

        </Layout>
    )
}

function Professional({professional}: {
    professional: ProfessionalProps,
}) {
    return (
        <div className={styles.professional} onClick={() => {}}>
            <div className={styles.professional__imageContainer}>
                <img className={styles.professional__imageContainer__image} src={professional.imageSrc} alt={professional.name} loading="lazy" />
            </div>
            <text className={styles.professional__name}>{professional.name}</text>
        </div>
    );
}

export interface ProfessionalProps {
    name: string,
    imageSrc?: string,
}


