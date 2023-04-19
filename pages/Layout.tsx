import Head from 'next/head'
import styles from '@/styles/Layout.module.css'
import Header from "../components/Header";
import BackgroundPolygons from "@/components/BackgroundPolygons";
import Footer from "@/components/Footer";
import {ReactNode} from "react";

const Layout = ( { children }: { children: ReactNode }) => {

    return (
            <div className={styles.main}>
                <Head>
                    <title>HKN PoliTO</title>
                    <meta name="description" content="HKN PoliTo | Mu Nu Chapter of IEEE-HKN"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/hkn_logo_blu_vector.svg"/>
                </Head>

                <BackgroundPolygons/>

                <Header/>

                <div className={styles.pageContent}>
                    {children}
                </div>

                <Footer/>
            </div>
    )
}

export default Layout;
