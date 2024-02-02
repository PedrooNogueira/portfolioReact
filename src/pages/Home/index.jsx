import { Link } from 'react-router-dom';
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá, sou <br />
                    <span>Pedro Nogueira</span> <br />
                    Estudante de TI
                </p>
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_green}`}>
                    Sobre mim
                </Link>
            </div>
            <figure>
                <img className={styles.img_home} src="/undrawn.svg" alt="imagem home" />
            </figure>
        </section>
    )
}

export default Home;