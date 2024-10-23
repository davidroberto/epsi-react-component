import { useState } from "react";

function Counter() {
  // useState permet de créer une sorte de base de données (le state)
  // pour le composant afin de stocker des valeurs
  // lors du premier rendu du composant, react va regarder
  // si la variable existe dans la "base de données" du composant
  // si elle existe il récupère sa valeur et la stocke
  // dans la variable counterState
  // sinon il la créé et lui met en valeur 0
  const [counterState, setCounterState] = useState(0);

  const handleClick = () => {
    // au click sur le bouton
    // j'utilise la fonction setCounterState
    // pour modifier la valeur de la variable counterState
    // dans la "bdd" du composant
    // React va automatiquement recharger le composant (le re-render)
    // c'est à dire mettre le HTML que ce composant a généré à la poubelle
    // et le recréer
    setCounterState(counterState + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Clique</button>
      <p>Vous avez cliqué {counterState} fois</p>
    </div>
  );
}

export default Counter;
