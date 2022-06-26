import { useEffect } from "react";
//react router dom
import { Routes, Route } from "react-router-dom";
//importing pages and components
import Home from "./pages/Home/Home";
import GameDetails from "./components/GameDetails/GameDetails";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/games/:gameID" element={<GameDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
