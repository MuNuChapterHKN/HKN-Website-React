import Layout from "@/components/Layout";
import styles from "@/styles/Notes/Notes.module.scss";
import RoundButton from "@/components/molecules/RoundButton";

interface NoteProps {
    title: string;
    description: string;
    authors: string[];
    lastUpdate: Date;
    pdfUrl: string;
}

// Esempio con mock data
const noteData: NoteProps = {
    title: "Linear Algebra and Geometry Lecture Notes",
    description: "Good notes for the entire Linear Alebra and Geometry Lectures",
    authors: ["Pippo Baudo", "Ezio Greggio", "Paolo Bonolis"],
    lastUpdate: new Date("2025-12-01T14:30:00"),
    pdfUrl: "/sample.pdf" // Metti un file sample.pdf in public/ per testare
};

export default function Note() {
    const formatAuthors = (authors: string[]) => {
        if (authors.length === 0) return "";
        if (authors.length === 1) return authors[0];
        if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
        
        const allButLast = authors.slice(0, -1).join(", ");
        const last = authors[authors.length - 1];
        return `${allButLast} and ${last}`;
    };

    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        
        return `${day}-${month}-${year} at ${hours}:${minutes}:${seconds}`;
    };

    return (
        <Layout>
            <div className={styles.noteContainer}>
                <div className={styles.noteCard}>
                    <h1 className={styles.title}>{noteData.title}</h1>
                    
                    <p className={styles.description}>{noteData.description}</p>
                    
                    <p className={styles.authors}>
                        <span className={styles.authorsLabel}>Author:</span> {formatAuthors(noteData.authors)}
                    </p>
                    
                    <p className={styles.lastUpdate}>
                        Last Update {formatDate(noteData.lastUpdate)}
                    </p>

                    <div className={styles.pdfViewer}>
                        <iframe
                            src={noteData.pdfUrl}
                            className={styles.pdfIframe}
                            title="PDF Viewer"
                        />
                    </div>

                    <a 
                        href={noteData.pdfUrl}
                        download={`${noteData.title.replace(/\s+/g, '_')}.pdf`}
                        className={`roundButton ${styles.downloadButton}`}
                    >
                        <svg 
                            className={styles.downloadIcon}
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download PDF
                    </a>
                </div>
            </div>
        </Layout>
    );
}
