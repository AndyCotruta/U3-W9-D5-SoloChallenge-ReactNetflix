import { Component } from "react";
import MovieCard from "./MovieCardComponent";
import { Spinner, Alert } from "react-bootstrap";

class MoviesList extends Component {
  state = {
    results: {},
    moviesSaga: ["Ice Age", "Shrek", "Madagascar", "How to train your dragon"],
    moviesList: [],
    isLoading: true,
    isError: false,
  };

  handleFetch = () => {
    try {
      this.state.moviesSaga.map((saga) =>
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=263d5320&s=${saga}`)
          .then((testResponse) => testResponse.json())
          .then((data) =>
            this.setState({
              results: {
                ...this.state.results,
                [saga]: data.Search,
              },
            })
          )
          .then((data) => this.setState({ isLoading: false }))
          .catch(console.error)
      );
    } catch (error) {
      this.setState({ isError: true });
    }
  };

  componentDidMount = () => {
    this.handleFetch();
  };

  render() {
    return (
      <div className="moviesList px-4">
        {this.state.isLoading && (
          <div className="isLoadingText d-flex align-items-center mb-2">
            <div className=" mr-2">Content is loading...</div>
            <Spinner animation="border" role="status" className="spinner">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
        {this.state.isError && (
          <Alert variant="danger">
            Ouch, something went wrong while loading movies :(
          </Alert>
        )}
        {Object.keys(this.state.results).map((saga) => {
          return (
            <div key={saga}>
              {" "}
              <h4 className="my-3">{saga}</h4>
              <div className="row">
                {this.state.results[saga].map((sagaList) => (
                  <MovieCard moviesList={sagaList} key={sagaList.imdbID} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MoviesList;
