import styles from "@/styles/components/Footer.module.scss";
import {useRouter} from "next/router";
import Image from "next/image";


const Footer = () => {
    const router = useRouter();

    return (
        <div className={styles.footer}>

            <div className={styles.column}>
                <div className={styles.columnTitle} >
                    <text style={{fontSize:25, fontWeight:600}}>HKN</text>
                    <text style={{fontSize:15.2, fontWeight:400, marginTop:-10}}>POLITO</text>
                </div>

                <a className={styles.link} href={"/"}>Home</a>
                <a className={styles.link} href={"/AboutUs"}>About Us</a>
                <a className={styles.link} href={"/Activities/Activities"}>Events</a>
                <a className={styles.link} href={"/People"}>People</a>
                <a className={styles.link} href={"/JoinUs"}>Recruitment</a>
            </div>

            <div className={styles.column}>
                <text className={styles.columnTitle}>Follow our work</text>

                <a className={styles.link}>Github</a>
                <a className={styles.link} href={"/Activities/Events"}>Past Events</a>
                <a className={styles.link} href={"/Activities/StudyGroups"}>Study Groups</a>
            </div>

            <div className={styles.column}>
                <text className={styles.columnTitle}>Contacts</text>

                <a className={styles.link}>Instagram</a>
                <a className={styles.link}>Linkedin</a>
                <a className={styles.link}>Facebook</a>
                <a className={styles.link}>Spotify</a>
                <a className={styles.link}>Twitter</a>
            </div>

            <div className={styles.column}>
                <text className={styles.columnTitle}>IEEE</text>

                <a className={styles.link}>IEEE</a>
                <a className={styles.link}>HKN-Mamma</a>
            </div>

            <div className={styles.columnLogoSociety}>
                <Image className={styles.logoSociety} src="/hkn_logo_society.png" alt="HKN PoliTO Logo" width="0" height="0" sizes="100vw"/>
            </div>
        </div>
    )
}

export default Footer;
