import Layout from "./Layout";
import styles from '@/styles/Recognitions.module.css'
import RoundButton from "../components/molecules/RoundButton";
import {useRouter} from "next/router";
import Image from "next/image";

export default function JoinUs() {
    const router = useRouter();

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

            <div className={styles.mentionscard}>

            </div>

            <div className={styles.professionals}>

            </div>
        </Layout>
    )
}
