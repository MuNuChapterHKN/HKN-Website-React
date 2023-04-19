import styles from "@/styles/components/BackgroundPolygons.module.css";
import {useEffect, useRef, useState} from "react";
import {blob} from "stream/consumers";

const Header = () => {
    const blobRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        setScrollY(window.scrollY);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const lastPosition = localStorage.getItem('lastPosition');
        if (lastPosition) {
            const { clientX, clientY } = JSON.parse(lastPosition);
            setMouseX(clientX);
            setMouseY(clientY);
        }

        const handleMove = (e) => {
            const { clientX, clientY } = e;

            if (blobRef.current) {
                blobRef.current.animate(
                    {
                        left: `${clientX}px`,
                        top: `${clientY}px`,
                    },
                    { duration: 3000, fill: 'forwards' }
                );
                localStorage.setItem('lastPosition', JSON.stringify({ clientX, clientY }));
            }
        };

        window.addEventListener('mousemove', handleMove);

        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    const triangleStyles = {
        triangleLeft1: `translateY(-${scrollY * 0.4}px)`,
        triangleLeft2: `translateY(-${scrollY * 0.35}px)`,
        triangleLeft3: `translateY(-${scrollY * 0.3}px)`,
    };

    return (
        <div className={styles.backgroundPolygons}>
            <div className={styles.blob} style={{left:mouseX, top:mouseY}} ref={blobRef}></div>
            <div className={styles.blur}></div>

            <div className={styles.triangleLeft1} style={{ transform: triangleStyles.triangleLeft1 }}></div>
            <div className={styles.triangleLeft2} style={{ transform: triangleStyles.triangleLeft2 }}></div>
            <div className={styles.triangleLeft3} style={{ transform: triangleStyles.triangleLeft3 }}></div>

        </div>
    )
}

export default Header;
