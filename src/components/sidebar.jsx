import React from "react";
import styles from "../styles/sidebar.module.css";
import Profile from "../assets/bruno-profile.jpeg";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img src={Profile} alt="user-profile" />
          <div className={styles.info}>
            <h2 className={styles.userName}>Bruno Gregório</h2>
            <p className={styles.userRole}>Desenvolvedor Full-Stack</p>
          </div>
        </div>
        <div className={styles.aboutMe}>
          <p>
            Apaixonado por tecnologia, com conhecimento em desenvolvimento
            Full-Stack, segurança da informação e análise de sistemas. Proativo,
            focado em soluções eficientes, com experiência em programação, banco
            de dados, APIs REST, versionamento com Git e boas práticas de
            desenvolvimento ágil.
          </p>
        </div>
        <div className={styles.socialMedia}>
          <a
            id={styles.linkedin}
            href="https://www.linkedin.com/in/bruno-gregório-dev/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            id={styles.github}
            href="https://github.com/DevBrzera"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            id={styles.instagram}
            href="https://www.instagram.com/brunogregorio.jsx/"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
