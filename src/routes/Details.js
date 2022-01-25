import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const getDetail = async () => {
      const result = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();

      setDetail(result.data.movie);
      setLoading(false);
    };
    getDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{detail.title}</h1>
          <img src={detail.large_cover_image} alt={detail.title} />
        </div>
      )}
    </div>
  );
};

export default Details;
