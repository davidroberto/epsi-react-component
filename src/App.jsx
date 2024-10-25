import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonsPage from "./pages/PokemonsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
