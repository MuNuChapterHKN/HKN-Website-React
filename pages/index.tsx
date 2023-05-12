import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {useRouter} from "next/router";
import Layout from "./Layout";
import HomeLogo from "../components/Home/HomeLogo";
import RoundButton from "../components/molecules/RoundButton";
import {PolygonProps} from "@/components/Polygon";
import {useEffect, useState} from "react";

const polygons: PolygonProps[] = [
    {
        width: 270, height: 240, left: 10, top: 0,
        gradient: "linear-gradient(to top, #FF0000, #FCA702 60%, #FCA702)",
        vertices: [{x: 0, y: 0}, {x: 100, y: 0}, {x: 8, y: 100}]
    },
    {
        width: 170,
        height: 340,
        left: 80,
        top: 0,
        gradient: "linear-gradient(to bottom, #efab00, #FFC700)",
        vertices: [
            {x: 0, y: 0},
            {x: 100, y: 0},
            {x: 20, y: 100}
        ]
    },
    {
        width: 270,
        height: 280,
        left: 120,
        top: 0,
        gradient: "linear-gradient(150deg, #FCB702, #FCB702 20%, rgba(255,23,0,1) 75%, rgba(255,23,0,1) 100%)",
        vertices: [
            {x: 0, y: 0},
            {x: 30, y: 0},
            {x: 100, y: 80}
        ]
    },
    {
        width: 1000,
        height: 800,
        right: -670,
        top: 130,
        gradient: "linear-gradient(to bottom, rgba(252,167,2,1) 0%, rgba(211,88,18,1) 72%, rgba(181,29,29,1) 100%)",
        vertices: [
            {x: 0, y: 0},
            {x: 70, y: 100},
            {x: 100, y: 60}
        ]
    },
    {
        width: 1200,
        height: 750,
        right: -620,
        top: 290,
        gradient: "linear-gradient(to bottom, rgba(255,0,0,1) 0%, rgba(252,183,2,1) 63%, rgba(252,183,2,1) 100%)",
        vertices: [
            {x: 50, y: 0},
            {x: 100, y: 40},
            {x: 0, y: 100}
        ]
    },
    {
        width: 1000,
        height: 800,
        right: -300,
        top: 230,
        gradient: "linear-gradient(to top, rgba(255,0,0,1) 0%, rgba(252,167,2,1) 35%, rgba(252,167,2,1) 100%)",
        vertices: [
            {x: 95, y: 0},
            {x: 100, y: 35},
            {x: 0, y: 100}
        ]
    },
    {
        width: 400,
        height: 650,
        left: -120,
        top: 1800,
        gradient: "linear-gradient(117deg, rgba(252,167,2,1) 0%, rgba(211,88,18,1) 45%,  rgba(181,29,29,1) 55%, rgba(181,29,29,1) 100%)",
        vertices: [{x:0, y:25}, {x:20, y:100}, {x:100, y:0}]
    },
    {
        width: 700,
        height: 800,
        left: -200,
        top: 1540,
        gradient: "linear-gradient(120deg, rgba(255,0,0,1) 0%, rgba(252,183,2,1) 53%, rgba(252,183,2,1) 100%)",
        vertices: [{x:10, y:35}, {x:100, y:0}, {x:0, y:100}]
    },
    {
        width: 500,
        height: 850,
        left: -200,
        top: 1200,
        gradient: "linear-gradient(to right, rgb(252, 144, 2) 0%, rgb(252, 173, 2) 60%, rgba(252,183,2,1) 100%)",
        vertices: [{x:0, y:0}, {x:100, y:20}, {x:0, y:100}]
    }
];

