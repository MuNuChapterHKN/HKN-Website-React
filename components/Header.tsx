import styles from "@/styles/components/Header.module.css";
import Image from "next/image";
import {useRouter} from "next/router";
import RoundButton from "./molecules/RoundButton";


const Header = () => {
    const router = useRouter();
    const isActive = (pathname : string) => router.pathname === pathname;

    return (
        <header className={styles.header}>
            <div className={styles.logoTitle} onClick={() => router.push('/')} >
                <Image className={styles.logo} src="/Common/hkn_logo_white_vector.svg" alt="HKN PoliTO Logo" width={120} height={120}/>
                {/*<div className={styles.title} >
                    <text style={{fontSize:25, fontWeight:600}}>HKN</text>
                    <text style={{fontSize:15.2, fontWeight:400, marginTop:-10}}>POLITO</text>
                </div>*/}
            </div>

            <div className={styles.menu}>
                <div className={isActive('/') ? styles.active : styles.inactive} onClick={() => router.push('/')}>
                    Home
                </div>
                <div className={isActive('/AboutUs') ? styles.active : styles.inactive} onClick={() => router.push('/AboutUs')}>
                    About
                </div>
                <div className={isActive('/People') ? styles.active : styles.inactive} onClick={() => router.push('/People')}>
                    People
                </div>
                <div className={`${isActive('/Activities/Activities') || isActive('/Activities/Events') || isActive('/Activities/StudyGroups') || isActive('/Activities/Masterclasses') ? styles.active : styles.inactive} ${styles.menuItem}`}
                     onClick={() => router.push('/Activities/Activities')}>
                    Activities
                    <div className={styles.arrowDown}></div>
                    <ul className={styles.dropdown}>
                        <li className={isActive('/Activities/Events') ? styles.activeDropdown : ''} onClick={() => router.push('/Activities/Events')}>Events</li>
                        <li className={isActive('/Activities/Masterclasses') ? styles.activeDropdown  : ''} onClick={() => router.push('/Activities/Masterclasses')}>Masterclasses</li>
                        <li className={isActive('/Activities/StudyGroups') ? styles.activeDropdown : ''} onClick={() => router.push('/Activities/StudyGroups')}>Study Groups</li>
                    </ul>
                </div>
                <div className={`${isActive('/Publications/Recognitions') || isActive('/Publications/Blogs') ? styles.active : styles.inactive} onClick={() => router.push('/Publications/Recognitions') ${styles.menuItem}`}>
                    Publications
                    <div className={styles.arrowDown}></div>
                    <ul className={styles.dropdown}>
                        <li className={isActive('/Publications/Recognitions') ? styles.activeDropdown : ''} onClick={() => router.push('/Publications/Recognitions')}>Recognitions</li>
                        <li className={isActive('/Publications/Blogs') ? styles.activeDropdown : ''} onClick={() => router.push('/Publications/Blogs')}>Blogs</li>
                    </ul>
                </div>
            </div>

            <div className={styles.headerSpace}>
                <RoundButton className={styles.joinUsButton} onClick={() => router.push('/JoinUs')}>Join Us</RoundButton>
            </div>
        </header>
    )
}

export default Header;
