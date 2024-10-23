import Footer from "../components/Footer";
import Header from "../components/Header";
import ListArticles from "../components/ListArticles";
import Sidebar from "../components/Sidebar";

// on créé un composant : une fonction dont le but est de créer un bout de page en HTML
// grâce au langage JSX
function App() {
  // on est dans le coeur de la fonction / du composant
  // avant le return, on peut utiliser tout le js qu'on veut

  const title = "Titre de la page";

  // le return doit retourner du JSX
  // le language que React a créé, qui permet de
  // créer des éléments HTML en JS (comme document.createElement,
  // mais avec une syntaxe plus facile / jolie / proche du HTML
  // tout en gardant certaines capacités du JS : boucles, conditions, etc.

  return (
    <div>
      <Header />

      <ListArticles />

      <Sidebar isMailDisplayed={false} />

      <Footer />
    </div>
  );
}

export default App;
