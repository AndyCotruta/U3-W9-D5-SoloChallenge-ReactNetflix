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

  const [results, setResults] = useState({});
  const [moviesSaga, setMoviesSaga] = useState([
    "Madagascar",
    "How to train your dragon",
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    try {
      moviesSaga
        .map((saga) =>
          fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=263d5320&s=${saga}`)
            .then((testResponse) => testResponse.json())
            .then((data) =>
              // this.setState({
              //   results: {
              //     ...this.state.results,
              //     [saga]: data.Search,
              //   },
              // })
              setResults({ ...results, [saga]: data.Search })
            )
            .then((data) => setIsLoading(false))
        )
        .catch(console.error);
    } catch (error) {
      // this.setState({ isError: true });
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
      {Object.keys(results).map((saga) => {
        return (
          <div key={saga}>
            {" "}
            <h4 className="my-3">{saga}</h4>
            <div className="row">
              {results[saga].map((sagaList) => (
                <MovieCard moviesList={sagaList} key={sagaList.imdbID} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesList;
