import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.metalogic.com.np/images/bg-pattern.png')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build Your Future <span className="text-blue-300">With Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join our team of innovators and help shape the digital future of
            Nepal.
          </p>

          {/* Job search bar */}
          <div className="bg-white rounded-lg shadow-xl p-2 max-w-2xl mx-auto flex">
            <div className="relative flex-grow flex items-center">
              {/* Search icon */}
              <svg
                className="absolute left-4 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for positions..."
                className="w-full py-4 pl-12 pr-4 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-r-md font-medium transition-colors duration-300">
              Search
            </button>
          </div>

          <div className="mt-12 animate-bounce">
            <a href="#open-positions" className="inline-block">
              {/* Chevron down icon */}
              <svg
                className="w-8 h-8 text-blue-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
