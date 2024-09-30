import Layout from "@/components/Layout";
import styles from '@/styles/People/PastBoards.module.scss'
import {useEffect, useState} from "react";

const PastBoardsData = [
    {
        year: "2023/24",
        members: [
            { name: "Gustavo Nicoletti", role: "Recording Secretary", imageSrc: "/People/members/gustavo_nicoletti_rosa.png" },
            { name: "Serena Canavero", role: "President", imageSrc: "/People/members/serena_canavero.png" },
            { name: "Francesco Anzoino", role: "Treasurer", imageSrc: "/People/members/francesco_anzoino.png" },
            { name: "Dario Gosmar", role: "Web Correspondent", imageSrc: "/People/members/dario_gosmar.png" },
            { name: "Claudio Fantasia", role: "Vice-President", imageSrc: "/People/members/claudio_fantasia.png" },
            { name: "Alberto Castrignanò", role: "Corresponding Secretary", imageSrc: "/People/members/alberto_castrignano.png" }
        ]
    },
    {
        year: "2022/23",
        members: [
            { name: "Gabriele Iurlaro", role: "Recording Secretary", imageSrc: "/People/members/gabriele_iurlaro.png" },
            { name: "Edoardo Colella", role: "President", imageSrc: "/People/members/edoardo_colella.png" },
            { name: "Rosario Francesco Cavelli", role: "Treasurer", imageSrc: "/People/members/rosario_francesco_cavelli.png" },
            { name: "Irene Rechichi", role: "Web Correspondent", imageSrc: "/People/members/irene_rechichi.png" },
            { name: "Michele Pantaleo", role: "Vice-President", imageSrc: "/People/members/michele_pantaleo.png" },
            { name: "Antonio Marceddu", role: "Corresponding Secretary", imageSrc: "/People/members/antonio_marceddu.png" }
        ]
    },
    {
        year: "2021/22",
        members: [
            { name: "Paolo Rabino", role: "Recording Secretary", imageSrc: "/People/members/paolo_rabino.png" },
            { name: "Marco Pappalardo", role: "President", imageSrc: "/People/members/marco_pappalardo.png" },
            { name: "Andrea Minardi", role: "Treasurer", imageSrc: "/People/members/andrea_minardi.png" },
            { name: "Veronica Montanaro", role: "Web Correspondent", imageSrc: "/People/members/veronica_montanaro.png" },
            { name: "Matteo Sartoni", role: "Vice-President", imageSrc: "/People/members/matteo_sartoni.png" },
            { name: "Matteo Alasio", role: "Corresponding Secretary", imageSrc: "/People/members/matteo_alasio.png" }
        ]
    },
    {
        year: "2020/21",
        members: [
            { name: "Sara Zaminga", role: "Recording Secretary", imageSrc: "/People/members/sara_zaminga.png" },
            { name: "Emanuela Centra", role: "President", imageSrc: "/People/members/emanuela_centra.png" },
            { name: "Ilio Di Pietro", role: "Treasurer", imageSrc: "/People/members/ilio_di_pietro.png" },
            { name: "Giulio De Giorgi", role: "Web Correspondent", imageSrc: "/People/members/giulio_de_giorgi.png" },
            { name: "Federico Tiblias", role: "Vice-President", imageSrc: "/People/members/federico_tiblias.png" },
            { name: "Gilberto Manunza", role: "Corresponding Secretary", imageSrc: "/People/members/gilberto_manunza.png" }
        ]
    },
    {
        year: "2019/20",
        members: [
            { name: "Sarah Chamas", role: "Recording Secretary", imageSrc: "/People/members/sarah_chamas.png" },
            { name: "Debora Caldarola", role: "President", imageSrc: "/People/members/debora_caldarola.png" },
            { name: "Valentin Nelu Ifrim", role: "Treasurer", imageSrc: "/People/members/valentin_nelu_ifrim.png" },
            { name: "Simone Dutto", role: "Web Correspondent", imageSrc: "/People/members/simone_dutto.png" },
            { name: "Gilberto Manunza", role: "Vice-President", imageSrc: "/People/members/gilberto_manunza.png" },
            { name: "Sandro Sartoni", role: "Corresponding Secretary", imageSrc: "/People/members/sandro_sartoni.png" }
        ]
    },
    {
        year: "2018/19",
        members: [
            { name: "Federica Fanigliulo", role: "Recording Secretary", imageSrc: "/People/members/federica_fanigliulo.png" },
            { name: "Sandro Sartoni", role: "President", imageSrc: "/People/members/sandro_sartoni.png" },
            { name: "Stefano Panaro", role: "Treasurer", imageSrc: "/People/members/stefano_panaro.png" },
            { name: "Alessandro Scisca", role: "Web Correspondent", imageSrc: "/People/members/alessandro_scisca.png" },
            { name: "Davide Bisso", role: "Vice-President" },
            { name: "Sandro Sartoni", role: "Corresponding Secretary", imageSrc: "/People/members/sandro_sartoni.png" }
        ]
    },
    {
        year: "2017/18",
        members: [
            { name: "Pietro Inglese", role: "Recording Secretary" },
            { name: "Fabio Cermelli", role: "President", imageSrc: "/People/members/fabio_cermelli.png" },
            { name: "Dario Salza", role: "Treasurer", imageSrc: "/People/members/dario_salza.png" },
            { name: "Carmine D'Amico", role: "Web Correspondent", imageSrc: "/People/members/carmine_damico.png" },
            { name: "Lorenzo Moro", role: "Vice-President", imageSrc: "/People/members/lorenzo_moro.png" },
            { name: "Francesco Perego", role: "Corresponding Secretary" }
        ]
    },
    {
        year: "2016/17",
        members: [
            { name: "Francesco Pipitò", role: "Recording Secretary", imageSrc: "/People/members/francesco_pipito.png" },
            { name: "Silvia Vitali", role: "President", imageSrc: "/People/members/silvia_vitali.png" },
            { name: "Luigi Maio", role: "Treasurer", imageSrc: "/People/members/luigi_maio.png" },
            { name: "Luca Mezzatesta", role: "Web Correspondent", imageSrc: "/People/members/luca_mezzatesta.png" },
            { name: "Antonio Langiu", role: "Vice-President", imageSrc: "/People/members/antonio_langiu.png" },
            { name: "Edoardo Operti", role: "Corresponding Secretary", imageSrc: "/People/members/edoardo_operti.png" }
        ]
    }
];


