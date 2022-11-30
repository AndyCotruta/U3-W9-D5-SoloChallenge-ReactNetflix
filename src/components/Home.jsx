import HeaderComponent from "./HeaderComponent";
import MoviesList from "./MoviesListComponent";

const Home = () => {
  return (
    <div className="body">
      <HeaderComponent />
      <MoviesList />
    </div>
  );
};

export default Home;
