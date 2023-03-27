import styles from "@/styles/components/Header.module.css";
import Image from "next/image";
import {useRouter} from "next/router";


const Header = () => {
    const router = useRouter();
    const isActive = (pathname : string) => router.pathname === pathname;

    return (
        <header className={styles.header}>
            <Image className={styles.logo} src="/hkn_logo_blu_vector.svg" alt="HKN PoliTO Logo" width={100} height={100}/>

            <div className={styles.menu}>
                <button className={isActive('/') ? styles.active : styles.inactive} onClick={() => router.push('/')}>
                    Home
                </button>
                <button className={isActive('/About') ? styles.active : styles.inactive} onClick={() => router.push('/About')}>
                    About
                </button>
                <button className={isActive('/Members') ? styles.active : styles.inactive} onClick={() => router.push('/Members')}>
                    Members
                </button>
                <button className={isActive('/StudyGroups') ? styles.active : styles.inactive} onClick={() => router.push('/StudyGroups')}>
                    StudyGroups
                </button>
                <button className={isActive('/Events') ? styles.active : styles.inactive} onClick={() => router.push('/Events')}>
                    Events
                </button>
                <button className={isActive('/SupportUs') ? styles.active : styles.inactive} onClick={() => router.push('/SupportUs')}>
                    SupportUs
                </button>
                <button className={isActive('/Contact') ? styles.active : styles.inactive} onClick={() => router.push('/Contact')}>
                    Contact
                </button>
                <button className={isActive('/Apply') ? styles.active : styles.inactive} onClick={() => router.push('/Apply')}>
                    Apply
                </button>
            </div>

            <div className={styles.headerSpacer}/>
        </header>
    )
}

export default Header;