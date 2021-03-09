import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  // Sempre que é uma lista, eu começo o valor do estado com um array vazio
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  // useEffect -> disparar uma função quando algo acontecer

  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {/* Map percorre todos os repositórios e pra cada repo, ele retorna algo */}
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
          // Sempre que utilizarmos o "map", devemos utilizar no primeiro elemento a propriedade "key" (somente no primeiro)
        })}
      </ul>
    </section>
  )
}