export default function Home() {
    const router = useRouter();
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // @ts-ignore
    return (
        <Layout polygons={polygons}>

            <div className={styles.titleContainer}>
                <div className={styles.titleColumn}>
                    <text className={styles.drivenByPassion}>Driven By Passion</text>
                    <text className={styles.drivenByPassion}>Guided By Values</text>
                    <text className={styles.welcomeTo}>Welcome to our world, we are the Mu Nu Chapter of IEEE-HKN at
                        the Polytechnic University of Turin.
                    </text>
                    <div className={styles.titleButtons}>
                        <RoundButton className={styles.joinUsTitleButton} onClick={() => router.push('/JoinUs')}
                                     textButton={"JOIN US"}/>
                        <RoundButton style={{border: 'solid 2px #CA5B01'}} className={styles.aboutUsTitleButton}
                                     onClick={() => router.push('/AboutUs')} textButton={"ABOUT US"}/>
                    </div>
                </div>
                {(windowWidth == 0 || windowWidth > 1100) && <div className={styles.logoContainer}>
                    <HomeLogo/>
                </div>}
            </div>

            <div className={styles.awardsContainer}>
                <div className={styles.awards}>
                    <Image className={styles.outstandingAward} src="/Home/outstanding-2019.png" alt="Award" width={228}
                           height={200}/>
                    <Image className={styles.outstandingAward} src="/Home/outstanding-2020.png" alt="Award" width={228}
                           height={200}/>
                    <Image className={styles.outstandingAward} src="/Home/outstanding-2021.png" alt="Award" width={228}
                           height={200}/>
                    <Image className={styles.outstandingAward} src="/Home/outstanding-2022.png" alt="Award" width={228}
                           height={200}/>
                </div>
            </div>

            <div className={styles.visionContainer}>
                <div className={styles.visionLeft}>
                    <text className={styles.visionText}>VISION</text>
                    <text className={styles.visionTitle}>Discover Mu Nu Chapter</text>
                    <text className={styles.vision}>Since 2017 we are dedicated to encouraging excellence in the
                        IEEE-designated fields of interest, continuing to reinvent ourselves to meet the needs of our
                        members and society overall
                    </text>
                    <div className={styles.visionButtons}>
                        <RoundButton className={styles.peopleVisionButton} onClick={() => router.push('/People')}
                                     textButton={"PEOPLE"}/>
                        {/*TODO: add link*/}
                        <RoundButton style={{border: 'solid 2px #CA5B01'}} className={styles.galleryVisionButton}
                                     onClick={() => router.push('/404')} textButton={"PHOTO GALLERY"}/>
                    </div>
                </div>
                <img className={styles.visionImage} src="/Home/vision.jpg" alt="Vision"/>
            </div>

            <div className={styles.originsContainer}>
                <Image className={styles.originsImage} src="/Home/origins.jpg" alt="Vision" width="0" height="0" sizes="100vw"/>
                <div className={styles.originsRight}>
                    <text className={styles.originsText}>ORIGINS</text>
                    <text className={styles.originsTitle}>Eta Kappa Nu, IEEE Honor Society</text>
                    <text className={styles.origins}>Founded in 1904, Eta Kappa Nu (IEEE-HKN), the honor society of
                        IEEE, promotes the ideals of Scholarship, Character and Attitude. Catch a glimpse to our
                        origins.
                    </text>
                    <div className={styles.originsButtons}>
                        <RoundButton className={styles.readMeOriginsButton} onClick={() => router.push('/404')}
                                     textButton={"READ ME"}/>
                        {/*TODO: add link*/}
                    </div>
                </div>
            </div>

            <div className={styles.projectsContainer}>
                <text className={styles.projectsText}>NEWS</text>
                <text className={styles.projectsTitle}>Our Latest</text>
                <text className={styles.projectsTitle}>Projects</text>
                <div className={styles.projectsCards}>
                    <div className={styles.projectsLeft} onClick={() => router.push('/404')}>
                        <div className={styles.projectsImageClip}>
                            <img className={styles.projectsPicture} src="/Home/Projects/Sirius_vedere.jpg"
                                 alt="project"/>
                        </div>
                        <text className={styles.projectTitle}>Sirius: Vedere il futuro con gli occhi del presente</text>
                        <text className={styles.project}>Per la prima volta sono i ragazzi di HKN a far visita ad
                            un’azienda: la SIRIUS (Sirius | Home). Per i nuovi associati questa è stata la prima
                            esperienza di formazione interna, ma la vera novità ha coinvolto i già associati: potersi
                            recare in prima persona a visitare un’impresa si è rivelata un’esperienza ...
                        </text>
                        {/*TODO: add link*/}
                    </div>
                    <div className={styles.projectsCenter}>
                        <div className={styles.projectsImageClip} onClick={() => router.push('/404')}>
                            <img className={styles.projectsPicture} src="/Home/Projects/Vivere_lassociazione.png"
                                 alt="project"/>
                        </div>
                        <text className={styles.projectTitle}>Vivere l’associazione Online: una guida per principianti
                        </text>
                        <text className={styles.project}>Inizialmente l’idea è nata dalla solitudine. Starsene chiusi in
                            casa e non vedere nessuno per via del lockdown era una condizione che se all’inizio poteva
                            sembrare esaltante e quasi eroica, con l’andar del tempo era diventata devastante. Il
                            pensiero di entrare a far parte di una honor society ...
                        </text>
                        {/*TODO: add link*/}
                    </div>
                    <div className={styles.projectsRight}>
                        <div className={styles.projectsImageClip} onClick={() => router.push('/404')}>
                            <img className={styles.projectsPicture} src="/Home/Projects/Poli_covid.png" alt="project"/>
                        </div>
                        <text className={styles.projectTitle}>POLITO, HKN e Covid-19: una riflessione</text>
                        <text className={styles.project}>Ore diciassette di una silenziosa domenica di marzo. Silenziosa
                            perché le strade sono deserte e più forte che mai risuonano soltanto i nostri pensieri. In
                            questi casi non resta che dar loro una forma proiettandoli in mondi molto più vasti rispetto
                            alle mura in cui siamo confinati in questi ...
                        </text>
                        {/*TODO: add link*/}
                    </div>
                </div>
            </div>

            <div className={styles.applyCard}>
                <text className={styles.textAreYouReady}>ARE YOU READY?</text>
                <text className={styles.textJoinOurChapter}>Join Our Chapter And</text>
                <text className={styles.textJoinOurChapter}>Become The Next HKNuer</text>
                <RoundButton className={styles.buttonJoinUs} textButton={"JOIN US"} onClick={() => router.push('/JoinUs')}/>
            </div>

        </Layout>
    )
}
