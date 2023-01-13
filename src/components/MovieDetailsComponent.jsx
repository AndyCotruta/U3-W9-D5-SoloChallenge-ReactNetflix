import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const params = useParams();
  console.log(params, "was read from url");
  console.log(params.movieId);

  const [movie, setMovie] = useState(null);
  const apiEndpoint = process.env.REACT_APP_BE_URL;

  const fetchMovie = async (id) => {
    let response = await fetch(`${apiEndpoint}/media/` + id);
    let data = await response.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie(params.movieId);
  }, [params.movieId]);

  return (
    <div className="body">
      {" "}
      <h1 className="mx-4">Find movie details below</h1>
      {movie !== null && (
        <div className="mx-4 d-flex">
          <div>
            <img src={movie.poster} alt="Movie Poster" />
          </div>
          <div className="movieDetails p-4">
            <p>Title: {movie.title}</p>
            <p>Year: {movie.year}</p>
            <p>Genre: {movie.type}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
