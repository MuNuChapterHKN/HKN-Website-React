import styles from "@/styles/Activities/StudyGroups.module.css";
import Layout from "../../components/Layout";
import StudyGroup, {StudyGroupProps} from "@/components/Events/StudyGroup";

const studyGroups: StudyGroupProps[] = [
    {
        "name": "Digital Transmission",
        "link": "https://t.me/+0kjs3jfOKSU4YjE0",
        "description": "Digital transmission systems are the backbone of all modern communication. Without them, you wouldn’t be able to receive the message you are reading right now or worse, share it among your friends! If you’re curious about how these systems work and the main theory behind them, then this course is for you! Join us in the study groups to uncover the secrets of digital transmission systems, and we'll help you “transmit” the message of acing your exam to all your friends.",
        "imageSrc": "/Activities/Activities/Activities.png",
        "tutor": "Jad Sarkis",
        "date": "Tuesday 19:00-20:00",
        "location": "Sala V"
    },
    {
        "name": "Introduction to Databases",
        "link": "https://t.me/+ayAR5WTQVyoxMjI8",
        "description": "In a world flooded with data, databases handle the heavy lifting for us by managing large amounts of information effectively and efficiently",
        "imageSrc": "/Activities/Activities/Activities.png",
        "tutor": "Marco Donnarumma",
        "date": "Friday 18:00-19:00",
        "location": "Sala C"
    },
    {
        "name": "Ricerca Operativa",
        "link": "https://t.me/+iXCo88CupHkyNmU0",
        "description": "La ricerca operativa consente di risolvere alcuni dei problemi decisionali più complessi utilizzando la matematica applicata, non senza richiedere la fatica di modellizzare il problema dal punto di vista teorico: se anche per voi questo è lo scoglio più grande, perché non affrontarlo tutti assieme?",
        "imageSrc": "/Activities/Activities/Activities.png",
        "tutor": "Alessia De Crescenzo",
        "date": "Lunedì 18:00-19:00",
        "location": "Aula 5s"
    },
    {
        "name": "Algoritmi e Programmazione (Elettronica)",
        "link": "https://t.me/+P5fjggN35hQxOGE0",
        "description": "Da elettronico probabilmente ti starai chiedendo \"A che mi serve saper programmare in C e studiare degli algoritmi se non sono un informatico?\". Bene, non possiamo ancora spoilerare la risposta, però possiamo aiutarti ad arrivare preparat* per quel momento: insieme troveremo l'algoritmo perfetto per una lode!",
        "imageSrc": "/Activities/Activities/Activities.png",
        "tutor": "Sabina Sarcuni",
        "date": "Mercoledì 18:00-19:00",
        "location": "Sala V"
    },
    {
        "name": "Tecniche di Programmazione - 01FYZOA",
        "link": "https://t.me/+hXLpskl1PxFkYmI0",
        "description": "🎓🌟 Hai mai sentito questa battuta? \"Perché i puntatori non giocano a nascondino? Perché temono di essere dereferenziati!\" Se ti ha lasciato perplesso, potrebbe essere che sei ancora a livello di \"puntare e cliccare\". Ma non disperare! I nostri corsi ti porteranno da \"puntare e cliccare\" a \"dereferenziare e dominare\"! 🚀",
        "imageSrc": "/Activities/Activities/Activities.png",
        "tutor": "Eduard Occhipinti & Erik Scolaro",
        "date": "Giovedì 18:00-19:00",
        "location": "Online"
    },
    {
        "name": "Calcolatori Elettronici",
        "link": "https://t.me/+Ur-tBcTwRLM5OGU0",
        "description": "Siete pronti ad affrontare l’esame più bello del secondo anno? Venite anche voi ad imparare le basi delle architetture dei calcolatori, un mondo tanto complesso quanto affascinante. Anche perché, bello programmare in Python, ma vuoi mettere swaggare in assembly?",
        "imageSrc": "/Activities/Activities/Activities.png",
        "tutor": "Leonardo Pio Francesco Gallina",
        "date": "Venerdì 18:00-19:00",
        "location": "Aula 5s"
    },
    {
        "name": "Analisi dei segnali",
        "link": "https://t.me/+O0PGt_StS4Y2ZGJk",
        "description": "Potevano chiamarla Analisi 3 e invece hanno deciso di intitolarla Analisi dei segnali, ma rimane comunque una materia di merda particolarmente difficile e che richiede parecchio impegno per essere capita. Se la mole di concetti e formule ti confonde, noi saremo la tua guida!",
        "imageSrc": "/Activities/Activities/Activities.png",
        "tutor": "Matta Molinari",
        "date": "Martedì 18:00-19:00",
        "location": "Sala C"
    }
];

export default function StudyGroups() {

    // @ts-ignore
    return (
        <Layout triangles>
            <div className={styles.groupsContainer}>
                {studyGroups.map((sGroup, index) => {
                        return (
                            <StudyGroup studyGroup={sGroup} index={index} key={sGroup.name}/>
                        )
                    }
                )}
            </div>
        </Layout>
    )
}
