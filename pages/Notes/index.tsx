import Layout from "../../components/Layout";
import styles from "@/styles/Notes/Notes.module.css";
import { useRouter } from 'next/router';

export default function Notes() {
  const router = useRouter();

  return (
    <Layout triangles>
      <div className={styles.container}>
        <section>
          <h2 className={styles.pageSubtitle}>STUDY MATERIALS</h2>
          <h1 className={styles.pageTitle}>Course Notes</h1>
          <div className={styles.noteLinks}>
            <div className={styles.noteCard} onClick={() => router.push('/Notes/Master')}>
              <h3>Master Degree</h3>
              <p>Access Master course materials</p>
            </div>
            <div className={styles.noteCard} onClick={() => router.push('/Notes/Bachelor')}>
              <h3>Bachelor Degree</h3>
              <p>Access Bachelor course materials</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}