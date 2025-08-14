import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites ">
        <h2>Your Favorites </h2>
        <div className="movies-grid">
          {favorites.map(
            (movie) => (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorites added yet</h2>
      <p>start adding your favorite movies</p>
    </div>
  );
}

export default Favorites;
