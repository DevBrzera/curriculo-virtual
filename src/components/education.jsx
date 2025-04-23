import React from "react";
import styles from "../styles/education.module.css";

function Education() {
  return (
    <section className={styles.education}>
      <div className={styles.container}>
        <h1 className={styles.title}>Educação</h1>
        <div className={styles.academic}>
          <h2 className={styles.subtitle}>
            Análise e Desenvolvimento de Sistemas
          </h2>
          <div className={styles.subContent}>
            <p className={styles.fundation}>Doctum</p>
            <p className={styles.division}>|</p>
            <p className={styles.date}>2024 - 2026</p>
          </div>
          <p className={styles.description}>
            Formação tecnóloga voltada para o desenvolvimento de software,
            análise de requisitos, modelagem de sistemas e gestão de projetos de
            TI. Abrange conhecimentos em linguagens de programação, banco de
            dados, engenharia de software e infraestrutura, preparando o
            profissional para atuar no planejamento, construção e manutenção de
            sistemas computacionais.
          </p>
        </div>
        <div className={styles.academic}>
          <h2 className={styles.subtitle}>Programação Full-Stack</h2>
          <div className={styles.subContent}>
            <p className={styles.fundation}>Energisa - RPV - Edulivre</p>
            <p className={styles.division}>|</p>
            <p className={styles.date}>2023 - 2024</p>
          </div>
          <p className={styles.description}>
            Formação abrangente em desenvolvimento de aplicações completas, com
            domínio das tecnologias de front-end e back-end. Capacita o
            profissional a criar interfaces interativas, desenvolver APIs,
            integrar bancos de dados e implementar soluções completas e
            escaláveis. Envolve o uso de frameworks modernos, controle de versão
            e boas práticas de desenvolvimento ágil.
          </p>
        </div>
        <div className={styles.academic}>
          <h2 className={styles.subtitle}>Treinamento em Cibersegurança</h2>
          <div className={styles.subContent}>
            <p className={styles.fundation}>Energisa - RPV</p>
            <p className={styles.division}>|</p>
            <p className={styles.date}>Fev. 2025 - Abr. 2025</p>
          </div>
          <p className={styles.description}>
            Capacitação focada na proteção de sistemas, redes e dados contra
            ameaças digitais. Abrange fundamentos de segurança da informação,
            análise de vulnerabilidades, criptografia, testes de intrusão
            (pentest), monitoramento de incidentes e práticas de defesa
            cibernética. Prepara o profissional para identificar riscos, aplicar
            medidas preventivas e responder a ataques com eficiência.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
