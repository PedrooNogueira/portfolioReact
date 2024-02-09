import styles from './Card.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaAngular, FaVuejs } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

function Card({ name, description, html_url, technologies }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    {renderizarIconesTecnologia(technologies)}
                </div>
                <a
                    href={html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.botao}
                >
                    <BsArrowRight />
                </a>
            </div>
        </section>
    );
}

function renderizarIconesTecnologia(technologies) {
    return technologies.map((tech, index) => {
        switch (tech) {
            case 'HTML5':
                return <FaHtml5 key={index} />;
            case 'CSS3':
                return <FaCss3Alt key={index} />;
            case 'JavaScript':
                return <FaJs key={index} />;
            case 'React':
                return <FaReact key={index} />;
            case 'Python':
                return <FaPython key={index} />;
            case 'Angular':
                return <FaAngular key={index} />;
            case 'Vue':
                return <FaVuejs key={index} />;
            // Adicione outros casos conforme necessário
            default:
                return null;
        }
    });
}

export default Card;
