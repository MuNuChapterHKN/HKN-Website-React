import styles from "@/styles/components/HomeLogo.module.css";
import Image from "next/image";
import {useRouter} from "next/router";
import LogoMask from "./LogoMask";


const Logo = () => {

    return (
        <div className={styles.logoContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="100%" width="100%">
                <mask id="svgmask1">
                    <LogoMask/>
                </mask>
                <image mask="url(#svgmask1)" width="110%" x="-6%" y="4.5%"  href="/home_logo/polygons_bg.png"/>
            </svg>
        </div>
    );
};

export default Logo;
