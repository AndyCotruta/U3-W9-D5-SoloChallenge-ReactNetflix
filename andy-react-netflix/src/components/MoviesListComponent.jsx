import { Component } from "react";
import MovieCard from "./MovieCardComponent";

class MoviesList extends Component {
  state = {
    results: { harry: [], lord: [] },
    moviesSaga: ["harry%20potter", "lord%20of%20the%20rings"],
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
              [saga.split("%20")[0]]: data.Search,
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
      <div className="moviesList row px-4">
        {Object.keys(this.state.results).map((saga) => {
          <div>{saga}</div>;
          return this.state.results[saga].map((sagaList) => (
            <MovieCard moviesList={sagaList} />
          ));
        })}
      </div>
    );
  }
}

export default MoviesList;
