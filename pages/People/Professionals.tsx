import Layout from "@/components/Layout";
import styles from '@/styles/People/Professionals.module.scss'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import { fetchProfessionals } from "../api/directus";
import { T, useTranslate } from "@tolgee/react";


function sortByLastName(professionals: ProfessionalProps[]): ProfessionalProps[] {
    return professionals.sort((a, b) => {
        const lastNameA = a.name.split(" ").pop()!.toLowerCase();
        const lastNameB = b.name.split(" ").pop()!.toLowerCase(); 
        if (lastNameA < lastNameB) return -1;
        if (lastNameA > lastNameB) return 1;
        return 0;
    });
}

export default function Professionals() {
    const { t } = useTranslate();
    const [ProfessionalsData, setProfessionals] = useState<ProfessionalProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProfessionals();
            setProfessionals(data);
        };

        fetchData();
    }, []);

    return (
        <Layout triangles>

            <div className={styles.faculty}>
                <div className={styles.faculty__left}>
                    <div className={styles.faculty__left__imageContainer}>
                        <div className={styles.faculty__left__imageContainer__mask}>
                            <img className={styles.faculty__left__imageContainer__image}
                                   src={'/People/professionals/paolo_montuschi.png'}
                                   alt={t('professionals.advisor.alt')} width="0" height="0" sizes="100vw"/>
                        </div>
                    </div>
                    <text className={styles.faculty__left__name}>Paolo Montuschi</text>
                    <text className={styles.faculty__left__role}><T keyName="professionals.advisor.role" /></text>
                </div>

                <div className={styles.faculty__right}>
                    <text className={styles.faculty__right__subtitle}><T keyName="professionals.advisor.kicker" /></text>
                    <text className={styles.faculty__right__title}><T keyName="professionals.advisor.title" /></text>
                    <text className={styles.faculty__right__text}>
                        <T keyName="professionals.advisor.bio" />
                    </text>
                </div>
            </div>

            <div className={styles.professionalsContainer}>
                <text className={styles.professionalsContainer__professionals}><T keyName="professionals.list.kicker" /></text>
                <text className={styles.professionalsContainer__inducted}><T keyName="professionals.list.title" /></text>

                <div className={styles.professionalsContainer__grid}>
                    {sortByLastName(ProfessionalsData).map((al, index) => (
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

    const [imageExists, setImageExists] = useState(false);
    const { t } = useTranslate();

    useEffect(() => {
        const img = new Image();
        img.src = professional.imageSrc || "";
        img.onload = () => setImageExists(true);
    }, []);

    return (
        <div className={styles.professional} onClick={() => {
        }}>
            <div className={styles.professional__imageContainer}>
                {professional.imageSrc && imageExists ?
                    <img className={styles.professional__imageContainer__image} src={professional.imageSrc}
                          alt={professional.name} loading="lazy"/>
                :
                    <img className={styles.professional__imageContainer__placeholder} src="/Common/hkn_ideogramma_blu.svg"
                         alt={t('professionals.list.placeholder_alt', { name: professional.name })} loading="lazy"/>
                }

            </div>
            <text className={styles.professional__name}>{professional.name}</text>
        </div>
    );
}

export interface ProfessionalProps {
    name: string,
    imageSrc?: string,
}