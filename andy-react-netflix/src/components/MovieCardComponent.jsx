import { Component } from "react";
import { Card } from "react-bootstrap";

class MovieCard extends Component {
  render() {
    return (
      <div
        className="col-sm-6 col-md-4 col-lg-3"
        key={this.props.moviesList.imdbID}
      >
        <Card className="movieCard bg-dark text-white my-3">
          <Card.Img src={this.props.moviesList.Poster} alt="Movie Poster" />
        </Card>
      </div>
    );
  }
}

export default MovieCard;
