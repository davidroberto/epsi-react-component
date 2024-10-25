import { useState } from "react";

function Pokemons() {
  // je créé un state pour stocker les pokemons
  // avec en valeur par défaut un tableau vide
  const [pokemons, setPokemons] = useState([]);

  // je fais une requête fetch pour récupérer les pokemons
  // cette requête est asynchrone, donc je dois utiliser
  // then pour attendre qu'elle soit terminée
  fetch("https://pokebuildapi.fr/api/v1/pokemon")
    .then((response) => {
      // quand la réponse du serveur est reçue
      // je récupère le json et le transforme
      // en JS
      return response.json();
    })
    // la transformation du json en JS est aussi asynchrone
    // donc j'utilise then pour attendre que ce soit terminé
    // quand c'est terminé, je stocke les données dans le state
    // ce qui force le composant à être rechargé (re-rendu),
    // ça veut dire que le HTML
    // affiché sur le navigateur est mis à jour
    .then((data) => {
      setPokemons(data);
    });

  return (
    <div>
      <h1>Pokemons</h1>

      {pokemons ? (
        <ul>
          {pokemons.map((pokemon) => {
            return <li key={pokemon.id}>{pokemon.name}</li>;
          })}
        </ul>
      ) : (
        <p>Chargment en cours !</p>
      )}
    </div>
  );
}

export default Pokemons;
