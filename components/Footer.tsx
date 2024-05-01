import styles from "@/styles/components/Footer.module.scss";
import {useRouter} from "next/router";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const Footer = () => {
    const router = useRouter();

    return (
        <div className={styles.footer}>
            <div className={styles.columnLogo}>
                <img className={styles.columnLogo__logopolito} src="/Common/hkn_logo_white_vector.svg" alt="HKN PoliTO Logo"/>
            </div>

            <div className={styles.column}>
                <div className={styles.column__title}>Powered By  Mu Nu Chapter of IEEE-Eta Kappa Nu</div>
                <div className={styles.column__subtitle}>Copyright © 2023 All rights reserved</div>

                <div className={styles.column__contact}>
                    <a className={styles.column__contact__item} href="https://www.polito.it/">
                        <ContactIcon src="/Icons/location.png"/>
                        Politecnico Di Torino
                    </a>
                    <a className={styles.column__contact__item} href="mailto:info@hknpolito.org">
                        <ContactIcon src="/Icons/mail.png"/>
                        info@hknpolito.org
                    </a>
                </div>

                <div className={styles.links}>
                    <LinkIcon src="/Icons/facebook.png" link="https://www.facebook.com/hknpolito/"/>
                    <LinkIcon src="/Icons/instagram.png" link="https://www.instagram.com/hknpolito/"/>
                    <LinkIcon src="/Icons/youtube.png" link="https://www.youtube.com/channel/UCEPeZOBv08kO2ImbjgM7yBw"/>
                    <LinkIcon src="/Icons/twitter.png" link="https://twitter.com/HKNPoliTo"/>
                    <LinkIcon src="/Icons/spotify.png" link="https://open.spotify.com/show/4MMAaLMKiyUI0jcrxZjH2s?si=0YvAwZVSTAqCLxSQRwp81w&nd=1"/>
                    <LinkIcon src="/Icons/linkedin.png" link="https://www.linkedin.com/company/mu-nu-chapter-of-ieee-eta-kappa-nu"/>
                </div>
            </div>

            <div className={styles.columnLogo}>
                <a href="https://hkn.ieee.org/">
                    <img className={styles.columnLogo__logokhn} src="/Common/hkn_logo_society.png" alt="HKN Logo"/>
                </a>
            </div>
        </div>
    )
}


const ContactIcon = ({src}: {src: string}) => {
    return (
        <div className={styles.contactIcon}>
            <img className={styles.contactIcon__icon} src={src} alt="Contact Icon"/>
        </div>
    )
}

const LinkIcon = ({src, link}: {src: string, link: string}) => {

    return (
        <a className={styles.linkIcon} href={link}>
            <img className={styles.linkIcon__icon} src={src} alt="Link Icon"/>
        </a>
    )
}

export default Footer;
