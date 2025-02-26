import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query"); // Get search query from URL
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    }
  }, [query]);

  // Function to fetch movies from TMDB
  const fetchMovies = async (searchQuery) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-5 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-5">Search Results for "{query}"</h1>

      {/* Display Search Results */}
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="p-2 bg-gray-800 rounded-lg hover:scale-110">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-lg"
              />
              <h2 className="mt-2 text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm opacity-70">{movie.release_date}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
