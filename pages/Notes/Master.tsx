import Layout from "../../components/Layout";
import styles from "@/styles/Notes/Notes.module.css";
import { useRouter } from "next/router";

const masterPrograms = [
  {
    id: "computer-engineering",
    title: "Computer Engineering",
    description: "Software development, computer systems, and digital design",
    path: "/Notes/Master/ComputerEngineering",
  },
];

export default function MasterNotes() {
  const router = useRouter();

  return (
    <Layout triangles>
      <div className={styles.container}>
        <section>
          <h2 className={styles.pageSubtitle}>MASTER DEGREE</h2>
          <h1 className={styles.pageTitle}>Master Course Notes</h1>

          <div className={styles.programGrid}>
            {masterPrograms.map((program) => (
              <div
                key={program.id}
                className={styles.programCard}
                onClick={() => router.push(program.path)}
              >
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
