import Layout from "../../components/Layout";
import styles from "@/styles/Notes/Notes.module.css";

export default function BachelorNotes() {
  return (
    <Layout triangles>
      <div className={styles.container}>
        <section>
          <h2 className={styles.pageSubtitle}>BACHELOR DEGREE</h2>
          <h1 className={styles.pageTitle}>Bachelor Course Notes</h1>
        </section>
      </div>
    </Layout>
  );
}
