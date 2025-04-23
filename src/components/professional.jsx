import React from "react";
import styles from "../styles/professional.module.css";

function Professional() {
  return (
    <section className={styles.professional}>
      <div className={styles.container}>
        <h1 className={styles.title}>Experiência Profissional</h1>
        <div className={styles.experience}>
          <h2 className={styles.subtitle}>Vendedor</h2>
          <div className={styles.subContent}>
            <p className={styles.fundation}>Oficina do Celular</p>
            <p className={styles.division}>|</p>
            <p className={styles.date}>Jul. 2023 - Jul. 2024</p>
          </div>
          <p className={styles.description}>
            Responsável por atender clientes, realizar vendas e prestar suporte
            técnico em dispositivos móveis. Desenvolvi habilidades em
            comunicação, resolução de problemas e conhecimento técnico sobre
            produtos. Contribuí para o aumento das vendas e a satisfação dos
            clientes, mantendo um ambiente de trabalho organizado e eficiente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Professional;
