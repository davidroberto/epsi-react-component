import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Créez un composant Pokemons
// qui doit afficher la liste des pokemons issus de cette API :
// https://pokebuildapi.fr/api/v1/pokemon

const PokemonsPage = () => {
  // je créé un state pour stocker les pokemons
  // avec en valeur par défaut un tableau vide
  const [pokemons, setPokemons] = useState([]);

  // j'utilise useEffect, qui me permet
  // d'executer du code à certains moment des rendus
  // du composant
  // si je veux que mon code soit executé une seule fois
  // au premier chargement, je passe mon code en à executer en
  //premier argument du useEffect et un tableau vide en second
  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151")
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
        // data = []
        setPokemons(data);
      });
  }, []);

  return (
    <>
      <Header />
      <h1>Pokemons</h1>

      {pokemons.length > 0 ? (
        <ul>
          {pokemons.map((pokemon) => {
            return (
              <li key={pokemon.id}>
                {pokemon.name}
                <Link to={"/pokemons/show/" + pokemon.id}>
                  <button>Voir le pokémon</button>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Chargment en cours !</p>
      )}
      <Footer />
    </>
  );
};

export default PokemonsPage;
