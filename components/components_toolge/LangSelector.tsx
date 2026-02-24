import React from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/components/Header.module.css";

export const LangSelector: React.FC = () => {
  const router = useRouter();
  const { locale } = router; 

  const setLanguage = (lang: string) => {
    if (lang === locale) return;
    router.replace(router.pathname, undefined, { locale: lang });
  };

  return (
    <div className={styles.langContainer}>
      <button
        className={`${styles.langButton} ${locale === 'it' ? styles.active : ''}`}
        onClick={() => setLanguage('it')}
      >
        IT
      </button>
      
      <span className={styles.separator}>|</span>

      <button
        className={`${styles.langButton} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};