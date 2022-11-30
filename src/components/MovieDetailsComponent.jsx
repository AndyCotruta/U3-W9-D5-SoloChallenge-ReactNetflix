import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const params = useParams();
  console.log(params, "was read from url");
  console.log(params.movieId);

  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=263d5320&i=" + params.movieId
    );
    let data = await response.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="body">
      {" "}
      <h1 className="mx-4">Find movie details below</h1>
      {movie !== null && (
        <div className="mx-4 d-flex">
          <div>
            <img src={movie.Poster} alt="Movie Poster" />
          </div>
          <div className="movieDetails p-4">
            <p>Plot: {movie.Plot}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Genre: {movie.Genre}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
