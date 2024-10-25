import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Pokemons</h1>

      <nav>
        <ul>
          <li>
            {/* 
            Permet de générer un lien sans rechargement de page complet 
            vers la page d'accueil. React garde les éléments communs aux deux pages
            comme le header et le footer.
          */}
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/pokemons">Pokemons</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
