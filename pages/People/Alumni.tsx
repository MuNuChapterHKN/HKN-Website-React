import Layout from "@/components/Layout";
import styles from '@/styles/People/Alumni.module.scss'
import RoundButton from "@/components/molecules/RoundButton";
import {useRouter} from "next/router";
import {useState} from "react";
import ArrowButton from "@/components/molecules/ArrowButton";
import Alumno, {Badge, BadgeType} from "@/components/People/Alumno";

// Images should be in a 4:5 ratio
const AlumniData: AlumnoProps[] = [
    {
        name: "Annachiara Ruospo",
        imageSrc: "/People/members/annachiara_ruospo.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Head, year: 2016, role: "Head of Corporate Training"}
        ]
    },
    {
        name: "Fabio Cermelli",
        imageSrc: "/People/members/fabio_cermelli.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Board, year: 2018, role: "President"}
        ]
    },
    {
        name: "Alberto Monge",
        imageSrc: "/People/members/alberto_monge.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Alessandro Ciraci",
        imageSrc: "/People/members/alessandro_ciraci.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Alessandro Scisca",
        imageSrc: "/People/members/alessandro_scisca.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Board, year: 2019, role: "Web Correspondent"},
            {type: BadgeType.Head, year: 2018, role: "Head of Communication"}
        ]
    },
    {
        name: "Andrea Casalino",
        imageSrc: "/People/members/andrea_casalino.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Head, year: 2017, role: "Head of Fundraising"}
        ]
    },
    {
        name: "Andrea Ferri",
        imageSrc: "/People/members/andrea_ferri.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Antonio Langiu",
        imageSrc: "/People/members/antonio_langiu.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Board, year: 2017, role: "Vice President"}
        ]
    },
    {
        name: "Biagio Feraco",
        imageSrc: "/People/members/biagio_feraco.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Brendan David Polidori",
        imageSrc: "/People/members/brendan_david_polidori.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Davide Bisso",
        imageSrc: "/People/members/davide_bisso.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Board, year: 2019, role: "Vice President"}
        ]
    },
    {
        name: "Eleonora Carletti",
        imageSrc: "/People/members/eleonora_carletti.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Eleonora Gastaldi",
        imageSrc: "/People/members/eleonora_gastaldi.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Emanuele Canessa",
        imageSrc: "/People/members/emanuele_canessa.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Federica Fanigliulo",
        imageSrc: "/People/members/federica_fanigliulo.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Board, year: 2019, role: "Recording Secretary"}
        ]
    },
    {
        name: "Flavia Muggianu",
        imageSrc: "/People/members/flavia_muggianu.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Francesco Perego",
        imageSrc: "/People/members/francesco_perego.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Board, year: 2018, role: "Corresponding Secretary"}
        ]
    },
    {
        name: "Francesco Pipitò",
        imageSrc: "/People/members/francesco_pipito.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Board, year: 2017, role: "Recording Secretary"}
        ]
    },
    {
        name: "Francesco Vergona",
        imageSrc: "/People/members/francesco_vergona.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Gabriele Milauro",
        imageSrc: "/People/members/gabriele_milauro.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Giovanni Ciccone",
        imageSrc: "/People/members/giovanni_ciccone.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Head, year: 2017, role: "Head of Tutoring"}
        ]
    },
    {
        name: "Giovanni Clemente Monna",
        imageSrc: "/People/members/giovanni_clemente_monna.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Head, year: 2016, role: "Head of Tutoring"}
        ]
    },
    {
        name: "Giulio Roggero",
        imageSrc: "/People/members/giulio_roggero.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Iacopo Olivo",
        imageSrc: "/People/members/iacopo_olivo.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Ilaria Botticelli",
        imageSrc: "/People/members/ilaria_botticelli.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Head, year: 2018, role: "Head of Tutoring"}
        ]
    },
    {
        name: "Ilaria Gioda",
        imageSrc: "/People/members/ilaria_gioda.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Head, year: 2020, role: "Head of Human Resources"}
        ]
    },
    {
        name: "Lorenzo Moro",
        imageSrc: "/People/members/lorenzo_moro.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Board, year: 2018, role: "Vice President"}
        ]
    },
    {
        name: "Luca Mannella",
        imageSrc: "/People/members/luca_mannella.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Head, year: 2018, role: "Head of Human Resources"}
        ]
    },
    {
        name: "Luca Mezzatesta",
        imageSrc: "/People/members/luca_mezzatesta.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Board, year: 2017, role: "Web Correspondent"},
            {type: BadgeType.Head, year: 2016, role: "Head of Communication"}
        ]
    },
    {
        name: "Luca Mozzone",
        imageSrc: "/People/members/luca_mozzone.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Luigi Maio",
        imageSrc: "/People/members/luigi_maio.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Board, year: 2017, role: "Treasurer"}
        ]
    },
    {
        name: "Marco Andorno",
        imageSrc: "/People/members/marco_andorno.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Marco Pietro Abrate",
        imageSrc: "/People/members/marco_pietro_abrate.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Head, year: 2017, role: "Head of Logistics"}
        ]
    },
    {
        name: "Martina Fogliato",
        imageSrc: "/People/members/martina_fogliato.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Massimo Piras",
        imageSrc: "/People/members/massimo_piras.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Matteo Dospina",
        imageSrc: "/People/members/matteo_dospina.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Matteo Guarrera",
        imageSrc: "/People/members/matteo_guarrera.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Mila Tabacoff",
        imageSrc: "/People/members/mila_tabacoff.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Head, year: 2017, role: "Head of Corporate Training"}
        ]
    },
    {
        name: "Pietro Inglese",
        imageSrc: "/People/members/pietro_inglese.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020},
            {type: BadgeType.Board, year: 2018, role: "Recording Secretary"},
            {type: BadgeType.Head, year: 2016, role: "Head of Fundraising"}
        ]
    },
    {
        name: "Roberta Bardini",
        imageSrc: "/People/members/roberta_bardini.png",
        badges: [
            {type: BadgeType.Inducted, year: 2020}
        ]
    },
    {
        name: "Sara Prone",
        imageSrc: "/People/members/sara_prone.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 }
        ]
    },
    {
        name: "Silvia Vitali",
        imageSrc: "/People/members/silvia_vitali.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2017, role: "President" }
        ]
    },
    {
        name: "Stefano Panaro",
        imageSrc: "/People/members/stefano_panaro.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2019, role: "Treasurer" }
        ]
    },
    {
        name: "Alberto Pepe",
        imageSrc: "/People/members/alberto_pepe.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Alessandro Cardinale",
        imageSrc: "/People/members/alessandro_cardinale.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Alessandro Pisani",
        imageSrc: "/People/members/alessandro_pisani.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2019, role: "Head of Tutoring" }
        ]
    },
    {
        name: "Alessio Cappello",
        imageSrc: "/People/members/alessio_cappello.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Alessio Padula",
        imageSrc: "/People/members/alessio_padula.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Alessio Parisi",
        imageSrc: "/People/members/alessio_parisi.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Andrea Senacheribbe",
        imageSrc: "/People/members/andrea_senacheribbe.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2018, role: "Head of Corporate Training" }
        ]
    },
    {
        name: "Andrea Zingariello",
        imageSrc: "/People/members/andrea_zingariello.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Angelo Gennuso",
        imageSrc: "/People/members/angelo_gennuso.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Antonio Definite",
        imageSrc: "/People/members/antonio_definite.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Antonio Marceddu",
        imageSrc: "/People/members/antonio_marceddu.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2023, role: "Corresponding Secretary" }
        ]
    },
    {
        name: "Bruno Coppolelli",
        imageSrc: "/People/members/bruno_coppolelli.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Carmine D’Amico",
        imageSrc: "/People/members/carmine_damico.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2018, role: "Web Correspondent" },
            { type: BadgeType.Head, year: 2017, role: "Head of Communication" }
        ]
    },
    {
        name: "Costanza Galante",
        imageSrc: "/People/members/costanza_galante.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Damiano Franzò",
        imageSrc: "/People/members/damiano_franzo.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2017, role: "Head of Human Resources" }
        ]
    },
    {
        name: "Dario Salza",
        imageSrc: "/People/members/dario_salza.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2018, role: "Treasurer" },
            { type: BadgeType.Head, year: 2016, role: "Head of Logistics" }
        ]
    },
    {
        name: "Davide D’Adamo",
        imageSrc: "/People/members/davide_dadamo.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Davide Macario",
        imageSrc: "/People/members/davide_macario.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Debora Caldarola",
        imageSrc: "/People/members/debora_caldarola.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2020, role: "President" },
            { type: BadgeType.Head, year: 2018, role: "Head of Events" }
        ]
    },
    {
        name: "Edoardo Operti",
        imageSrc: "/People/members/edoardo_operti.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2017, role: "Corresponding Secretary" }
        ]
    },
    {
        name: "Enrico Panero",
        imageSrc: "/People/members/enrico_panero.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Federico Tiblias",
        imageSrc: "/People/members/federico_tiblias.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2021, role: "Vice President" },
            { type: BadgeType.Head, year: 2019, role: "Head of Human Resources" }
        ]
    },
    {
        name: "Filippo Castellarin",
        imageSrc: "/People/members/filippo_castellarin.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Filippo Maria Cardano",
        imageSrc: "/People/members/filippo_maria_cardano.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Francesca Pistilli",
        imageSrc: "/People/members/francesca_pistilli.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2019, role: "Head of Corporate Training" }
        ]
    },
    {
        name: "Francesco Donato",
        imageSrc: "/People/members/francesco_donato.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Francesco Pipitò",
        imageSrc: "/People/members/francesco_pipito.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2017, role: "Recording Secretary" }
        ]
    },
    {
        name: "Francesco Stranieri",
        imageSrc: "/People/members/francesco_stranieri.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Gaetano Raia",
        imageSrc: "/People/members/gaetano_raia.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2020, role: "Head of Events" }
        ]
    },
    {
        name: "Gianfranco Trad",
        imageSrc: "/People/members/gianfranco_trad.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2022, role: "Head of Events and Head of Fundraising" }
        ]
    },
    {
        name: "Gianluca Menditto",
        imageSrc: "/People/members/gianluca_menditto.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2021, role: "Head of Tutoring" }
        ]
    },
    {
        name: "Gilberto Manunza",
        imageSrc: "/People/members/gilberto_manunza.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2020, role: "Vice President" },
            { type: BadgeType.Board, year: 2021, role: "Corresponding Secretary" },
            { type: BadgeType.Head, year: 2018, role: "Head of IT" }
        ]
    },
    {
        name: "Giorgio Ajmone",
        imageSrc: "/People/members/giorgio_ajmone.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Giovanni Cadau",
        imageSrc: "/People/members/giovanni_cadau.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2020, role: "Head of Corporate Training" }
        ]
    },
    {
        name: "Giovanni Chiarion",
        imageSrc: "/People/members/giovanni_chiarion.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Giulio De Giorgi",
        imageSrc: "/People/members/giulio_de_giorgi.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2021, role: "Web Correspondent" },
            { type: BadgeType.Head, year: 2020, role: "Head of Communication" }
        ]
    },
    {
        name: "Ilio Di Pietro",
        imageSrc: "/People/members/ilio_di_pietro.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2021, role: "Treasurer" }
        ]
    },
    {
        name: "Irene Rechichi",
        imageSrc: "/People/members/irene_rechichi.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2023, role: "Web Correspondent" }
        ]
    },
    {
        name: "Leonardo Pavarino",
        imageSrc: "/People/members/leonardo_pavarino.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2022, role: "Head of Corporate Training" }
        ]
    },
    {
        name: "Loris Coccia",
        imageSrc: "/People/members/loris_coccia.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Manuel Enrique Colotti",
        imageSrc: "/People/members/manuel_enrique_colotti.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2022, role: "Head of IT" }
        ]
    },
    {
        name: "Manuel Enrique Colotti",
        imageSrc: "/People/members/manuel_enrique_colotti.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2022, role: "Head of IT" }
        ]
    },
    {
        name: "Marco D’Andria",
        imageSrc: "/People/members/marco_dandria.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Marco Saracino",
        imageSrc: "/People/members/marco_saracino.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2021, role: "Head of Human Resources" }
        ]
    },
    {
        name: "Maria Giulia Canu",
        imageSrc: "/People/members/maria_giulia_canu.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Matteo Alasio",
        imageSrc: "/People/members/matteo_alasio.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2022, role: "Corresponding Secretary" },
            { type: BadgeType.Head, year: 2020, role: "Head of Tutoring" }
        ]
    },
    {
        name: "Matteo D’Ospina",
        imageSrc: "/People/members/matteo_dospina.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Matteo Pace",
        imageSrc: "/People/members/matteo_pace.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Matteo Sartoni",
        imageSrc: "/People/members/matteo_sartoni.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2022, role: "Vice President" }
        ]
    },
    {
        name: "Matteo Sperti",
        imageSrc: "/People/members/matteo_sperti.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2022, role: "Head of Tutoring" }
        ]
    },
    {
        name: "Mattia Chiarle",
        imageSrc: "/People/members/mattia_chiarle.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2021, role: "Head of Events" }
        ]
    },
    {
        name: "Michelangelo Barocci",
        imageSrc: "/People/members/michelangelo_barocci.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Michele Cerra",
        imageSrc: "/People/members/michele_cerra.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Michele Ferrero",
        imageSrc: "/People/members/michele_ferrero.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Michele Pantaleo",
        imageSrc: "/People/members/michele_pantaleo.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2023, role: "Vice President" }
        ]
    },
    {
        name: "Micol Rosini",
        imageSrc: "/People/members/micol_rosini.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Niccolò Voster",
        imageSrc: "/People/members/niccolo_voster.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Nicolò Bellarmino",
        imageSrc: "/People/members/nicolo_bellarmino.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Nicolò Carpentieri",
        imageSrc: "/People/members/nicolo_carpentieri.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Paolo Monti",
        imageSrc: "/People/members/paolo_monti.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Paolo Rabino",
        imageSrc: "/People/members/paolo_rabino.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2022, role: "Recording Secretary" }
        ]
    },
    {
        name: "Pier Giorgio Mingoia",
        imageSrc: "/People/members/pier_giorgio_mingoia.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Renzo Antonelli",
        imageSrc: "/People/members/renzo_antonelli.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Riccardo Cuccu",
        imageSrc: "/People/members/riccardo_cuccu.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2019, role: "Head of IT" }
        ]
    },
    {
        name: "Riccardo Zaccone",
        imageSrc: "/People/members/riccardo_zaccone.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Head, year: 2021, role: "Head of IT" }
        ]
    },
    {
        name: "Salvatore Esposito",
        imageSrc: "/People/members/salvatore_adalberto_esposito.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Sandro Sartoni",
        imageSrc: "/People/members/sandro_sartoni.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2020, role: "Corresponding Secretary" },
            { type: BadgeType.Board, year: 2019, role: "President" },
            { type: BadgeType.Head, year: 2020, role: "Head of IT" }
        ]
    },
    {
        name: "Sara Zaminga",
        imageSrc: "/People/members/sara_zaminga.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2021, role: "Recording Secretary" }
        ]
    },
    {
        name: "Sarah Chamas",
        imageSrc: "/People/members/sarah_chamas.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2020, role: "Recording Secretary" }
        ]
    },
    {
        name: "Simone Dutto",
        imageSrc: "/People/members/simone_dutto.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2020, role: "Web Correspondent" },
            { type: BadgeType.Head, year: 2019, role: "Head of Communication" }
        ]
    },
    {
        name: "Simone Grande",
        imageSrc: "/People/members/simone_grande.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Valentin Nelu Ifrim",
        imageSrc: "/People/members/valentin_nelu_ifrim.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2020, role: "Treasurer" }
        ]
    },
    {
        name: "Veronica Montanaro",
        imageSrc: "/People/members/veronica_montanaro.png",
        badges: [
            { type: BadgeType.Inducted, year: 2020 },
            { type: BadgeType.Board, year: 2022, role: "Web Correspondent" },
            { type: BadgeType.Head, year: 2021, role: "Head of Communication" }
        ]
    },
    {
        name: "Vincenzo Pellegrini",
        imageSrc: "/People/members/vincenzo_pellegrini.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    },
    {
        name: "Vito Palmisano",
        imageSrc: "/People/members/vito_palmisano.png",
        badges: [{ type: BadgeType.Inducted, year: 2020 }]
    }
];

