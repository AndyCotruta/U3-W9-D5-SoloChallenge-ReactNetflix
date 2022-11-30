import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetailsComponent";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarComponent />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<TVShows />} path="/TVShows" />
          <Route element={<MovieDetails />} path="/details/:movieId" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
