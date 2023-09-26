import {useRouter} from "next/router";
import styles from '@/styles/components/Recognitions/ProfessionalCard.module.scss'
import Image from "next/image";

const ProfessionalCard = ({professional} : {professional : Professional}) => {
    const router = useRouter();

    return (
        <div className={styles.card}>
            <Image src={professional.imageSrc} className={styles.image} alt={professional.name} width="0" height="0" sizes="100vw"/>
            <text className={styles.name}>{professional.name}</text>
            <text className={styles.title}>{professional.title}</text>
            <text className={styles.profText}>{professional.text}</text>
        </div>
    )
}

export default ProfessionalCard;


export interface Professional {
    imageSrc : string,
    name : string,
    title : string,
    text : string
}
