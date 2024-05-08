import {useRouter} from "next/router";
import styles from '@/styles/components/Recognitions/MentionCard.module.css'
import Image from "next/image";

const MentionCard = ({mention} : {mention : Mention}) => {
    const router = useRouter();

    return (
        <div className={styles.mentionsCard}>
            <Image src={mention.imageSrc} alt="HKN Ideaogramma"
                   width="0" height="0" sizes="100vw" className={styles.mentionsImage}/>
            <a className={styles.mentionsCardRight} href={mention.link ?? '#'} rel='noopener' target='_blank'>
                <text className={styles.mentionsCardTitle}>{mention.title}</text>
                <text className={styles.mentionsCardSubTitle}>{mention.subtitle}</text>
                <text className={styles.mentionsCardText}>{mention.text}</text>
            </a>
        </div>
    )
}

export default MentionCard;


export interface Mention {
    imageSrc : string,
    title : string,
    subtitle : string,
    text : string,
    link?: string
}