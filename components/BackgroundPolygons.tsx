import styles from "@/styles/components/BackgroundPolygons.module.css";
import {RefObject, useEffect, useRef, useState} from "react";
import Polygon, {PolygonProps} from "@/components/Polygon";

const BackgroundPolygons = ({polygons} : {polygons : PolygonProps[]}) => {

    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        setScrollY(window.scrollY);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // stuff for Blob Animation (Just an Idea)
    const blobRef = useRef<HTMLDivElement>(null);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    useEffect(() => {
        const lastPosition = localStorage.getItem('lastPosition');
        if (lastPosition) {
            const { clientX, clientY } = JSON.parse(lastPosition);
            setMouseX(clientX);
            setMouseY(clientY);
        }

        const handleMove = (e: { clientX: any; clientY: any; }) => {
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

    /*
    const triangleStyles = {
        triangleLeft1: `translateY(-${scrollY * 0.4}px)`,
        triangleLeft2: `translateY(-${scrollY * 0.35}px)`,
        triangleLeft3: `translateY(-${scrollY * 0.3}px)`,

        triangleRight1: `translateY(-${scrollY * 0.5}px)`,
        triangleRight2: `translateY(-${scrollY * 0.55}px)`,
        triangleRight3: `translateY(-${scrollY * 0.45}px)`,

        triangleLeft4: `translateY(-${scrollY * 0.8}px)`,
        triangleLeft5: `translateY(-${scrollY * 0.9}px)`,
        triangleLeft6: `translateY(-${scrollY * 0.7}px)`,

        triangleRight4: `translateY(-${scrollY * 0.4}px)`,
        triangleRight5: `translateY(-${scrollY * 0.35}px)`,
        triangleRight6: `translateY(-${scrollY * 0.3}px)`,

        triangleLeft7: `translateY(-${scrollY * 0.4}px)`,
        triangleLeft8: `translateY(-${scrollY * 0.35}px)`,
        triangleLeft9: `translateY(-${scrollY * 0.3}px)`,

        triangleCenter1: `translateY(-${scrollY * 0.4}px)`,
        triangleCenter2: `translateY(-${scrollY * 0.35}px)`,
        triangleCenter3: `translateY(-${scrollY * 0.3}px)`,

    };
*/
    return (
        <div className={styles.backgroundPolygons}>
            <div className={styles.blob} style={{left: mouseX, top: mouseY}} ref={blobRef}/>
            <div className={styles.blur}/>

            {polygons && polygons.map((p) => {
                return (
                    <Polygon gradient={p.gradient} width={p.width} height={p.height}
                         vertices={p.vertices} top={p.top}
                         left={p.left ? p.left : undefined}
                         right={p.right ? p.right : undefined}/>
                )})
            }
            {/*<>
                {polygons ? polygons.map((p) => {
                    <Polygon gradient={p.gradient} width={p.width} height={p.height}
                             vertices={p.vertices}  top={p.top} left={p.left ? p.left : undefined} right={p.left ? p.left : undefined}/>
                }) : null}
            </>
            {/*
            <div className={styles.triangleLeft1} style={{transform: triangleStyles.triangleLeft1}}/>
            <div className={styles.triangleLeft2} style={{transform: triangleStyles.triangleLeft2}}/>
            <div className={styles.triangleLeft3} style={{transform: triangleStyles.triangleLeft3}}/>

            <div className={styles.triangleRight1} style={{transform: triangleStyles.triangleRight1}}/>
            <div className={styles.triangleRight2} style={{transform: triangleStyles.triangleRight2}}/>
            <div className={styles.triangleRight3} style={{transform: triangleStyles.triangleRight3}}/>

            <div className={styles.triangleLeft4} style={{transform: triangleStyles.triangleLeft4}}/>
            <div className={styles.triangleLeft5} style={{transform: triangleStyles.triangleLeft5}}/>
            <div className={styles.triangleLeft6} style={{transform: triangleStyles.triangleLeft6}}/>
            */}
        </div>
    )
}

export default BackgroundPolygons;
