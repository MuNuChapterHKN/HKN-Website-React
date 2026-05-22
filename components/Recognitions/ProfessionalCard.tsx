import styles from '@/styles/components/Recognitions/ProfessionalCard.module.scss';
import Image from 'next/image';

const ProfessionalCard = ({ professional }: { professional: Professional }) => {
  return (
    <div className={styles.card}>
      <Image
        src={professional.imageSrc}
        className={styles.image}
        alt={professional.name}
        width="0"
        height="0"
        sizes="100vw"
      />
      <span className={styles.name}>{professional.name}</span>
      <span className={styles.title}>{professional.title}</span>
      <span className={styles.profText}>{professional.text}</span>
    </div>
  );
};

export default ProfessionalCard;

export interface Professional {
  imageSrc: string;
  name: string;
  title: string;
  text: string;
}
