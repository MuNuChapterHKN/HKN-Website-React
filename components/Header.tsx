import styles from "@/styles/components/Header.module.css";
import Image from "next/image";
import {useRouter} from "next/router";
import RoundButton from "./molecules/RoundButton";
import React, { useState } from "react";


const Header = ({darkHeader = false} : {darkHeader? :boolean}) => {
    const router = useRouter();
    const isActive = (pathname : string) => router.pathname === pathname;
    const [navbarOpen, toggleNavbar] = useState(false);

    const handleNavigate = (event: React.MouseEvent<Element, MouseEvent>, pathname : string) => {
        event.preventDefault();
        event.stopPropagation();
        router.push(pathname);
    }

    return (
        <header className={`${styles.header} ${navbarOpen ? styles.open : ''}`} >
            <div className={styles.logoTitle} onClick={() => router.push('/')} >
                <Image className={styles.logo} src="/Common/hkn_logo_white_vector.svg" alt="HKN PoliTO Logo" width={120} height={120}/>
                {/*<div className={styles.title} >
                    <text style={{fontSize:25, fontWeight:600}}>HKN</text>
                    <text style={{fontSize:15.2, fontWeight:400, marginTop:-10}}>POLITO</text>
                </div>*/}
            </div>

            <div className={`${styles.menu} ${navbarOpen ? styles.open : ''}`}>
                <div className={isActive('/') ? styles.active : styles.inactive} onClick={() => router.push('/')}>
                    Home
                </div>

                <div className={isActive('/AboutUs') ? styles.active : styles.inactive} onClick={() => router.push('/AboutUs')}>
                    About
                </div>

                <div className={`${isActive('/People/People') || isActive('/People/Alumni') || isActive('/People/Professionals') || isActive('People/PastBoards') ? styles.active : styles.inactive} ${styles.menuItem}`}
                     onClick={() => router.push('/People/People')}>
                    <div className={styles.itemWrapper}>
                        People
                        <div className={styles.arrowDown}></div>
                    </div>
                    <ul className={styles.dropdown}>
                        <li className={isActive('/People/People') ? styles.activeDropdown : ''}
                            onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleNavigate(e, '/People/People')}>People
                        </li>
                        <li className={isActive('/People/Alumni') ? styles.activeDropdown : ''}
                            onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleNavigate(e, '/People/Alumni')}>Alumni
                        </li>
                        <li className={isActive('/People/Professionals') ? styles.activeDropdown : ''}
                            onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleNavigate(e, '/People/Professionals')}>Professionals
                        </li>
                        <li className={isActive('/People/PastBoards') ? styles.activeDropdown : ''}
                            onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleNavigate(e, '/People/PastBoards')}>Past Boards
                        </li>

                    </ul>
                </div>

                <div className={isActive('/Activities/Events') ? styles.active : styles.inactive}
                     onClick={() => router.push('/Activities/Events')}>
                Events
                </div>

                <div className={isActive('/Activities/StudyGroups') ? styles.active : styles.inactive}
                     onClick={() => router.push('/Activities/StudyGroups')}>
                Study Groups
                </div>
{/* 
                <div
                    className={`${isActive('/Activities/Activities') || isActive('/Activities/Events') || isActive('/Activities/StudyGroups') || isActive('/Activities/Masterclasses') ? styles.active : styles.inactive} ${styles.menuItem}`}
                     onClick={() => router.push('/Activities/Activities')}>
                    <div className={styles.itemWrapper}>
                        Activities
                        <div className={styles.arrowDown}></div>
                    </div>
                    <ul className={styles.dropdown}>
                        <li className={isActive('/Activities/Events') ? styles.activeDropdown : ''}
                            onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleNavigate(e, '/Activities/Events')}>Events
                        </li>
                        {<li className={isActive('/Activities/Masterclasses') ? styles.activeDropdown  : ''} onClick={() => router.push('/Activities/Masterclasses')}>Masterclasses</li>}
                        <li className={isActive('/Activities/StudyGroups') ? styles.activeDropdown : ''}
                            onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleNavigate(e, '/Activities/StudyGroups')}>Study
                            Groups
                        </li>
                    </ul>
                </div> */}

                <div className={isActive('/Publications/Recognitions') ? styles.active : styles.inactive}
                     onClick={() => router.push('/Publications/Recognitions')}>
                Publications
                </div>

                {/*<div className={`${isActive('/Publications/Recognitions') || isActive('/Publications/Blogs') ? styles.active : styles.inactive} onClick={() => router.push('/Publications/Recognitions') ${styles.menuItem}`}>
                    <div className={styles.itemWrapper}>
                        Publications
                        <div className={styles.arrowDown}></div>
                    </div>
                    <ul className={styles.dropdown}>
                        <li className={isActive('/Publications/Recognitions') ? styles.activeDropdown : ''} onClick={() => router.push('/Publications/Recognitions')}>Recognitions</li>
                        <li className={isActive('/Publications/Blogs') ? styles.activeDropdown : ''} onClick={() => router.push('/Publications/Blogs')}>Blogs</li>
                    </ul>
                </div>*/}

            </div>

            <div className={styles.headerSpace}>
                <RoundButton className={styles.joinUsButton} onClick={() => router.push('/JoinUs')}>Join Us</RoundButton>
            </div>

            <img onClick={() => toggleNavbar((open) => !open)} src={'/Common/bars.svg'} height={'30px'} width={'30px'} alt="Menu" className={styles.showMenu}/>
        </header>
    )
}

export default Header;
