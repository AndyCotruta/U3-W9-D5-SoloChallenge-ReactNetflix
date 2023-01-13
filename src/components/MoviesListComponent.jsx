import MovieCard from "./MovieCardComponent";
import { Spinner, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";

const MoviesList = () => {
  // state = {
  //   results: {},
  //   moviesSaga: ["Ice Age", "Shrek", "Madagascar", "How to train your dragon"],
  //   isLoading: true,
  //   isError: false,
  // };
  useEffect(() => {
    handleFetch();
  }, []);

  const [results, setResults] = useState([]);
  const [moviesSaga] = useState(["Madagascar", "How to train your dragon"]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const apiEndpoint = process.env.REACT_APP_BE_URL;

  const handleFetch = async () => {
    try {
      const response = await fetch(`${apiEndpoint}/media`);
      if (response) {
        const data = await response.json();
        console.log(data);
        setResults(data);
      } else {
        console.log(" while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // componentDidMount = () => {
  //   this.handleFetch();
  // };

  return (
    <div className="moviesList px-4">
      {isLoading && (
        <div className="isLoadingText d-flex align-items-center mb-2">
          <div className=" mr-2">Content is loading...</div>
          <Spinner animation="border" role="status" className="spinner">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      {isError && (
        <Alert variant="danger">
          Ouch, something went wrong while loading movies :(
        </Alert>
      )}

      <h4 className="my-3">Movies</h4>
      <div className="row">
        {results &&
          results.map((movie) => (
            <MovieCard moviesList={movie} key={movie.imdbID} />
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
