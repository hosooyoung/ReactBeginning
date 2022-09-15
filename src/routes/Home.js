import Movie from '../components/Movies';
import { useState, useEffect } from 'react';
function Home() {
  const [movieList, m_setter] = useState([]);
  const [loading, load_setter] = useState(true);
  const getMoive = async () => {
    const res = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'
        // 'https://yts.mx/api/v2/movie_details.json?movie_id= ?'
      )
    ).json();
    m_setter(res.data.movies);
    load_setter(false);
  };
  useEffect(() => {
    getMoive();
  }, []);
  return (
    <div>
      <h1>Movie Introduction</h1>
      {loading ? (
        <h3>now loading...</h3>
      ) : (
        <div>
          {movieList.map((movie, idx) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              medium_cover_image={movie.medium_cover_image}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
