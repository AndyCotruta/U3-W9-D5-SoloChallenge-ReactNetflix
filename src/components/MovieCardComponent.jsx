import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3" key={props.moviesList.imdbID}>
      <Link to={"/details/" + props.moviesList.imdbID}>
        <Card className="movieCard bg-dark text-white my-3">
          <Card.Img src={props.moviesList.poster} alt="Movie Poster" />
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
