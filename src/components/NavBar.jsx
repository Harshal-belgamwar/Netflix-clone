import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import search from "../assets/search_icon.svg";
import bell from "../assets/bell_icon.svg";
import profile from "../assets/profile_img.png";
import caret from "../assets/caret_icon.svg";
import { logout } from "../Firebase";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [movie, setMovie] = useState(""); // Store user input
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // 🔥 Search Function
  const handleSearch = () => {
    if (movie.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(movie)}`);
    }
  };

  // 🔥 Handle Enter Key Press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="navbar fixed flex flex-row justify-between p-5 z-100 bg-transparent w-full">
      {/* Left Side - Logo */}
      <img src={logo} alt="logo" className="w-[8vw] min-w-[100px]" />

      {/* Center - Navigation Links */}
      <ul className="hidden md:flex text-white flex-row gap-7">
        <li className="cursor-pointer hover:text-blue-500 " onClick={()=>{navigate("/")}}>Home</li>
        <li className="cursor-pointer hover:text-blue-500 " onClick={()=>{navigate("/About")}}>About</li>
        <li className="cursor-pointer hover:text-blue-500">Movies</li>
        <li className="cursor-pointer hover:text-blue-500">New & Popular</li>
        <li className="cursor-pointer hover:text-blue-500">My List</li>
      </ul>

      {/* Right Side - Search & Profile */}
      <div className="flex flex-row gap-5 text-white items-center">
        {/* Search Bar */}
        <div className="flex items-center border-2 border-red-500 rounded-lg p-1">
          <input
            type="text"
            placeholder="Search Movies"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            onKeyDown={handleKeyDown} // 🔥 Detect Enter Key
            className="w-[12vw] min-w-[150px] bg-transparent text-white outline-none px-2"
          />
          <button onClick={handleSearch}>
            <img src={search} alt="search" className="w-6 h-6 cursor-pointer" />
          </button>
        </div>

        <img src={bell} alt="bell" className="w-6 h-6" />

        {/* Profile & Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={profile} alt="profile" className="w-8 h-8" />
            <img src={caret} alt="caret" className="w-4 h-4" />
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-black text-white rounded-md border border-red-500 shadow-lg z-50">
              <button className="w-full text-center py-2 hover:bg-gray-700" onClick={handleLogout}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
