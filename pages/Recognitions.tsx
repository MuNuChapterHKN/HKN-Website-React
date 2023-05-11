import Layout from "./Layout";
import styles from '@/styles/Recognitions.module.css'
import {useRouter} from "next/router";
import Image from "next/image";
import ProfessionalCard, {Professional} from "@/components/Recognitions/ProfessionalCard";
import {useEffect, useState} from "react";
import MentionCard, {Mention} from "../components/Recognitions/MentionCard";

const awards : string[] = [
    "/Home/outstanding-2022.png",
    "/Home/outstanding-2021.png",
    "/Home/outstanding-2020.png",
    "/Home/outstanding-2019.png",
];

const mentions : Mention[] = [
    {imageSrc:"/Recognitions/Mentions/mentions.jpg", title: "Worldwide Known", subtitle: "POLITO NEWSLETTER", text:"Six years after its foundation, IEEE-ETA KAPPA NU CHAPTER AT POLITO MAkes headlines worldwide"},
    {imageSrc:"/Recognitions/Mentions/mentions.jpg", title: "Locally Known", subtitle: "Massachusetts Institute of Technology", text:"Six years after its foundation, IEEE-ETA KAPPA NU CHAPTER AT POLITO MAkes headlines worldwide"},
    {imageSrc:"/Recognitions/Mentions/mentions.jpg", title: "Unknown", subtitle: "Caltech", text:"Six years after its foundation, IEEE-ETA KAPPA NU CHAPTER AT POLITO MAkes headlines worldwide"},
]

const professionals : Professional[] = [
    {imageSrc:"/Recognitions/Professionals/Montuschi.jpeg", name: "Paolo Montuschi", title: "Associate Professor", text:"\"adjfbiaboidsboiabfoibdofia bdfhbahdbahbfoahdsbfoahsbd oh dfoihabodhbfoajncajnijnaj jsnvlajnljvnlajnvajbv abdsivbviabvoiabvoahbvhbahd\""},
    {imageSrc:"/Recognitions/Professionals/Montuschi.jpeg", name: "Alessandro Volta", title: "Associate Professor", text:"\"adjfbiaboidsboiabfoibdofia bdfhbahdbahbfoahdsbfoahsbd oh dfoihabodhbfoajncajnijnaj jsnvlajnljvnlajnvajbv abdsivbviabvoiabvoahbvhbahd\""},
    {imageSrc:"/Recognitions/Professionals/Montuschi.jpeg", name: "James Clerk Maxwell", title: "Associate Professor", text:"\"adjfbiaboidsboiabfoibdofia bdfhbahdbahbfoahdsbfoahsbd oh dfoihabodhbfoajncajnijnaj jsnvlajnljvnlajnvajbv abdsivbviabvoiabvoahbvhbahd\""},
    {imageSrc:"/Recognitions/Professionals/Montuschi.jpeg", name: "Nikola Tesla", title: "Associate Professor", text:"\"adjfbiaboidsboiabfoibdofia bdfhbahdbahbfoahdsbfoahsbd oh dfoihabodhbfoajncajnijnaj jsnvlajnljvnlajnvajbv abdsivbviabvoiabvoahbvhbahd\""},
    {imageSrc:"/Recognitions/Professionals/Montuschi.jpeg", name: "Thomas Edison", title: "Associate Professor", text:"\"adjfbiaboidsboiabfoibdofia bdfhbahdbahbfoahdsbfoahsbd oh dfoihabodhbfoajncajnijnaj jsnvlajnljvnlajnvajbv abdsivbviabvoiabvoahbvhbahd\""},
    {imageSrc:"/Recognitions/Professionals/Montuschi.jpeg", name: "Albert Einstein", title: "Associate Professor", text:"\"adjfbiaboidsboiabfoibdofia bdfhbahdbahbfoahdsbfoahsbd oh dfoihabodhbfoajncajnijnaj jsnvlajnljvnlajnvajbv abdsivbviabvoiabvoahbvhbahd\""},
    {imageSrc:"/Recognitions/Professionals/Montuschi.jpeg", name: "Isaac Newton", title: "Associate Professor", text:"\"adjfbiaboidsboiabfoibdofia bdfhbahdbahbfoahdsbfoahsbd oh dfoihabodhbfoajncajnijnaj jsnvlajnljvnlajnvajbv abdsivbviabvoiabvoahbvhbahd\""},
];

export default function JoinUs() {
    const router = useRouter();
    const [awardIndex, setAwardIndex] = useState(0);
    const [mentionIndex, setMentionIndex] = useState(0);
    const [professionalIndex, setProfessionalIndex] = useState(0);
    const [currentProfessional, setCurrentProfessional] = useState(professionals.slice(0, 3));

    // Timer to change the award every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setAwardIndex(awardIndex + 1);
        }, 5000);

        // Cleanup function to clear the timer when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);

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
                    <Image className={styles.awardImage} src={awards[awardIndex % awards.length]} alt="Award" width="0" height="0" sizes="100vw"/>
                    <button className={styles.awardsLeftButton} onClick={handleLeftArrowAwards}>
                        <Image src="/Recognitions/left-arrow.svg" alt="Right Arrow" width={35} height={35}/>
                    </button>
                    <button className={styles.awardsRightButton} onClick={handleRightArrowAwards}>
                        <Image src="/Recognitions/right-arrow.svg" alt="Right Arrow" width={35} height={35}/>
                    </button>
                </div>
                <div className={styles.awardsRight}>
                    <text className={styles.awardsText}>AWARDS</text>
                    <text className={styles.awardsTitle}>Outstanding Chapter Award</text>
                    <text className={styles.awards}>The IEEE-Eta Kappa Nu HKN PoliTo chapter was awarded among 253 selected chapters around the world, alongside universities such as the Massachusetts Institute of Technology (MIT) and UCLA.</text>
                </div>
            </div>

            <div className={styles.internationalCollective}>
                {/*TODO: add link*/}
                <img src="/Recognitions/hkn_ideogramma_collective.svg" alt="HKN Ideaogramma" />
                <text className={styles.internationalCollectiveText}>Discover the International Collective</text>
            </div>

            <div className={styles.mentionsCard}>
                <div className={styles.mentionsLeft}>
                    <text className={styles.mentionsText}>MENTIONS</text>
                    <text className={styles.mentionsTitle}>What They</text>
                    <text className={styles.mentionsTitle}>Say About Us</text>
                </div>
                <MentionCard mention={mentions[mentionIndex % mentions.length]}/>
                {mentions.length > 1 &&
                    <button className={styles.mentionsButton} onClick={handleRightArrowMentions}>
                        <Image src="/Recognitions/right-arrow.svg" alt="Right Arrow" width={35} height={35}/>
                    </button>
                }
            </div>

            <div className={styles.professionalsContainer}>
                <text className={styles.professionalsText}>PROFESSIONALS</text>
                <text className={styles.professionalsTitle}>Professors</text>
                <text className={styles.professionalsTitle}>Take The Floor</text>
                <div className={styles.professionalsCards}>
                    {/*TODO: image transition animation*/}
                    {currentProfessional.map((professional, index) => (
                        <ProfessionalCard key={index} professional={professional}/>
                    ))}
                    {professionals.length > 3 &&
                        <button className={styles.professionalsButton} onClick={handleRightArrowProfessionals}>
                            <Image src="/Recognitions/right-arrow.svg" alt="Right Arrow" width={35} height={35}/>
                        </button>
                    }
                </div>
            </div>
        </Layout>
    )
}
