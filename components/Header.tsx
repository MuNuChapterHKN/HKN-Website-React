import styles from "@/styles/components/Header.module.css";
import Image from "next/image";
import {useRouter} from "next/router";


const Header = () => {
    const router = useRouter();
    const isActive = (pathname : string) => router.pathname === pathname;

    return (
        <header className={styles.header}>
            <Image className={styles.logo} src="/hkn_logo_white_vector.svg" alt="HKN PoliTO Logo" width={100} height={100}/>

            <div className={styles.menu}>
                <button className={isActive('/') ? styles.active : styles.inactive} onClick={() => router.push('/')}>
                    Home
                </button>
                <button className={isActive('/About') ? styles.active : styles.inactive} onClick={() => router.push('/About')}>
                    About
                </button>
                <button className={isActive('/People') ? styles.active : styles.inactive} onClick={() => router.push('/People')}>
                    Members
                </button>
                <button className={isActive('/Events') ? styles.active : styles.inactive} onClick={() => router.push('/Events')}>
                    Events
                </button>
                <button className={isActive('/Apply') ? styles.active : styles.inactive} onClick={() => router.push('/Apply')}>
                    Apply
                </button>
            </div>

            <div className={styles.headerSpace}></div>
        </header>
    )
}

export default Header;
