import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import backarrow from '../assets/back_arrow_icon.png';

const Player = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState({ name: "", key: "", published_at: "", type: "" });
  const navigate=useNavigate();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmI1MDc3MDQ0MTI3NjQzMzg5NTZiNmFhOGJlZTEzMSIsIm5iZiI6MTc0MDQ2MTY5MC41NTcsInN1YiI6IjY3YmQ1NjdhMjBiODdjOTQ0MzVlOTEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q_GhOPDsFmkf6_V1TC0G0C7PnhNQZCXrx2BAc5oAndU'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        }
      })
      .catch(err => console.error(err));
  }, [id]); // Added `id` dependency

  return (
    <div className='h-[100vh] w-[100vw] flex flex-col items-center  bg-black'>
      <img src={backarrow} alt='Back Arrow' className="cursor-pointer mb-4  mr-[90vw] w-[50px]" onClick={()=>{
        navigate(-1);
      }} />

      {apiData.key ? (
        <iframe 
          width="90%" 
          height="90%" 
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title={apiData.name || "Trailer"} 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-white">Trailer not available</p>
      )}

      <div className="player-info text-white text-center mt-4">
        <p>{apiData.published_at?.slice(0, 10) || "Unknown Date"}</p>
        <p>{apiData.name || "No Name"}</p>
        <p>{apiData.type || "No Type"}</p>
      </div>
    </div>
  );
}

export default Player;
