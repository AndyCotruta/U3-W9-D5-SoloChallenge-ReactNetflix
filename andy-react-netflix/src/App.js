import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import HeaderComponent from "./components/HeaderComponent";
import MoviesList from "./components/MoviesListComponent";

function App() {
  return (
    <div className="body">
      <NavbarComponent />
      <HeaderComponent />
      <MoviesList />
    </div>
  );
}

export default App;