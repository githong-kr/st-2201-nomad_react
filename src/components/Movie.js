import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  return (
    <div>
      <h1>
        <Link
          to={`/movie/${movie.id}`}
        >{`${movie.title} (${movie.year})`}</Link>
      </h1>
      <h2>{`${movie.genres}`}</h2>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <div>{movie.summary}</div>
      <hr />
    </div>
  );
};

export default Movie;
