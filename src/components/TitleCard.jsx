import { useEffect,useState } from "react";
import cards_data from "../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCard = (props) => {
  const [apidata,setApidata]=useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmI1MDc3MDQ0MTI3NjQzMzg5NTZiNmFhOGJlZTEzMSIsIm5iZiI6MTc0MDQ2MTY5MC41NTcsInN1YiI6IjY3YmQ1NjdhMjBiODdjOTQ0MzVlOTEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q_GhOPDsFmkf6_V1TC0G0C7PnhNQZCXrx2BAc5oAndU'
    }
  };
  
  

  useEffect(() => { 
    fetch(`https://api.themoviedb.org/3/movie/${props.category?props.category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApidata(res.results))
    .catch(err => console.error(err));

  }, []);


  
  return (
    <div className="relative z-50 bg-transparent mt-10 font-bold px-5 ">
      {/* Section Title */}
      <h2 className="text-white text-2xl mb-4">{props.title?props.title:"Popular on Netflix"}</h2>

      {/* Scrollable Cards Container */}
      <div className="cards flex flex-row gap-6 w-full overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth p-2 ">
        {apidata.map((card, index) => (
          <Link to = {`/player/${card.id}`}
            key={index}
            className="snap-start flex-shrink-0 transform transition-transform hover:scale-110 duration-300"
          >
            <img
            // provide image complete path
              src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
              alt=""
              className="w-[20vw] h-[25vh] rounded-lg shadow-lg "
            />
            <p className="text-white mt-2 text-center text-lg ">{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
