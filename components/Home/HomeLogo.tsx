import styles from "@/styles/components/Home/HomeLogo.module.css";
import {useEffect, useRef, useState} from "react";
import beforeEach from "node:test";

const delays = [0, 0.5, 1, 3, 3.5, 2.5, 1.5, 0.25];
const durations = [2, 2, 2, 2, 2, 2, 2, 2];

const Logo = () => {
    const logoRef = useRef<HTMLDivElement>(null);
    const isHovering = useRef<Boolean>(false);

    const handleMouseEnter = (e: { clientX: any; clientY: any; }) => {
        isHovering.current = true;
    };

    const handleMouseLeave = () => {
        isHovering.current = false;
        if (logoRef.current) {
            logoRef.current.animate(
                {
                    transform: 'rotateY(0deg)',
                },
                { duration: 800, fill: 'forwards', easing: 'ease-in-out' }
            );
        }
    };


    const handleMove = (e: { clientX: any; clientY: any; }) => {
        const { clientX, clientY } = e;
        if (logoRef.current) {
            const halfWidth = logoRef.current.offsetWidth/2;
            if (isHovering.current) {
                const deg = (20 / halfWidth) * (clientX - (logoRef.current.getBoundingClientRect().left + halfWidth));
                logoRef.current.animate(
                    {
                        transform: `rotateY(${deg}deg)`,
                    },
                    { duration: 1000, fill: 'forwards', easing: 'ease-in-out' }
                );
            }
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMove);

        return () => window.removeEventListener('mousemove', handleMove);
    }, []);


    return (
        <div className={styles.logoContContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div ref={logoRef} className={styles.logoContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="100%" width="100%">
                    <mask id="svgmask1">
                        <mask id="svgmask2">
                            <polygon points="150,58 0,164 0,0 300,0 300,164" height="100%" width="100%" fill="white"/>
                        </mask>
                        <image href="/Home/home_logo/hkn_ideogramma_white.svg" width="100%" height="100%" y="4.35%"/>

                        <image mask="url(#svgmask2)" href="/Home/home_logo/Castle.svg" width="100%" height="100%" y="50">
                            <animate attributeName="y" values="50; 0" dur={durations[0]} begin={delays[0]} fill="freeze"/>
                        </image>
                        <image mask="url(#svgmask2)" href="/Home/home_logo/Mole.svg" width="100%" height="100%" y="75">
                            <animate attributeName="y" values="75; 0" dur={durations[1]} begin={delays[1]} fill="freeze"/>
                        </image>
                        <image mask="url(#svgmask2)" href="/Home/home_logo/Dome.svg" width="100%" height="100%" y="50">
                            <animate attributeName="y" values="50; 0" dur={durations[2]} begin={delays[2]} fill="freeze"/>
                        </image>
                        <image mask="url(#svgmask2)" href="/Home/home_logo/Chiesa.svg" width="100%" height="100%" y="50">
                            <animate attributeName="y" values="50; 0" dur={durations[3]} begin={delays[3]} fill="freeze"/>
                        </image>
                        <image mask="url(#svgmask2)" href="/Home/home_logo/Torre.svg" width="100%" height="100%" y="50">
                            <animate attributeName="y" values="50; 0" dur={durations[4]} begin={delays[4]} fill="freeze"/>
                        </image>
                        <image mask="url(#svgmask2)" href="/Home/home_logo/Poli.svg" width="100%" height="100%" y="55">
                            <animate attributeName="y" values="55; 0" dur={durations[5]} begin={delays[5]} fill="freeze"/>
                        </image>
                        <image mask="url(#svgmask2)" href="/Home/home_logo/SC.svg" width="100%" height="100%" y="50">
                            <animate attributeName="y" values="50; 0" dur={durations[6]} begin={delays[6]} fill="freeze"/>
                        </image>
                        <image mask="url(#svgmask2)" href="/Home/home_logo/GM.svg" width="100%" height="100%" y="50">
                            <animate attributeName="y" values="50; 0" dur={durations[7]} begin={delays[7]} fill="freeze"/>
                        </image>
                    </mask>
                    <image mask="url(#svgmask1)" width="110%" x="-6%" y="4.5%" href="/Home/home_logo/polygons_bg.png"/>
                </svg>
            </div>
        </div>
    );
};

export default Logo;
