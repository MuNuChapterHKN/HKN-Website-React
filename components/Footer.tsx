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
                <div className={styles.column__title}>Copyright © 2023 All rights reserved</div>

                <div className={styles.column__contact}>
                    <div className={styles.column__contact__item}>
                        <ContactIcon src="/Icons/Location.png"/>
                        Politecnico Di Torino
                    </div>
                    <div className={styles.column__contact__item}>
                        <ContactIcon src="/Icons/Mail.png"/>
                        info@hknpolito.org
                    </div>
                </div>

                <div className={styles.links}>
                    <LinkIcon src="/Icons/Facebook.png" srcHover="/Icons/facebook_color.png" link="https://www.facebook.com/hknpolito/"/>
                    <LinkIcon src="/Icons/Instagram.png" srcHover="/Icons/instagram_color.png"  link="https://www.instagram.com/hknpolito/"/>
                    <LinkIcon src="/Icons/youtube.png" srcHover="/Icons/youtube.png"  link="https://www.youtube.com/channel/UCEPeZOBv08kO2ImbjgM7yBw"/>
                    <LinkIcon src="/Icons/twitter.png" srcHover="/Icons/twitter_color.png"  link="https://twitter.com/HKNPoliTo"/>
                    <LinkIcon src="/Icons/Spotify.png" srcHover="/Icons/spotify_color.png"  link=""/>
                    <LinkIcon src="/Icons/Linkedin.png" srcHover="/Icons/linkedin_color.png"  link="https://www.linkedin.com/company/mu-nu-chapter-of-ieee-eta-kappa-nu"/>
                </div>
            </div>

            <div className={styles.columnLogo}>
                <img className={styles.columnLogo__logokhn} src="/Common/hkn_logo_society.png" alt="HKN Logo"/>
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

const LinkIcon = ({src, srcHover, link}: {src: string, srcHover: string, link: string}) => {

    const [imgSrc, setImgSrc] = useState<string>(src);

    const handleMouseOver = () => {
        setImgSrc(srcHover);
    };

    const handleMouseOut = () => {
        setImgSrc(src);
    };

    return (
        <a className={styles.linkIcon} href={link}>
            <img className={styles.linkIcon__icon} src={imgSrc} alt="Link Icon" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        </a>
    )
}

export default Footer;
