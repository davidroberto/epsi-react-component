import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

const PokemonShowPage = () => {
  // permet de récupérer un parametre d'url
  // qui a été défini quand on a créé la route
  const { id } = useParams();

  // je créé un state pour stocker le pokemon
  // avec une valeur par défaut à null
  const [pokemon, setPokemon] = useState(null);

  // si le state est vide (donc premier chargement du composant)
  if (!pokemon) {
    // je fais un appel fetch pour récupérer sur l'api
    // le pokemon avec l'id correspondant à celui de mon url
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // quand j'ai récupéré les données
        // je les stocke dans le state
        // ce qui provoque un rechargement du composant
        setPokemon(data);
      });
  }

  return (
    <>
      <Header />
      <p>Page de détails d'un pokemon</p>

      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>Type: {pokemon.type}</p>
          <p>Poids: {pokemon.weight} kg</p>
          <p>Taille: {pokemon.height} m</p>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
      <Footer />
    </>
  );
};

export default PokemonShowPage;
