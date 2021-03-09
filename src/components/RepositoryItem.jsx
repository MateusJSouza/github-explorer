// React coloca todas as propriedades dentro de um argumento chamado "props"
export function RepositoryItem(props) {
  return (
    <li>
          {/* Colocar {} porque será passado uma variável JS */}
          <strong>{props.repository.name ?? 'Default'}</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.link}>
            Acessar repositório
          </a>
        </li>
  );
}