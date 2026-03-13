import React from "react";
import { FaArrowLeft, FaAndroid, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router";

const DownloadApp = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        background:
          "linear-gradient(120deg, rgb(137, 247, 254) 0%, rgb(102, 166, 255) 100%)",
      }}
    >
      {/* Navbar */}
      <div className="w-full flex items-center  bg-white justify-center relative py-4 text-black font-semibold">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 text-lg"
        >
          <FaArrowLeft />
        </button>

        <h1 className="text-lg">App Download</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center w-full  flex-1 gap-8">

        {/* Logo */}
        <img
          src="/logo-en-US.png"
          alt="logo"
          className="w-35 h-35 object-contain my-20"
        />

        {/* Android Button */}
        <button
          className=" gap-3 px-8 py-2 w-[80%] mx-auto text-center rounded-lg text-white font-semibold shadow-lg"
          style={{
            background:
              "linear-gradient(60deg, rgb(0, 221, 184), rgb(6, 151, 192))",
          }}
        >
         
          ANDROID APP
        </button>

        {/* IOS Button */}
        <button
          className="w-[80%] mx-auto text-center gap-3 px-8 py-2 rounded-lg text-white font-semibold shadow-lg"
          style={{
            background:
              "linear-gradient(225deg, rgb(165, 165, 255) 0%, rgb(39, 39, 145) 100%)",
          }}
        >
          
          IOS APP
        </button>

      </div>
    </div>
  );
};

export default DownloadApp;