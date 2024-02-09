import styles from './Sobre.module.css'
import avatar from './images/avatar.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'
import python from './images/py-icon.svg'


function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={avatar}
                    alt="foto-avatar"
                    className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Pedro Nogueira</span> <br />
                        <strong>Estudante de Programação</strong></p>

                    <p>Estudo desenvolvimento web desde 2022</p>

                    <p>Cursando Analise e Desenvolvimento de Sistemas (2°Semestre)</p>

                    <p>Sou um entusiasta da área de TI</p>

                    <p>Foco em desenvolvimento de aplicações dinâmicas e intuitivas, <br />
                        com foco na experiência do usuário</p>

                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="ícone html" />
                    <img src={css} alt="ícone css" />
                    <img src={js} alt="ícone javascript" />
                    <img src={react} alt="ícone react" />
                    <img src={node} alt="ícone node" />
                    <img src={sql} alt="ícone sql" />
                    <img src={python} alt="ícone python" />
                </div>
            </div>
        </section>
    )
}

export default Sobre