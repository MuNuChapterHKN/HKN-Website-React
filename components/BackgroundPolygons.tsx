import styles from '@/styles/components/BackgroundPolygons.module.css';
import { useEffect, useRef, useState } from 'react';

const BackgroundPolygons = () => {
  const [shouldRenderBottom, setShouldRenderBottom] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parentRef.current) {
      const parentHeight = parentRef.current.offsetHeight;
      if (parentHeight > 3000) {
        setShouldRenderBottom(true);
      } else {
        setShouldRenderBottom(false);
      }
    }
  }, []);

  return (
    <div className={styles.backgroundPolygons} ref={parentRef}>
      <div className={`${styles.triangle} ${styles.triangleLeft1}`} />
      <div className={`${styles.triangle} ${styles.triangleLeft2}`} />
      <div className={`${styles.triangle} ${styles.triangleLeft3}`} />

      <div className={`${styles.triangle} ${styles.triangleRight1}`} />
      <div className={`${styles.triangle} ${styles.triangleRight2}`} />
      <div className={`${styles.triangle} ${styles.triangleRight3}`} />

      {shouldRenderBottom && (
        <>
          <div className={`${styles.triangle} ${styles.triangleLeft4}`} />
          <div className={`${styles.triangle} ${styles.triangleLeft5}`} />
          <div className={`${styles.triangle} ${styles.triangleLeft6}`} />

          <div className={`${styles.triangle} ${styles.triangleRight4}`} />
          <div className={`${styles.triangle} ${styles.triangleRight5}`} />
          <div className={`${styles.triangle} ${styles.triangleRight6}`} />
        </>
      )}
    </div>
  );
};

export default BackgroundPolygons;
