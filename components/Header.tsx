import styles from "@/styles/components/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import RoundButton from "./molecules/RoundButton";
import React, { useState } from "react";
import { Navbar } from '../components/components_toolge/NavBar';
import { T, useTranslate } from "@tolgee/react";

const Header = ({ darkHeader = false }: { darkHeader?: boolean }) => {
    const router = useRouter();
    const isActive = (pathname: string) => router.pathname === pathname;
    const [navbarOpen, toggleNavbar] = useState(false);
    const { t } = useTranslate();

    const handleNavigate = (event: React.MouseEvent<Element, MouseEvent>, pathname: string) => {
        event.preventDefault();
        event.stopPropagation();
        router.push(pathname);
    }

    return (
        <header className={`${styles.header} ${navbarOpen ? styles.open : ''}`} >
            <div className={styles.logoTitle} onClick={() => router.push('/')} >
                <Image className={styles.logo} src="/Common/hkn_logo_white_vector.svg" alt={t('header.logo_alt')} width={120} height={120} />
            </div>

            <div className={`${styles.menu} ${navbarOpen ? styles.open : ''}`}>
                <div className={isActive('/') ? styles.active : styles.inactive} onClick={() => router.push('/')}>
                    <T keyName="header.nav.home" />
                </div>

                <div className={isActive('/AboutUs') ? styles.active : styles.inactive} onClick={() => router.push('/AboutUs')}>
                    <T keyName="header.nav.about" />
                </div>

                <div className={`${isActive('/People/People') || isActive('/People/Alumni') || isActive('/People/Professionals') || isActive('People/PastBoards') ? styles.active : styles.inactive} ${styles.menuItem}`}
                    onClick={() => router.push('/People/People')}>
                    <div className={styles.itemWrapper}>
                        <T keyName="header.nav.people.main" />
                        <div className={styles.arrowDown}></div>
                    </div>
                    <ul className={styles.dropdown}>
                        <li className={isActive('/People/People') ? styles.activeDropdown : ''}
                            onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleNavigate(e, '/People/People')}>
                            <T keyName="header.nav.people.people" />
                        </li>
                        <li className={isActive('/People/Alumni') ? styles.activeDropdown : ''}
                            onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleNavigate(e, '/People/Alumni')}>
                            <T keyName="header.nav.people.alumni" />
                        </li>
                        <li className={isActive('/People/Professionals') ? styles.activeDropdown : ''}
                            onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleNavigate(e, '/People/Professionals')}>
                            <T keyName="header.nav.people.professionals" />
                        </li>
                        <li className={isActive('/People/PastBoards') ? styles.activeDropdown : ''}
                            onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleNavigate(e, '/People/PastBoards')}>
                            <T keyName="header.nav.people.past_boards" />
                        </li>

                    </ul>
                </div>

                <div className={isActive('/Activities/Events') ? styles.active : styles.inactive}
                    onClick={() => router.push('/Activities/Events')}>
                    <T keyName="header.nav.events" />
                </div>

                <div className={isActive('/Activities/StudyGroups') ? styles.active : styles.inactive}
                    onClick={() => router.push('/Activities/StudyGroups')}>
                    <T keyName="header.nav.study_groups" />
                </div>

                <div className={isActive('/Publications/Recognitions') ? styles.active : styles.inactive}
                    onClick={() => router.push('/Publications/Recognitions')}>
                    <T keyName="header.nav.publications" />
                </div>
    
                    <Navbar>
                    </Navbar>
            </div>

            

            <div className={styles.headerSpace}>
                <RoundButton className={styles.joinUsButton} onClick={() => router.push('/JoinUs')}>
                    <T keyName="common.join_us" />
                </RoundButton>
            </div>

            <img onClick={() => toggleNavbar((open) => !open)} src={'/Common/bars.svg'} height={'30px'} width={'30px'} alt={t('header.menu_alt')} className={styles.showMenu} />
        </header>
    )
}

export default Header;