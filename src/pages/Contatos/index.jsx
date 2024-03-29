// Contatos.jsx

import React from 'react';
import styles from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2 className={styles.titulo}>Contatos</h2>
            <h3 className={styles.subtitulo}>Entre em contato</h3>
            <p className={styles.paragrafo}>Para que possamos conversar sobre.</p>

            <div className={styles.icones}>
                <a href="mailto:pedrohenrique70866@gmail.com" target="_blank" rel="noopener noreferrer">
                    <GoMail className={styles.icone} />
                </a>
                <a href="https://github.com/PedrooNogueira" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles.icone} />
                </a>
                <a href="https://www.linkedin.com/in/pedro-nogueira-15b86522b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles.icone} />
                </a>
            </div>
        </section>
    );
}

export default Contatos;
