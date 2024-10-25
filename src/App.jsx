import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonsPage from "./pages/PokemonsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
