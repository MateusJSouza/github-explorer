export function RepositoryItem(props) {
  return (
    <li>
          {/* Interpolação */}
          <strong>{props.repository ?? 'Default'}</strong>
          <p>Forms in React</p>

          <a href="">
            Acessar repositório
          </a>
        </li>
  );
}