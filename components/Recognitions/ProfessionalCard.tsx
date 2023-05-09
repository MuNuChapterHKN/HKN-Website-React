import {useRouter} from "next/router";
import styles from '@/styles/components/Recognitions/ProfessionalCard.module.css'
import Image from "next/image";

const ProfessionalCard = ({name, title, text, imageSrc } : {name : string, title : string, text : string, imageSrc : string}) => {
    const router = useRouter();

    return (
        <div className={styles.card}>
            <Image src={imageSrc} className={styles.image} alt={name} width="0" height="0" sizes="100vw"/>
            <text className={styles.name}>{name}</text>
            <text className={styles.title}>{title}</text>
            <text className={styles.profText}>{text}</text>
        </div>
    )
}

export default ProfessionalCard;
