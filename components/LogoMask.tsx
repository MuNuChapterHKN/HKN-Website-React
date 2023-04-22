import styles from "@/styles/components/HomeLogo.module.css";
import Image from "next/image";

const width = 600;
const height = 600;

const HomeLogo = () => {
    return (
        <>
            <image href="/home_logo/hkn_ideogramma_white.svg" width="100%" height="100%" y="4.35%"/>
            <image href="/home_logo/Castle.svg"  width="100%" height="100%"/>
            <image href="/home_logo/Chiesa.svg"  width="100%" height="100%"/>
            <image href="/home_logo/Dome.svg"  width="100%" height="100%"/>
            <image href="/home_logo/GM.svg" width="100%" height="100%"/>
            <image href="/home_logo/Mole.svg"  width="100%" height="100%"/>
            <image href="/home_logo/Poli.svg" width="100%" height="100%"/>
            <image href="/home_logo/SC.svg" width="100%" height="100%"/>
            <image href="/home_logo/Torre.svg" width="100%" height="100%"/>
        </>
    )
}

export default HomeLogo;
