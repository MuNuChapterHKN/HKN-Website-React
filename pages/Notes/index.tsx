import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { fetchNotebooks, Notebook } from "@/pages/api/directus";
import styles from "@/styles/Notes/Notes.module.scss";

interface NotesListingProps {
    notebooks: Notebook[];
}

export default function NotesListing({ notebooks }: NotesListingProps) {
    const getTranslation = (notebook: Notebook, langCode: string = 'en') => {
        const translation = notebook.translations?.find(
            t => {
                const code = typeof t.languages_code === 'string' ? t.languages_code : t.languages_code?.code;
                return code === langCode || code?.startsWith(langCode);
            }
        );
        return translation || notebook.translations?.[0];
    };

    return (
        <Layout>
            <div className={styles.noteContainer}>
                <h1 className={styles.title}>Eta Kappa Notes</h1>
                <p className={styles.description}>
                    Browse our collection of study materials and lecture notes.
                </p>

                {notebooks.length === 0 ? (
                    <p>No notes available at the moment.</p>
                ) : (
                    <div className={styles.notesGrid} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                        {notebooks.map((notebook) => {
                            const translation = getTranslation(notebook);
                            
                            return (
                                <Link href={`/Notes/${notebook.code}`} key={notebook.code} passHref>
                                    <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className={styles.noteCard} style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
                                            <h2>{notebook.name}</h2>
                                            <p><strong>Code:</strong> {notebook.code}</p>
                                            <p><strong>Teacher:</strong> {notebook.teacher}</p>
                                            {translation?.program && (
                                                <p><strong>Program:</strong> {translation.program}</p>
                                            )}
                                            <p style={{ fontSize: '0.9em', color: '#666', marginTop: '1rem' }}>
                                                A.Y. {notebook.start_academic_year} • Semester {notebook.semester} • {notebook.program_level}
                                            </p>
                                        </div>
                                    </a>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const notebooks = await fetchNotebooks();
        
        return {
            props: {
                notebooks: notebooks || [],
            },
        };
    } catch (error) {
        console.error("Error fetching notebooks:", error);
        return {
            props: {
                notebooks: [],
            },
        };
    }
};