import Layout from "./Layout";
import styles from '@/styles/Recognitions.module.css'
import {useRouter} from "next/router";
import Image from "next/image";
import ProfessionalCard from "@/components/Recognitions/ProfessionalCard";
import {useEffect, useState} from "react";

const professionals = [
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentProfessional, setCurrentProfessional] = useState(professionals.slice(0, 3));

    useEffect(() => {
        if (currentIndex < professionals.length - 3) {
            setCurrentProfessional(professionals.slice(currentIndex, currentIndex + 3));
        } else {
            setCurrentProfessional(professionals.slice(currentIndex, professionals.length).concat(professionals.slice(0, 3 - (professionals.length - currentIndex))));
        }
    }, [currentIndex]);

    const handleRightArrowProfessional = () => {
        if (currentIndex == professionals.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <Layout>
            <div className={styles.awardsCard}>
                {/*TODO: image carousel*/}
                <Image className={styles.carouselImage} src="/home/outstanding-2022.png" alt="Award" width={433} height={380}/>
                <div className={styles.awardsRight}>
                    <text className={styles.awardsText}>AWARDS</text>
                    <text className={styles.awardsTitle}>Outstanding Chapter Award</text>
                    <text className={styles.awards}>The IEEE-Eta Kappa Nu HKN PoliTo chapter was awarded among 253 selected chapters around the world, alongside universities such as the Massachusetts Institute of Technology (MIT) and UCLA.</text>
                </div>
            </div>

            <div className={styles.internationalCollective}>
                {/*TODO: add link*/}
                <img src="/Recognitions/hkn_ideogramma_collective.svg" alt="HKN Ideaogramma" width={280} height={280}/>
                <text className={styles.internationalCollectiveText}>Discover the International Collective</text>
            </div>

            <div className={styles.mentionsCard}>
                <div className={styles.mentionsLeft}>
                    <text className={styles.mentionsText}>MENTIONS</text>
                    <text className={styles.mentionsTitle}>What They</text>
                    <text className={styles.mentionsTitle}>Say About Us</text>
                </div>
                <div className={styles.mentionsRight}>
                    <Image src="/Recognitions/mentions.jpg" alt="HKN Ideaogramma"
                           width="0" height="0" sizes="100vw" className={styles.mentionsImage}/>
                    <div className={styles.mentionsImageRight}>
                        <text className={styles.mentionsImageTitle}>Worldwide Known</text>
                        <text className={styles.mentionsImageSubTitle}>POLITO NEWSLETTER</text>
                        <text className={styles.mentionsImageText}>Six years after its foundation, IEEE-ETA KAPPA NU CHAPTER AT POLITO MAkes headlines worldwide</text>
                    </div>
                </div>
            </div>

            <div className={styles.professionalsContainer}>
                <text className={styles.professionalsText}>PROFESSIONALS</text>
                <text className={styles.professionalsTitle}>Professors</text>
                <text className={styles.professionalsTitle}>Take The Floor</text>
                <div className={styles.professionalsCards}>
                    {/*TODO: image transition animation*/}
                    {currentProfessional.map((professional) => (
                        <ProfessionalCard name={professional.name} title={professional.title} text={professional.text} imageSrc={professional.imageSrc}/>
                    ))}

                    <button className={styles.professionalsButton} onClick={handleRightArrowProfessional}>
                        <Image src="/Recognitions/right-arrow.svg" alt="Right Arrow" width={35} height={35}/>
                    </button>
                </div>
            </div>
        </Layout>
    )
}
