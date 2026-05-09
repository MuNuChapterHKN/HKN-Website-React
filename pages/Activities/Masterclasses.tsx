import styles from '@/styles/Activities/Masterclasses.module.css';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ArrowButton from '@/components/molecules/ArrowButton';
import RoundButton from '@/components/molecules/RoundButton';

const masterclasses = [
  {
    title: 'Masterclass 1',
    subtitle: 'Subtitle 1',
    description:
      "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
    imageSrc: '/Activities/Masterclasses/Masterclass.jpg',
    sections: [
      {
        title: 'Section 1',
        imageSrc: '/Activities/Masterclasses/Masterclass.jpg',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      },
      {
        title: 'Section 2',
        imageSrc: '/Activities/Masterclasses/Masterclass.jpg',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      },
    ],
  },
  {
    title: 'Masterclass 2',
    subtitle: 'Subtitle 1',
    description:
      "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
    imageSrc: '/Activities/Masterclasses/Masterclass.jpg',
    sections: [
      {
        title: 'Section 1',
        imageSrc: '/Activities/Masterclasses/Masterclass.jpg',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      },
      {
        title: 'Section 2',
        imageSrc: '/Activities/Masterclasses/Masterclass.jpg',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      },
    ],
  },
  {
    title: 'Masterclass 3',
    subtitle: 'Subtitle 1',
    description:
      "3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
    imageSrc: '/Activities/Masterclasses/Masterclass.jpg',
    sections: [
      {
        title: 'Section 1',
        imageSrc: '/Activities/Masterclasses/Masterclass.jpg',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      },
      {
        title: 'Section 2',
        imageSrc: '/Activities/Masterclasses/Masterclass.jpg',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      },
    ],
  },
];

export default function Masterclasses() {
  const router = useRouter();
  const [mcIndex, setMcIndex] = useState(0);

  const handleMasterclassRightClick = () => {
    setMcIndex((mcIndex + 1) % masterclasses.length);
  };

  const handleMasterclassLeftClick = () => {
    setMcIndex((mcIndex - 1 + masterclasses.length) % masterclasses.length);
  };

  return (
    <Layout triangles>
      <div className={styles.masterclassesContainer}>
        <div className={styles.topCircle} />
        <div className={styles.bottomCircle} />

        <div className={styles.topSection}>
          <div className={styles.dividerHorizontal} />
          <div className={styles.dividerVertical} />
          <div className={styles.left}>
            <div className={styles.row}>
              <ArrowButton
                left
                color={'#061E33'}
                className={styles.leftArrowButton}
                onClick={handleMasterclassLeftClick}
              />
              <ArrowButton
                right
                color={'#061E33'}
                className={styles.rightArrowButton}
                onClick={handleMasterclassRightClick}
              />
            </div>
            <div className={styles.row}>
              <div className={styles.spacer} />
              <span className={styles.subtitle}>{masterclasses[mcIndex].subtitle}</span>
            </div>
            <span className={styles.title}>{masterclasses[mcIndex].title}</span>
            <span className={styles.description}>{masterclasses[mcIndex].description}</span>
            <div className={styles.rowButtons}>
              <RoundButton className={styles.viewButton} onClick={() => router.push('/404')}>
                VIEW
              </RoundButton>
              <RoundButton className={styles.signUpButton} onClick={() => router.push('/404')}>
                SIGN UP
              </RoundButton>
            </div>
          </div>
          <div className={styles.right}>
            <img
              className={styles.masterclassImage}
              src={masterclasses[mcIndex].imageSrc}
              alt="Masterclass"
            />
          </div>
        </div>

        <>
          {masterclasses[mcIndex].sections.map((section, index) => {
            return (
              <div className={styles.section} key={section.title}>
                <div
                  className={
                    index % 2 == 0 ? styles.dividerHorizontalEven : styles.dividerHorizontalOdd
                  }
                />
                <div className={styles.dividerVertical} />
                {index % 2 == 0 ? (
                  <>
                    <div className={styles.leftEven}>
                      <img
                        className={styles.masterclassImage}
                        src={masterclasses[mcIndex].imageSrc}
                        alt="Masterclass"
                      />
                    </div>
                    <div className={styles.rightEven}>
                      <div className={styles.row}>
                        <div className={styles.spacer} />
                        <span className={styles.subtitle}>{masterclasses[mcIndex].subtitle}</span>
                      </div>
                      <span className={styles.description}>
                        {masterclasses[mcIndex].description}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.leftOdd}>
                      <div className={styles.row}>
                        <div className={styles.spacer} />
                        <span className={styles.subtitle}>{section.title}</span>
                      </div>
                      <span className={styles.description}>{section.description}</span>
                    </div>
                    <div className={styles.rightOdd}>
                      <img
                        className={styles.masterclassImage}
                        src={section.imageSrc}
                        alt="Masterclass"
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </>
      </div>
      <div className={styles.trendingContainer}>
        <div className={styles.trendingText}>
          <span className={styles.trending}>Trending</span>
          <span className={styles.seeAlso}>SEE ALSO</span>
        </div>
        <ArrowButton
          style={{ visibility: 'hidden' }}
          className={styles.leftArrowButton}
          left
          onClick={handleMasterclassLeftClick}
        />
        <MasterclassCard
          small
          masterclass={masterclasses[(mcIndex - 1 + masterclasses.length) % masterclasses.length]}
        />
        <MasterclassCard masterclass={masterclasses[mcIndex]} />
        <MasterclassCard small masterclass={masterclasses[(mcIndex + 1) % masterclasses.length]} />
        <ArrowButton
          style={{ visibility: 'hidden' }}
          className={styles.rightArrowButton}
          right
          onClick={handleMasterclassRightClick}
        />
      </div>
    </Layout>
  );
}

const MasterclassCard = ({
  masterclass,
  small,
}: {
  masterclass: MasterclassProps;
  small?: boolean;
}) => {
  return (
    <div className={small ? styles.masterclassCardSmall : styles.masterclassCard}>
      <span className={styles.cardTitle}>{masterclass.title}</span>
      <span className={styles.cardDescription}>{masterclass.description}</span>
      <RoundButton className={styles.cardViewButton}>VIEW</RoundButton>
    </div>
  );
};

export interface MasterclassProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  sections: { title: string; imageSrc: string; description: string }[];
}
