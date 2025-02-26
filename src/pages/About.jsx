import React from "react";

const About = () => {
  return (
    <div className="text-white bg-black min-h-screen flex flex-col items-center p-5">
      {/* Hero Section */}
      <div className="w-full h-64 bg-red-700 flex items-center justify-center text-center p-5">
        <h1 className="text-4xl md:text-6xl font-bold">About Netflix</h1>
      </div>

      {/* Company Overview */}
      <section className="max-w-4xl my-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg text-gray-300">
          Netflix is the world's leading streaming entertainment service with
          millions of paid memberships in over 190 countries enjoying TV series,
          documentaries, feature films, and games across a wide variety of
          genres and languages.
        </p>
      </section>

      {/* Key Features */}
      <section className="max-w-5xl my-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Netflix?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-5 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold">Unlimited Entertainment</h3>
            <p className="text-gray-400">Enjoy thousands of movies and shows with no ads.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold">Watch Anytime, Anywhere</h3>
            <p className="text-gray-400">Stream on your phone, tablet, laptop, or TV.</p>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold">Personalized Experience</h3>
            <p className="text-gray-400">Get recommendations based on your taste.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 p-5 text-center mt-auto">
        <p className="text-gray-400">&copy; 2025 Netflix, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
