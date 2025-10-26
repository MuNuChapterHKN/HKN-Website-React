import React from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/components/Header.module.css";

export const LangSelector: React.FC = () => {
  const router = useRouter();
  const setLanguage = (lang: string) => {
    router.replace(router.pathname, undefined, { locale: lang });
  };

  return (
    <div>
    <select
      onChange={(e) => setLanguage(e.target.value)}
      value={router.locale}
    >
      <option className={styles.langButton} value="en">English</option>
      <option className={styles.langButton} value="it">Italiano</option>
    </select>
    </div>
  );
};
