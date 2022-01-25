import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const result = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=rating`
        )
      ).json();
      setMovies(result.data.movies);
      setLoading(false);
    };
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => <Movie key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default Home;
