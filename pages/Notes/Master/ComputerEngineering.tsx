import Layout from "../../../components/Layout";
import styles from "@/styles/Notes/Notes.module.css";
import { useEffect, useState } from "react";

export default function ComputerEngineering() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/Notes/Master/computer-engineering.html")
      .then((response) => response.text())
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error("Error loading HTML:", err));
  }, []);

  return (
    <Layout triangles>
      <div className={styles.container}>
        <section>
          <h2 className={styles.pageSubtitle}>MASTER DEGREE</h2>
          <h1 className={styles.pageTitle}>Computer Engineering</h1>
          <div
            className={styles.htmlContent}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </section>
      </div>
    </Layout>
  );
}
