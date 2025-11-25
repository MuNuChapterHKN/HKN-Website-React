import Layout from "../../components/Layout";
import styles from '@/styles/Publications/Recognitions.module.css'
import {useRouter} from "next/router";
import Image from "next/image";
import ProfessionalCard, {Professional} from "@/components/Recognitions/ProfessionalCard";
import {useEffect, useState} from "react";
import MentionCard, {Mention} from "../../components/Recognitions/MentionCard";
import ArrowButton from "@/components/molecules/ArrowButton";
import { professionals} from "@/data/recognitions";
import { fetchAwards, fetchMentions } from "../api/directus";
import { T, useTranslate } from "@tolgee/react";


export default function Recognitions() {
        const { t } = useTranslate();
        const [awards, setAwards] = useState<string[]>([]);
    
        useEffect(() => {
            const fetchData = async () => {
                const data = await fetchAwards();
                setAwards(data);
            };
    
            fetchData();
        }, []);

        const [mentions, setMentions] = useState<Mention[]>([]);
    
        useEffect(() => {
            const fetchData = async () => {
                const data = await fetchMentions();
                setMentions(data);
            };
    
            fetchData();
        }, []);

    const router = useRouter();
    const [awardIndex, setAwardIndex] = useState(0);
    const [mentionIndex, setMentionIndex] = useState(0);
    const [professionalIndex, setProfessionalIndex] = useState(0);
    const [currentProfessional, setCurrentProfessional] = useState(professionals.slice(0, 3));

    // Timer to change the award every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleRightArrowAwards();
        }, 5000);

        // Cleanup function to clear the timer when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, [awardIndex]);

    // this useEffect runs every time the professionalIndex changes, it updates 3 professionals array that is displayed
    useEffect(() => {
        if (professionalIndex < professionals.length - 3) {
            setCurrentProfessional(professionals.slice(professionalIndex, professionalIndex + 3));
        } else {
            setCurrentProfessional(professionals.slice(professionalIndex, professionals.length).concat(professionals.slice(0, 3 - (professionals.length - professionalIndex))));
        }
    }, [professionalIndex]);

    const handleLeftArrowAwards = () => {
        if (awardIndex == 0) {
            setAwardIndex(awards.length - 1);
        } else {
            setAwardIndex(mentionIndex - 1);
        }
    }

    const handleRightArrowAwards = () => {
        setAwardIndex(awardIndex + 1);
    }

    const handleRightArrowMentions = () => {
        setMentionIndex(mentionIndex + 1);
    }

    const handleRightArrowProfessionals = () => {
        if (professionalIndex == professionals.length - 1) {
            setProfessionalIndex(0);
        } else {
            setProfessionalIndex(professionalIndex + 1)
        }
    }

    return (
        <Layout>
            <div className={styles.awardsCard}>
                {/*TODO: image carousel*/}
                <div className={styles.awardsLeft}>
                    <Image className={styles.awardImage} src={awards[awardIndex % awards.length]} alt={t('publications.recognitions.awards.image_alt')} width="0" height="0" sizes="100vw"/>
                    <ArrowButton left className={styles.awardsLeftButton} color="#F2F2F2" onClick={handleLeftArrowAwards}/>
                    <ArrowButton right className={styles.awardsRightButton} color="#F2F2F2" onClick={handleRightArrowAwards}/>
                </div>
                <div className={styles.awardsRight}>
                    <text className={styles.awardsText}><T keyName="publications.recognitions.awards.kicker" /></text>
                    <text className={styles.awardsTitle}><T keyName="publications.recognitions.awards.title" /></text>
                    <text className={styles.awards}>
                        <T keyName="publications.recognitions.awards.description" />
                    </text>
                </div>
            </div>
            {/* TODO: Outstanding Student Award */}

            <div className={styles.internationalCollective}>
                <a href="https://hkn.ieee.org/" target="_blank" rel="noopener noreferrer">
                    <img className={styles.internationalCollectiveImage} src="/Publications/hkn_ideogramma_collective.svg" alt="HKN Ideaogramma" />
                </a>
                <text className={styles.internationalCollectiveText}><T keyName="publications.recognitions.international_collective" /></text>
            </div>

            <div className={styles.mentionsCard}>
                <div className={styles.mentionsLeft}>
                    <text className={styles.mentionsText}><T keyName="publications.recognitions.mentions.kicker" /></text>
                    <text className={styles.mentionsTitle}><T keyName="publications.recognitions.mentions.title_line1" /></text>
                    <text className={styles.mentionsTitle}><T keyName="publications.recognitions.mentions.title_line2" /></text>
                </div>
                <MentionCard mention={mentions[mentionIndex % mentions.length]}/>
                {mentions.length > 1 &&
                    <ArrowButton className={styles.mentionsButton} color="#F2F2F2" onClick={handleRightArrowMentions}/>
                }
            </div>

            {/*<div className={styles.professionalsContainer}>
                <text className={styles.professionalsText}>PROFESSIONALS</text>
                <text className={styles.professionalsTitle}>Professors</text>
                <text className={styles.professionalsTitle}>Take The Floor</text>
                <div className={styles.professionalsCards}>
                    {/*TODO: image transition animation* /}
                    {currentProfessional.map((professional, index) => (
                        <ProfessionalCard key={index} professional={professional}/>
                    ))}
                    {professionals.length > 3 &&
                        <ArrowButton className={styles.professionalsButton} onClick={handleRightArrowProfessionals}/>
                    }
                </div>
            </div>*/}
        </Layout>
    )
}