import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/components/CookiePopup.module.css";

const USE_ILLUSTRATED = false;

export default function CookiePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
            {USE_ILLUSTRATED ? (
                <>
                <img src="/cookies/light-cookie.svg" className={styles.cookieBehind} />
                <img src="/cookies/dark-cookie.svg" className={styles.cookieFront} />
              </>
            ) : (
              <span className={styles.icon}>🍪</span>
            )}
        </div>

        <p className={styles.text}>
          We care about your data, and we&apos;d love to use cookies to make
          your experience better.
        </p>

        <div className={styles.footer}>
          <Link href="/privacy" className={styles.link}>
            Privacy Policy
          </Link>

          <button
            type="button"
            onClick={acceptCookies}
            className={styles.button}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
