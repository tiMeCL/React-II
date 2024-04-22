import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pokemon from "./views/Pokemon";
import Home from "./views/Home";
import PokemonDetails from "./views/PokemonDetails";

const App = () => {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/" element={<Pokemon/>} />
        <Route path="/pokemon/:id" element={<PokemonDetails/>} />
      </Routes>
    </div>
  );
};

export default App;
