import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const sliderImages = [
  "/s1.png",
  "/s2.png",
  "/s3.png",
  "/s4.png",
  "/s5.jpg",
];

const Perfil = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen">

      {/* Navbar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white shadow ">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-lg" />
        </button>

        <h1 className="font-semibold text-lg">Perfil de la empresa</h1>
      </div>

      {/* Slider */}
      <div className="w-full h-[22vh] overflow-hidden relative">

        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

      </div>

      {/* Blog Image */}
      <div className="w-full p-5">
      <div className="w-full ">
        <img
          src="/blog.png"
          className="w-full h-full object-cover"
        />
      </div>
      </div>

    </div>
  );
};

export default Perfil;