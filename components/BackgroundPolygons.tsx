import styles from "@/styles/components/BackgroundPolygons.module.css";
import {useEffect, useState} from "react";

const Header = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setScrollY(window.scrollY);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const triangleStyles = {
        triangleLeft1: `translateY(-${scrollY * 0.4}px)`,
        triangleLeft2: `translateY(-${scrollY * 0.35}px)`,
        triangleLeft3: `translateY(-${scrollY * 0.3}px)`,

        triangleRight1: `translateY(-${scrollY / 2}px)`,
    };

    return (
        <div className={styles.backgroundPolygons}>
            <div className={styles.triangleLeft1} style={{ transform: triangleStyles.triangleLeft1 }}></div>
            <div className={styles.triangleLeft2} style={{ transform: triangleStyles.triangleLeft2 }}></div>
            <div className={styles.triangleLeft3} style={{ transform: triangleStyles.triangleLeft3 }}></div>
            <div className={styles.triangleRight1} style={{ transform: triangleStyles.triangleRight1 }}></div>
        </div>
    )
}

export default Header;
