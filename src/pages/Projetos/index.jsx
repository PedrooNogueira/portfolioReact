import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from './Projetos.module.css';

function Projetos() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await fetch('https://api.github.com/users/PedrooNogueira/repos?page=1&per_page=50');
                const data = await response.json();
                setRepositories(data);
            } catch (error) {
                console.error('Erro ao buscar repositórios:', error);
            }
        };
        fetchRepositories();
    }, []);

    // Mapeamento do nome do repositório para as tecnologias correspondentes
    const technologiesMap = {
        "Crud-Produtos-Angular": ["HTML5", "CSS3", "Angular"],
        "Calculator-React": ["HTML5", "CSS3", "React"],
        "Carrinho-de-Compras": ["HTML5", "CSS3", "React"],
        "dom-exercicios": ["HTML5", "CSS3"],
        "gerador-password": ["HTML5", "CSS3", "JavaScript"],
        "Lista-de-tarefas---ToDoList": ["HTML5", "CSS3", "JavaScript"],
        "LoginStreet": ["HTML5", "CSS3", "JavaScript"],
        "Netflix-Login": ["HTML5", "CSS3", "JavaScript"],
        "Parallax-filosofia": ["HTML5", "CSS3", "JavaScript"],
        "portfolioReact": ["React", "CSS3", "HTML5"],
        "ToDoList-Django": ["Python", "JavaScript", "HTML5", "CSS3"],
        "QRcode-Vue": ["Vue", "HTML5", "CSS3"],

        // Adicione mais mapeamentos conforme necessário para outros repositórios
    };

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {repositories.length > 0 ? (
                <section className={styles.lista}>
                    {repositories.map((repo) => (
                        <Card
                            key={repo.id}
                            name={repo.name}
                            description={repo.description}
                            html_url={repo.html_url}
                            technologies={technologiesMap[repo.name] || []} // Obtém as tecnologias com base no nome do repositório
                        />
                    ))}
                </section>
            ) : (
                <p>Carregando repositórios...</p>
            )}
        </section>
    );
}

export default Projetos;
