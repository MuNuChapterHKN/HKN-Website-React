import Layout from "@/components/Layout";
import styles from '@/styles/People/Professionals.module.scss'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

// Images should be in a 4:5 ratio
const ProfessionalsData: ProfessionalProps[] = [
    {name: "Adrien Merlini", imageSrc: "/People/professionals/adrien_merlini.png"},
    {name: "Alberto Tenconi", imageSrc: "/People/professionals/alberto_tenconi.png"},
    {name: "Alfredo Benso", imageSrc: "/People/professionals/alfredo_benso.png"},
    {name: "Andrea Bianco", imageSrc: "/People/professionals/andrea_bianco.png"},
    {name: "Carlo Cond", imageSrc: "/People/professionals/carlo_cond.png"},
    {name: "Cataldo Basile", imageSrc: "/People/professionals/cataldo_basile.png"},
    {name: "Cecilia Metra", imageSrc: "/People/professionals/cecilia_metra.png"},
    {name: "Danilo Demarchi", imageSrc: "/People/professionals/danilo_demarchi.png"},
    {name: "Dejan Milojicic", imageSrc: "/People/professionals/dejan_milojicic.jpeg"},
    {name: "Eddie Custovic", imageSrc: "/People/professionals/eddie_custovic.png"},
    {name: "Edmundo Tovar", imageSrc: "/People/professionals/edmundo_tovar.png"},
    {name: "Elena Maria Baralis", imageSrc: "/People/professionals/elena_maria_baralis.png"},
    {name: "Enrico Macii", imageSrc: "/People/professionals/enrico_macii.png"},
    {name: "Enrico Venuto", imageSrc: "/People/professionals/enrico_venuto.png"},
    {name: "Fabrizio Lamberti", imageSrc: "/People/professionals/fabrizio_lamberti.png"},
    {name: "Flavio Canavero", imageSrc: "/People/professionals/flavio_canavero.png"},
    {name: "Fulvio Corno", imageSrc: "/People/professionals/fulvio_corno.png"},
    {name: "Fulvio Risso", imageSrc: "/People/professionals/fulvio_risso.png"},
    {name: "Fulvio Valenza", imageSrc: "/People/professionals/fulvio_valenza.png"},
    {name: "Gabriella Bosco", imageSrc: "/People/professionals/gabriella_bosco.png"},
    {name: "Gabriella Olmo", imageSrc: "/People/professionals/gabriella_olmo.png"},
    {name: "Guido Pagana", imageSrc: "/People/professionals/guido_pagana.png"},
    {name: "Juan Carlos De Martin", imageSrc: "/People/professionals/juan_carlos_de_martin.png"},
    {name: "Leila De Floriani", imageSrc: "/People/professionals/leila_de_floriani.png"},
    {name: "Lia Morra", imageSrc: "/People/professionals/lia_morra.png"},
    {name: "Lorenzo Galleani", imageSrc: "/People/professionals/lorenzo_galleani.png"},
    {name: "Luca Nassi", imageSrc: "/People/professionals/luca_nassi.png"},
    {name: "Luigi De Russis", imageSrc: "/People/professionals/luigi_de_russis.png"},
    {name: "Marcello Maggiora", imageSrc: "/People/professionals/marcello_maggiora.png"},
    {name: "Massimo Violante", imageSrc: "/People/professionals/massimo_violante.png"},
    {name: "Matteo Sonza Reorda", imageSrc: "/People/professionals/matteo_sonza_reorda.png"},
    {name: "Maurizio Martina", imageSrc: "/People/professionals/maurizio_martina.png"},
    {name: "Maurizio Rebaudengo", imageSrc: "/People/professionals/maurizio_rebaudengo.png"},
    {name: "Michele Goano", imageSrc: "/People/professionals/michele_goano.png"},
    {name: "Paolo Garza", imageSrc: "/People/professionals/paolo_garza.png"},
    {name: "Paolo Margara", imageSrc: "/People/professionals/paolo_margara.png"},
    {name: "Paolo Montuschi", imageSrc: "/People/professionals/paolo_montuschi.png"},
    {name: "Roberto Gaudino", imageSrc: "/People/professionals/roberto_gaudino.png"},
    {name: "Valentina Agostini", imageSrc: "/People/professionals/valentina_agostini.png"},
    {name: "Aleksandar Mastilovic", imageSrc: "/People/professionals/aleksandar_mastilovic.png"},
    {name: "Claudio Demartini", imageSrc: "/People/professionals/claudio_demartini.png"},
    {name: "Gianluca Setti", imageSrc: "/People/professionals/gianluca_setti.png"},
    {name: "Giovanni Ghione", imageSrc: "/People/professionals/giovanni_ghione.png"},
    {name: "Letizia Bergamasco", imageSrc: "/People/professionals/letizia_bergamasco.png"},
    {name: "Luca Sterpone", imageSrc: "/People/professionals/luca_sterpone.png"},
    {name: "Roberto Graglia", imageSrc: "/People/professionals/roberto_graglia.png"},
    {name: "Silvia Chiusano", imageSrc: "/People/professionals/silvia_chiusano.png"}
];

function sortByLastName(professionals: ProfessionalProps[]): ProfessionalProps[] {
    return professionals.sort((a, b) => {
        const lastNameA = a.name.split(" ").pop()!.toLowerCase(); // Safely assume there's at least one name
        const lastNameB = b.name.split(" ").pop()!.toLowerCase(); // Convert to lowercase for case-insensitive comparison
        if (lastNameA < lastNameB) return -1;
        if (lastNameA > lastNameB) return 1;
        return 0;
    });
}


export default function Professionals() {

    return (
        <Layout triangles>

            <div className={styles.faculty}>
                <div className={styles.faculty__left}>
                    <div className={styles.faculty__left__imageContainer}>
                        <div className={styles.faculty__left__imageContainer__mask}>
                            <img className={styles.faculty__left__imageContainer__image}
                                   src={'/People/professionals/paolo_montuschi.png'}
                                   alt="Faculty Advisor" width="0" height="0" sizes="100vw"/>
                        </div>
                    </div>
                    <text className={styles.faculty__left__name}>Paolo Montuschi</text>
                    <text className={styles.faculty__left__role}>Associate professor</text>
                </div>

                <div className={styles.faculty__right}>
                    <text className={styles.faculty__right__subtitle}>PROFESSIONALS</text>
                    <text className={styles.faculty__right__title}>FACULTY ADVISOR</text>
                    <text className={styles.faculty__right__text}>Paolo Montuschi (full professor, IEEE Fellow) is currently serving as Vice-Rector for 2030 Digitalization and IT Strategies. He is the editor-in-chief of the IEEE Transactions on Emerging Topics in Computing and a member of both the IEEE Awards Board and IEEE PSPB. In 2017 he mentored the installment of the Mu Nu HKN Chapter, the first to be activated in Europe.
                    </text>
                </div>
            </div>

            <div className={styles.professionalsContainer}>
                <text className={styles.professionalsContainer__professionals}>professionals</text>
                <text className={styles.professionalsContainer__inducted}>Inducted Members</text>

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
                        alt={professional.name} loading="lazy"/>
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


