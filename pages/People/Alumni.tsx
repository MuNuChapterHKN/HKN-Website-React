import Layout from '@/components/Layout';
import styles from '@/styles/People/Alumni.module.scss';
import { useMemo, useState } from 'react';
import Alumno, { Badge, BadgeType } from '@/components/People/Alumno';
import { fetchAlumni } from '../api/directus';
import { T, useTranslate } from '@tolgee/react';
import { useAsyncData } from '@/hooks/useAsyncData';
import { sortAlumni } from '@/utils/people';

export default function Alumni() {
  const { t } = useTranslate();
  const AlumniData = useAsyncData(fetchAlumni, [] as AlumnoProps[]);
  const sortedAlumni = useMemo(() => sortAlumni(AlumniData, BadgeType.Inducted), [AlumniData]);
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleAlumnoClick = (id: number) => {
    setActiveId(id === activeId ? null : id);
  };

  return (
    <Layout triangles>
      <div className={styles.descriptionContainer}>
        <img
          className={styles.descriptionContainer__image}
          src="/Activities/Activities/CompleannoChapter.jpg"
          alt={t('alumni.banner.alt')}
        />
        <div className={styles.descriptionContainer__right}>
          <span className={styles.descriptionContainer__right__title}>
            <T keyName="alumni.banner.title" />
          </span>
          <span className={styles.descriptionContainer__right__subtitle}>
            <T keyName="alumni.banner.subtitle" />
          </span>
          <span className={styles.descriptionContainer__right__text}>
            <T keyName="alumni.banner.text" />
          </span>
        </div>
      </div>

      <div className={styles.alumniContainer}>
        <span className={styles.alumniContainer__directory}>
          <T keyName="alumni.directory.kicker" />
        </span>
        <span className={styles.alumniContainer__alumni}>
          <T keyName="alumni.directory.title" />
        </span>
        <div className={styles.alumniContainer__grid}>
          {sortedAlumni.map((al, index) => (
            <Alumno
              alumno={al}
              key={index}
              onClick={() => handleAlumnoClick(index)}
              active={index === activeId}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export interface AlumnoProps {
  name: string;
  imageSrc?: string;
  linkedIn?: string;
  badges?: Badge[];
}
