import styles from "@/styles/components/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import RoundButton from "./molecules/RoundButton";
import React, { useState } from "react";
import { T, useTranslate } from "@tolgee/react";

const Header = ({ darkHeader = false }: { darkHeader?: boolean }) => {
    const router = useRouter();
    const { locale, asPath } = router;
    const isActive = (pathname: string) => router.pathname === pathname;
    const [navbarOpen, toggleNavbar] = useState(false);
    const { t } = useTranslate();

    const handleNavigate = (
        event: React.MouseEvent<Element, MouseEvent>,
        pathname: string
    ) => {
        event.preventDefault();
        event.stopPropagation();
        router.push(pathname);
    };

    const handleLangChange = (lang: string) => {
        if (lang === locale) return;
        router.push(asPath, asPath, { locale: lang });
    };

    const isLangActive = (lang: string) => locale === lang;

    const menuItems = [
        { key: "header.nav.home", path: "/" },
        { key: "header.nav.about", path: "/AboutUs" },
        {
            key: "header.nav.people.main",
            dropdown: [
                { key: "header.nav.people.people", path: "/People/People" },
                { key: "header.nav.people.alumni", path: "/People/Alumni" },
                { key: "header.nav.people.professionals", path: "/People/Professionals" },
                { key: "header.nav.people.past_boards", path: "/People/PastBoards" },
            ],
        },
        { key: "header.nav.events", path: "/Activities/Events" },
        { key: "header.nav.study_groups", path: "/Activities/StudyGroups" },
        { key: "header.nav.publications", path: "/Publications/Recognitions" },
    ];

    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.topbarInner}>
                    <div className={styles.langSwitch}>
                        <button
                            className={`${styles.langButton} ${
                                isLangActive("it") ? styles.langButtonActive : ""
                            }`}
                            onClick={() => handleLangChange("it")}
                        >
                            IT
                        </button>
                        <span className={styles.langSeparator}>|</span>
                        <button
                            className={`${styles.langButton} ${
                                isLangActive("en") ? styles.langButtonActive : ""
                            }`}
                            onClick={() => handleLangChange("en")}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>

            <header className={`${styles.header} ${navbarOpen ? styles.open : ""}`}>
                <div
                    className={styles.logoTitle}
                    onClick={() => router.push("/")}
                >
                    <Image
                        className={styles.logo}
                        src="/Common/hkn_logo_white_vector.svg"
                        alt={t("header.logo_alt")}
                        width={90}
                        height={90}
                    />
                </div>

                <div className={`${styles.menu} ${navbarOpen ? styles.open : ""}`}>
                    {menuItems.map((item) => {
                        if (!item.dropdown) {
                            return (
                                <div
                                    key={item.key}
                                    className={
                                        isActive(item.path)
                                            ? styles.active
                                            : styles.inactive
                                    }
                                    onClick={() => router.push(item.path)}
                                >
                                    <T keyName={item.key} />
                                </div>
                            );
                        }

                        const isDropdownActive = item.dropdown.some((sub) =>
                            isActive(sub.path)
                        );

                        return (
                            <div
                                key={item.key}
                                className={`${
                                    isDropdownActive
                                        ? styles.active
                                        : styles.inactive
                                } ${styles.menuItem}`}
                            >
                                <div className={styles.itemWrapper}>
                                    <T keyName={item.key} />
                                    <div className={styles.arrowDown}></div>
                                </div>
                                <ul className={styles.dropdown}>
                                    {item.dropdown.map((sub) => (
                                        <li
                                            key={sub.key}
                                            className={
                                                isActive(sub.path)
                                                    ? styles.activeDropdown
                                                    : ""
                                            }
                                            onClick={(e) =>
                                                handleNavigate(e, sub.path)
                                            }
                                        >
                                            <T keyName={sub.key} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.headerSpace}>
                    <RoundButton
                        className={styles.joinUsButton}
                        onClick={() => router.push("/JoinUs")}
                    >
                        <T keyName="common.join_us" />
                    </RoundButton>
                </div>

                <img
                    onClick={() => toggleNavbar((open) => !open)}
                    src={"/Common/bars.svg"}
                    height={"30px"}
                    width={"30px"}
                    alt={t("header.menu_alt")}
                    className={styles.showMenu}
                />
            </header>
        </>
    );
};

export default Header;