export default function Alumni() {
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleAlumnoClick = (id: number) => {
        setActiveId(id === activeId ? null : id);
    };

    AlumniData.sort((a, b) => {
        const aInductedBadge : Badge | undefined = a.badges?.find(badge => badge.type === BadgeType.Inducted);
        const bInductedBadge : Badge | undefined = b.badges?.find(badge => badge.type === BadgeType.Inducted);

        const aYear: any = aInductedBadge?.year ?? 0;
        const bYear: any = bInductedBadge?.year ?? 0;

        if (aYear !== bYear) {
            return bYear - aYear;
        }

        const aLastName = a.name.split(' ').slice(-1)[0];
        const bLastName = b.name.split(' ').slice(-1)[0];

        return aLastName.localeCompare(bLastName);
    });

    return (
        <Layout triangles>

            <div className={styles.descriptionContainer}>
                <img className={styles.descriptionContainer__image} src="/Home/vision.jpg" alt="Vision"/>
                <div className={styles.descriptionContainer__right}>
                    <text className={styles.descriptionContainer__right__title}>Alumni</text>
                    <text className={styles.descriptionContainer__right__subtitle}>ETA KAPPA MENTORING</text>
                    <text className={styles.descriptionContainer__right__text}>Since 2017 we are dedicated to
                        encouraging excellence in the IEEE-designated fields of interest, continuing to reinvent
                        ourselves to meet the needs of our members and society overall
                    </text>
                </div>
            </div>

            <div className={styles.alumniContainer}>
                <text className={styles.alumniContainer__directory}>Directory</text>
                <text className={styles.alumniContainer__alumni}>Alumni</text>
                <div className={styles.alumniContainer__grid}>
                    {AlumniData.map((al, index) => (
                        <Alumno alumno={al} key={index} index={index} onClick={() => handleAlumnoClick(index)}
                                active={index === activeId}/>
                    ))}
                </div>
            </div>

        </Layout>
    )
}

export interface AlumnoProps {
    name: string,
    imageSrc?: string,
    linkedIn?: string,
    badges?: Badge[],
}
