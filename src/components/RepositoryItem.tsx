// React coloca todas as propriedades dentro de um argumento chamado "props"
interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
          {/* Colocar {} porque será passado uma variável JS */}
          <strong>{props.repository.name}</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.html_url}>
            Acessar repositório
          </a>
        </li>
  );
}