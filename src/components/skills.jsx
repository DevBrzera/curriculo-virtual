import React from "react";
import styles from "../styles/skills.module.css";

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h1 className={styles.title}>Habilidades</h1>
        <div className={styles.skillset}>
          <h2 className={styles.subtitle}>Hardskills</h2>
          <p className={styles.description}>
            HTML
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "85%" }}></div>
            </div>
          </p>
          <p className={styles.description}>
            CSS
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "85%" }}></div>
            </div>
          </p>
          <p className={styles.description}>
            JS
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "80%" }}></div>
            </div>
          </p>
          <p className={styles.description}>
            React
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "65%" }}></div>
            </div>
          </p>
          <p className={styles.description}>
            Git
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "60%" }}></div>
            </div>
          </p>
          <p className={styles.description}>
            Github
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "60%" }}></div>
            </div>
          </p>
            <h2 className={styles.subtitle}>Softskills</h2>
            <p className={styles.description}>
              Comunicação
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "70%" }}></div>
              </div>
            </p>
            <p className={styles.description}>
              Trabalho em equipe
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "80%" }}></div>
              </div>
            </p>
            <p className={styles.description}>
              Proatividade
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "80%" }}></div>
              </div>
            </p>
            <p className={styles.description}>
              Flexibilidade
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "70%" }}></div>
              </div>
            </p>
          </div>
        </div>
    </section>
  );
}

export default Skills;
