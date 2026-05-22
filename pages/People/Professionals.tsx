import Layout from '@/components/Layout';
import styles from '@/styles/People/Professionals.module.scss';
import { useMemo } from 'react';
import { fetchProfessionals } from '../api/directus';
import { T, useTranslate } from '@tolgee/react';
import { useAsyncData } from '@/hooks/useAsyncData';
import { useImageExists } from '@/hooks/useImageExists';
import { sortByLastName } from '@/utils/people';

export default function Professionals() {
  const { t } = useTranslate();
  const ProfessionalsData = useAsyncData(fetchProfessionals, [] as ProfessionalProps[]);
  const sortedProfessionals = useMemo(() => sortByLastName(ProfessionalsData), [ProfessionalsData]);

  return (
    <Layout triangles>
      <div className={styles.faculty}>
        <div className={styles.faculty__left}>
          <div className={styles.faculty__left__imageContainer}>
            <div className={styles.faculty__left__imageContainer__mask}>
              <img
                className={styles.faculty__left__imageContainer__image}
                src={'/People/professionals/paolo_montuschi.png'}
                alt={t('professionals.advisor.alt')}
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
          </div>
          <span className={styles.faculty__left__name}>Paolo Montuschi</span>
          <span className={styles.faculty__left__role}>
            <T keyName="professionals.advisor.role" />
          </span>
        </div>

        <div className={styles.faculty__right}>
          <span className={styles.faculty__right__subtitle}>
            <T keyName="professionals.advisor.kicker" />
          </span>
          <span className={styles.faculty__right__title}>
            <T keyName="professionals.advisor.title" />
          </span>
          <span className={styles.faculty__right__text}>
            <T keyName="professionals.advisor.bio" />
          </span>
        </div>
      </div>

      <div className={styles.professionalsContainer}>
        <span className={styles.professionalsContainer__professionals}>
          <T keyName="professionals.list.kicker" />
        </span>
        <span className={styles.professionalsContainer__inducted}>
          <T keyName="professionals.list.title" />
        </span>

        <div className={styles.professionalsContainer__grid}>
          {sortedProfessionals.map((al, index) => (
            <Professional professional={al} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function Professional({ professional }: { professional: ProfessionalProps }) {
  const imageExists = useImageExists(professional.imageSrc);
  const { t } = useTranslate();

  return (
    <div className={styles.professional}>
      <div className={styles.professional__imageContainer}>
        {professional.imageSrc && imageExists ? (
          <img
            className={styles.professional__imageContainer__image}
            src={professional.imageSrc}
            alt={professional.name}
            loading="lazy"
          />
        ) : (
          <img
            className={styles.professional__imageContainer__placeholder}
            src="/Common/hkn_ideogramma_blu.svg"
            alt={t('professionals.list.placeholder_alt', { name: professional.name })}
            loading="lazy"
          />
        )}
      </div>
      <span className={styles.professional__name}>{professional.name}</span>
    </div>
  );
}

export interface ProfessionalProps {
  name: string;
  imageSrc?: string;
}
