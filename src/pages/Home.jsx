
import React, { useEffect, useRef } from "react";
import { FaHome, FaInfoCircle, FaStar, FaPhone } from "react-icons/fa";

const Home = () => {
  const reviewRef = useRef(null);

  // Auto scroll for review section
  useEffect(() => {
    const interval = setInterval(() => {
      if (reviewRef.current) {
        reviewRef.current.scrollBy({ top: -1, behavior: "smooth" });
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Slider Section */}
      <div className="w-full h-[400px] bg-gray-200 relative flex items-center justify-center">
        <h1 className="text-4xl font-bold">Slider Placeholder</h1>
      </div>

      {/* Functionality Buttons */}
      <div className="flex justify-around mt-6 mb-6">
        <button
          onClick={() => scrollToSection("section1")}
          className="flex flex-col items-center text-blue-500 hover:text-blue-700"
        >
          <FaHome size={30} />
          <span>Home</span>
        </button>
        <button
          onClick={() => scrollToSection("section2")}
          className="flex flex-col items-center text-green-500 hover:text-green-700"
        >
          <FaInfoCircle size={30} />
          <span>Info</span>
        </button>
        <button
          onClick={() => scrollToSection("section3")}
          className="flex flex-col items-center text-yellow-500 hover:text-yellow-700"
        >
          <FaStar size={30} />
          <span>Reviews</span>
        </button>
        <button
          onClick={() => scrollToSection("section4")}
          className="flex flex-col items-center text-red-500 hover:text-red-700"
        >
          <FaPhone size={30} />
          <span>Contact</span>
        </button>
      </div>

      {/* Placeholder Sections */}
      <div id="section1" className="h-[300px] bg-gray-100 flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Section 1: Home</h2>
      </div>
      <div id="section2" className="h-[300px] bg-gray-200 flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Section 2: Info</h2>
      </div>

      {/* Review Section */}
      <div
        id="section3"
        ref={reviewRef}
        className="h-[200px] overflow-hidden bg-white border-t border-b border-gray-300 my-6"
      >
        <div className="space-y-4 flex flex-col-reverse">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-100 rounded shadow text-center"
            >
              Review #{idx + 1}: This is a sample review text.
            </div>
          ))}
        </div>
      </div>

      <div id="section4" className="h-[300px] bg-gray-100 flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Section 4: Contact</h2>
      </div>

      {/* Bottom 4 Icon Buttons */}
      <div className="flex justify-around mt-6 mb-6">
        <button className="text-purple-500 hover:text-purple-700">
          <FaHome size={30} />
        </button>
        <button className="text-pink-500 hover:text-pink-700">
          <FaInfoCircle size={30} />
        </button>
        <button className="text-yellow-500 hover:text-yellow-700">
          <FaStar size={30} />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <FaPhone size={30} />
        </button>
      </div>
    </div>
  );
};

export default Home;