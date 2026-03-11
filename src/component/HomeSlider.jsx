import React, { useEffect, useState } from "react";

const images = [
  "/s1.png",
  "/s2.png",
  "/s3.png",
  "/s4.png",
  "/s5.jpg",
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[25vh] md:h-[35vh] overflow-hidden relative">

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

    </div>
  );
};

export default Slider;