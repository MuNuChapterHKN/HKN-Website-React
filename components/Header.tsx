import styles from "@/styles/components/Header.module.css";
import Image from "next/image";
import {useRouter} from "next/router";


const Header = () => {
    const router = useRouter();
    const isActive = (pathname : string) => router.pathname === pathname;

    return (
        <header className={styles.header}>
            <div className={styles.logoTitle} onClick={() => router.push('/')} >
                <Image className={styles.logo} src="/hkn_logo_white_vector.svg" alt="HKN PoliTO Logo" width={80} height={80}/>
                <div className={styles.title} >
                    <text style={{fontSize:25, fontWeight:600}}>HKN</text>
                    <text style={{fontSize:15.2, fontWeight:400, marginTop:-10}}>POLITO</text>
                </div>
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
                <div className={isActive('/Events') ? styles.active : styles.inactive} onClick={() => router.push('/Events')}>
                    Events
                </div>
                <div className={isActive('/Apply') ? styles.active : styles.inactive} onClick={() => router.push('/Apply')}>
                    Apply
                </div>
            </div>

            <div className={styles.headerSpace}></div>
        </header>
    )
}

export default Header;
