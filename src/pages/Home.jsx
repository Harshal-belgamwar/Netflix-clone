import React from "react";
import bg from "../assets/hero_banner.jpg";
import NavBar from "../components/NavBar";
import hero from "../assets/hero_title.png";
import play from "../assets/play_icon.png";
import info from "../assets/info_icon.png";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-x-hidden  ">
      {/* Full-Screen Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>

      <NavBar />

      {/* Content */}
      <div className="relative flex flex-col ml-5 w-full h-screen">
        <img
          src={hero}
          alt="hero"
          className="absolute w-[30vw] h-[20vh] mt-[10vh] z-10"
        />

        <p className="text-white z-10 absolute w-[40vw] mt-[35vh]">
          The series follows Hakan Demir, portrayed by Çağatay Ulusoy, a young
          shopkeeper in Istanbul whose life is turned upside down when he
          discovers his connection to a secret ancient order tasked with
          protecting the city.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-5 mt-[50vh] cursor-pointer">
          <button className="text-black text-[20px] bg-gradient-to-r from-gray-500 to-amber-800 w-[7vw] h-12 flex flex-row gap-2 ml-5 rounded-2xl p-2 hover:bg-red-500 hover:text-white hover:border-2 hover:border-white">
            <img src={play} className="w-10 h-9" />
            Play
          </button>

          <button className="text-black text-[17px] bg-gradient-to-r from-gray-500 to-amber-800 w-[12vw] h-12 flex flex-row gap-5 justify-start  rounded-2xl p-3 hover:bg-red-500 hover:text-white hover:border-2 hover:border-white">
            <img src={info} className="h-8" />
            More Info
          </button>
        </div>

        {/* Title Cards Section */}
        <div className="absolute z-10 mt-[65vh] text-white w-full ">
          <TitleCard  />
        </div>
      </div>
      <div className="mt-[15vh] ml-5">
        <TitleCard title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCard title={"Only on Netflix"} category={"popular"}/>
        <TitleCard title={"Upcoming"} category={"upcoming"}/>
        <TitleCard title={"Top Pics for You"} category={"now_playing"}/>

      </div>
      <Footer/>
      
    </div>
  );
};

export default Home;
