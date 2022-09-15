import PropType from 'prop-types';
import { Link } from 'react-router-dom';
function Movies({ id, medium_cover_image, title, genres, summary }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      {genres.map((gen, g_idx) => (
        <li key={g_idx}>{gen}</li>
      ))}
      <p>{summary}</p>
    </div>
  );
}
Movies.PropType = {
  id: PropType.number.isRequired,
  title: PropType.string.isRequired,
  medium_cover_image: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,
  summary: PropType.string.isRequired,
};
export default Movies;
