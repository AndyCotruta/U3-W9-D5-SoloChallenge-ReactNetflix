import { Component } from "react";
import MovieCard from "./MovieCardComponent";

class MoviesList extends Component {
  state = {
    results: {},
    moviesSaga: ["Ice Age", "Madagascar", "How to train your dragon"],
    moviesList: [],
  };

  handleFetch = () => {
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
        .catch(console.error)
    );
    // let response = await fetch(
    //   "http://www.omdbapi.com/?i=tt3896198&apikey=263d5320&s=harry%20potter"
    // );
    // try {
    //   if (response.ok) {
    //     let data = await response.json();
    //     console.log(data.Search);
    //     this.setState({ moviesList: data.Search });
    //   } else {
    //     console.log("Something went wrong while fetching");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  componentDidMount = () => {
    this.handleFetch();
  };

  render() {
    return (
      <div className="moviesList px-4">
        {Object.keys(this.state.results).map((saga) => {
          return (
            <>
              {" "}
              <h4 className="my-3">{saga}</h4>
              <div className="row">
                {this.state.results[saga].map((sagaList) => (
                  <MovieCard moviesList={sagaList} />
                ))}
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default MoviesList;
