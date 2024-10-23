import Header from "./Header";

// on créé un composant : une fonction dont le but est de créer un bout de page en HTML
// grâce au langage JSX
function App() {
  // on est dans le coeur de la fonction / du composant
  // avant le return, on peut utiliser tout le js qu'on veut

  // avant le return, le but est de préparer des données dans des variables
  const articles = [
    { id: 1, title: "React" },
    { id: 2, title: "Angular" },
    { id: 3, title: "Vue" },
  ];

  const title = "Titre de la page";

  // le return doit retourner du JSX
  // le language que React a créé, qui permet de
  // créer des éléments HTML en JS (comme document.createElement,
  // mais avec une syntaxe plus facile / jolie / proche du HTML
  // tout en gardant certaines capacités du JS : boucles, conditions, etc.

  return (
    <div>
      <Header />

      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
