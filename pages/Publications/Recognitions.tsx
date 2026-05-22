import Layout from '../../components/Layout';
import styles from '@/styles/Publications/Recognitions.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MentionCard, { Mention } from '../../components/Recognitions/MentionCard';
import ArrowButton from '@/components/molecules/ArrowButton';
import { fetchAwards, fetchMentions } from '../api/directus';
import { T, useTranslate } from '@tolgee/react';

export default function Recognitions() {
  const { t } = useTranslate();
  const [awards, setAwards] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAwards();
      setAwards(data);
    };

    fetchData();
  }, []);

  const [mentions, setMentions] = useState<Mention[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMentions();
      setMentions(data);
    };

    fetchData();
  }, []);

  const [awardIndex, setAwardIndex] = useState(0);
  const [mentionIndex, setMentionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAwardIndex((currentAwardIndex) => currentAwardIndex + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLeftArrowAwards = () => {
    if (awardIndex == 0) {
      setAwardIndex(awards.length - 1);
    } else {
      setAwardIndex(mentionIndex - 1);
    }
  };

  const handleRightArrowAwards = () => {
    setAwardIndex((currentAwardIndex) => currentAwardIndex + 1);
  };

  const handleRightArrowMentions = () => {
    setMentionIndex(mentionIndex + 1);
  };

  return (
    <Layout>
      <div className={styles.awardsCard}>
        <div className={styles.awardsLeft}>
          <Image
            className={styles.awardImage}
            src={awards[awardIndex % awards.length]}
            alt={t('publications.recognitions.awards.image_alt')}
            width="0"
            height="0"
            sizes="100vw"
          />
          <ArrowButton
            left
            className={styles.awardsLeftButton}
            color="#F2F2F2"
            onClick={handleLeftArrowAwards}
          />
          <ArrowButton
            right
            className={styles.awardsRightButton}
            color="#F2F2F2"
            onClick={handleRightArrowAwards}
          />
        </div>
        <div className={styles.awardsRight}>
          <span className={styles.awardsText}>
            <T keyName="publications.recognitions.awards.kicker" />
          </span>
          <span className={styles.awardsTitle}>
            <T keyName="publications.recognitions.awards.title" />
          </span>
          <span className={styles.awards}>
            <T keyName="publications.recognitions.awards.description" />
          </span>
        </div>
      </div>

      <div className={styles.internationalCollective}>
        <a href="https://hkn.ieee.org/" target="_blank" rel="noopener noreferrer">
          <img
            className={styles.internationalCollectiveImage}
            src="/Publications/hkn_ideogramma_collective.svg"
            alt="HKN Ideaogramma"
          />
        </a>
        <span className={styles.internationalCollectiveText}>
          <T keyName="publications.recognitions.international_collective" />
        </span>
      </div>

      <div className={styles.mentionsCard}>
        <div className={styles.mentionsLeft}>
          <span className={styles.mentionsText}>
            <T keyName="publications.recognitions.mentions.kicker" />
          </span>
          <span className={styles.mentionsTitle}>
            <T keyName="publications.recognitions.mentions.title_line1" />
          </span>
          <span className={styles.mentionsTitle}>
            <T keyName="publications.recognitions.mentions.title_line2" />
          </span>
        </div>
        <MentionCard mention={mentions[mentionIndex % mentions.length]} />
        {mentions.length > 1 && (
          <ArrowButton
            className={styles.mentionsButton}
            color="#F2F2F2"
            onClick={handleRightArrowMentions}
          />
        )}
      </div>
    </Layout>
  );
}
