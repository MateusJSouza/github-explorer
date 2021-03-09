// React coloca todas as propriedades dentro de um argumento chamado "props"
export function RepositoryItem(props) {
  return (
    <li>
          {/* Colocar {} porque será passado uma variável JS */}
          <strong>{props.repository.name}</strong>
          <p>{props.repository.description}</p>

          <p>{props.repositories}</p>

          <a href={props.repository.html_url}>
            Acessar repositório
          </a>
        </li>
  );
}