export default function PastBoards() {

    return (
        <Layout triangles>
            <text className={styles.title}>Past Boards</text>
            {PastBoardsData.map((pastBoard, index) => (
                <PastBoard year={pastBoard.year} members={pastBoard.members} key={index}/>
            ))}
        </Layout>
    )
}

function PastBoard({year, members}: PastBoardProps) {
    return (
        <div className={styles.pastboard}>
            <text className={styles.pastboard__year}>{year}</text>
            <div className={styles.pastboard__members}>
                {members.map((boardMember, index) => (
                    <BoardMember boardMemberProps={boardMember} key={index}/>
                ))}
            </div>
        </div>
    )
}

function BoardMember({boardMemberProps}: {
    boardMemberProps: BoardMemberProps,
}) {

    const [imageExists, setImageExists] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = boardMemberProps.imageSrc || "";
        img.onload = () => setImageExists(true);
    }, []);

    return (
        <div className={styles.boardMember}>
            <div className={styles.boardMember__imageContainer}>
                <div className={styles.boardMember__imageContainer__mask}>
                    {boardMemberProps.imageSrc && imageExists ?
                        <img className={styles.boardMember__imageContainer__image} src={boardMemberProps.imageSrc} alt={boardMemberProps.name} loading="lazy"/>
                    :
                        <img className={styles.boardMember__imageContainer__placeholder} src="/Common/hkn_ideogramma_blu.svg" alt={boardMemberProps.name} loading="lazy"/>
                    }
                </div>

            </div>
            <text className={styles.boardMember__name}>{boardMemberProps.name}</text>
            <text className={styles.boardMember__role}>{boardMemberProps.role}</text>
        </div>
    );
}


export interface PastBoardProps {
    year: string,
    members: BoardMemberProps[]
}

export interface BoardMemberProps {
    name: string;
    role: string;
    imageSrc?: string;
}
