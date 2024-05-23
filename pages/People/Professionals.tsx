import Layout from "../../components/Layout";
import styles from '@/styles/People/Professionals.module.scss'
import { useRouter } from "next/router";
import Image from 'next/image';

enum BadgeType {
    Head,
    Board,
    Inducted
}

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

const awards: string[] = [
    "/Home/outstanding-2022-color.png",
    "/Home/outstanding-2021-color.png",
    "/Home/outstanding-2020-color.png",
    "/Home/outstanding-2019-color.png",
];

export default function Professionals() {
    const router = useRouter();
  
    return (
        <Layout triangles>
            <div className={styles.awardsCard}>
                {/*TODO: image carousel*/}
                <div className={styles.awardsLeft}>
                    <Image className={styles.awardImage} src={'/People/Board/Claudio Fantasia.png'} alt="Faculty Advisor" width="0" height="0" sizes="100vw"/>
                </div>
                <div className={styles.awardsRight}>
                    <text className={styles.awardsText}>SOMETHING</text>
                    <text className={styles.awardsTitle}>FACULTY ADVISOR</text>
                    <text className={styles.awards}>LOREM IPSUM ... The IEEE-Eta Kappa Nu HKN PoliTo 
                                                chapter was awarded among 253 selected chapters
                                                 around the world, alongside universities such as 
                                                 the Massachusetts Institute of Technology (MIT) 
                                                 and UCLA.
                    </text>
                </div>
            </div>

            <div className={styles.professionalsContainer}>
                <text className={styles.professionalsContainer__directory}>Directory</text>
                <text className={styles.professionalsContainer__professionals}>Professionals</text>
                <div className={styles.professionalsContainerProfessional__grid}>
                    {ProfessionalsData.map((al, index) => (
                        <Professional professional={al} key={index} />
                    ))}
                </div>
            </div>

        </Layout>
    )
}

function Professional({ professional }: {
    professional: ProfessionalProps,
}) {
    return (
        <div className={styles.boardMember} onClick={() => {}}>
            <div className={styles.boardImageContainer}>
                <div className={styles.boardCard} />
                <img className={styles.boardMemberImage} src={professional.imageSrc} alt={professional.name} loading="lazy" />
            </div>
            <text className={styles.boardMemberName}>{professional.name}</text>
        </div>
    );
}

export interface ProfessionalProps {
    name: string,
    imageSrc?: string,
}


