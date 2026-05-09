import styles from '@/styles/components/Recognitions/MentionCard.module.css';
import Image from 'next/image';

const MentionCard = ({ mention }: { mention: Mention }) => {
  if (mention != undefined) {
    return (
      <div className={styles.mentionsCard}>
        <Image
          src={mention.imageSrc}
          alt="HKN Ideaogramma"
          width="0"
          height="0"
          sizes="100vw"
          className={styles.mentionsImage}
        />
        <a
          className={styles.mentionsCardRight}
          href={mention.link ?? '#'}
          rel="noopener"
          target="_blank"
        >
          <span className={styles.mentionsCardTitle}>{mention.title}</span>
          <span className={styles.mentionsCardSubTitle}>{mention.subtitle}</span>
          <span className={styles.mentionsCardText}>{mention.text}</span>
        </a>
      </div>
    );
  } else {
    return (
      <div className={styles.noMentions}>
        <p>Nessun articolo presente</p>
      </div>
    );
  }
};

export default MentionCard;

export interface Mention {
  imageSrc: string;
  title: string;
  subtitle: string;
  text: string;
  link?: string;
}
