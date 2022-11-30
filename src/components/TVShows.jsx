import HeaderComponent from "./HeaderComponent";
import MovieCard from "./MovieCardComponent";
import { Spinner, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";

const TVShows = () => {
  const [results, setResults] = useState({});
  const [moviesSaga, setMoviesSaga] = useState(["Ice Age", "Shrek"]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    handleFetch(moviesSaga);
  }, [moviesSaga]);

  const handleFetch = (moviesArray) => {
    try {
      moviesArray
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
              setResults((prevData) => ({ ...prevData, [saga]: data.Search }))
            )
            .then((data) => setIsLoading(false))
        )
        .catch(console.error);
    } catch (error) {
      // this.setState({ isError: true });
    }
  };

  return (
    <div className="moviesList body">
      <HeaderComponent className="tvshowsheader" />
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
          <div className="px-4" key={saga}>
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

export default TVShows;
