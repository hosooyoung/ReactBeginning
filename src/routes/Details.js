import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Details() {
  const { id } = useParams();
  const [m_detail, d_setter] = useState({});
  const getDetail = async () => {
    const res = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id= ${id}`)
    ).json();
    console.log(res.data);
    d_setter(res.data.movie);
  };
  console.log(m_detail);
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      <h1>{m_detail.title}</h1>
      <img src={m_detail.medium_cover_image} alt={m_detail.title} />
    </div>
  );
}

export default Details;
