import Head from 'next/head'
import styles from '@/styles/components/Layout.module.css'
import Header from "./Header";
import BackgroundPolygons from "@/components/BackgroundPolygons";
import Footer from "@/components/Footer";
import {ReactNode} from "react";

const Layout = ( { children, triangles = false, darkHeader = false }: {children: ReactNode, triangles?: boolean, darkHeader?: boolean }) => {



    return (
            <div className={`${styles.main} ${darkHeader ? styles.darkBg : ''}`}>
                <Head>
                    <title>HKN PoliTO</title>
                    <meta name="description" content="HKN PoliTo | Mu Nu Chapter of IEEE-HKN"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/public/Common/hkn_logo_blu_vector.svg"/>
                </Head>

                {triangles &&
                    <BackgroundPolygons />
                }


                <Header darkHeader/>

                <div className={styles.pageContent}>
                    {children}
                </div>

                <Footer/>
            </div>
    )
}

export default Layout;
