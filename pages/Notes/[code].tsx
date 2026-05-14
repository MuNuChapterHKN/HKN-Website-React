import { GetServerSideProps } from "next";
import { useState } from "react";
import Layout from "@/components/Layout";
import { fetchNotebookByCode, Notebook, NoteVersion } from "@/pages/api/directus";
import styles from "@/styles/Notes/Notes.module.scss";
import Link from "next/link";

interface NoteDetailProps {
    notebook: Notebook | null;
}

export default function NoteDetail({ notebook }: NoteDetailProps) {
    if (!notebook) {
        return (
            <Layout>
                <div className={styles.noteContainer}>
                    <h1 className={styles.title}>Notebook Not Found</h1>
                    <p>The requested notes could not be found or are not available yet.</p>
                    <Link href="/Notes">
                        <a className="roundButton">Back to Notes</a>
                    </Link>
                </div>
            </Layout>
        );
    }

    const translation = notebook.translations?.find(
        t => {
            const code = typeof t.languages_code === 'string' ? t.languages_code : t.languages_code?.code;
            return code === 'en' || code?.startsWith('en');
        }
    ) || notebook.translations?.[0];

    const [selectedVersion, setSelectedVersion] = useState<NoteVersion | null>(
        notebook.notes && notebook.notes.length > 0 ? notebook.notes[0] : null
    );

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    return (
        <Layout>
            <div className={styles.noteContainer}>
                <Link href="/Notes">
                    <a style={{ display: 'inline-block', marginBottom: '1rem', color: '#005baa', textDecoration: 'none' }}>
                        &larr; Back to all notes
                    </a>
                </Link>

                <div className={styles.noteCard}>
                    <h1 className={styles.title}>{notebook.name}</h1>
                    
                    {translation?.program && (
                        <p className={styles.description}>{translation.program}</p>
                    )}
                    
                    <p className={styles.authors}>
                        <span className={styles.authorsLabel}>Teacher:</span> {notebook.teacher}
                    </p>

                    <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '1.5rem' }}>
                        Code: {notebook.code} | A.Y. {notebook.start_academic_year} | Sem: {notebook.semester} | {notebook.program_level}
                    </p>

                    {/* SEZIONE VERSIONING */}
                    {notebook.notes && notebook.notes.length > 0 ? (
                        <>
                            <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                                <label htmlFor="version-select" style={{ fontWeight: 'bold', marginRight: '1rem' }}>
                                    Select Version:
                                </label>
                                <select 
                                    id="version-select"
                                    value={selectedVersion?.id}
                                    onChange={(e) => {
                                        const version = notebook.notes.find(n => n.id === Number(e.target.value));
                                        if (version) setSelectedVersion(version);
                                    }}
                                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                                >
                                    {notebook.notes.map((note) => (
                                        <option key={note.id} value={note.id}>
                                            Version {note.version} (Released: {formatDate(note.date_created)})
                                        </option>
                                    ))}
                                </select>
                                
                                {selectedVersion && (
                                    <p className={styles.lastUpdate} style={{ marginTop: '0.5rem' }}>
                                        Last Update: {formatDate(selectedVersion.date_updated)}
                                    </p>
                                )}
                            </div>

                            {/* VISUALIZZATORE PDF E DOWNLOAD */}
                            {selectedVersion && (
                                <>
                                    <div className={styles.pdfViewer}>
                                        <iframe
                                            // Se il file è ospitato direttamente su Directus, potresti dover aggiungere l'URL base degli asset
                                            src={selectedVersion.href}
                                            className={styles.pdfIframe}
                                            title={`PDF Viewer - ${notebook.name} v${selectedVersion.version}`}
                                        />
                                    </div>

                                    <a 
                                        href={selectedVersion.href}
                                        download={`${notebook.name.replace(/\s+/g, '_')}_v${selectedVersion.version}.pdf`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`roundButton ${styles.downloadButton}`}
                                        style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                        Download PDF (v{selectedVersion.version})
                                    </a>
                                </>
                            )}
                        </>
                    ) : (
                        <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                            <p>No completed notes have been released for this course yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { code } = context.params as { code: string };

    try {
        const notebook = await fetchNotebookByCode(code);
        
        return {
            props: {
                notebook: notebook || null,
            },
        };
    } catch (error) {
        console.error("Error fetching notebook details:", error);
        return {
            props: {
                notebook: null,
            },
        };
    }
};