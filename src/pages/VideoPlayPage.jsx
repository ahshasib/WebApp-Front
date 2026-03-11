import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router";

function VideoPlayPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const video = location.state?.video; // get video path from state

  const handleBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="w-full bg-white p-4 flex items-center">
        <button
          onClick={handleBack}
          className="mr-4 px-2 py-1 bg-white rounded hover:bg-gray-200 transition"
        >
          <FaArrowLeft className="text-lg" />
        </button>
        <h1 className="text-lg md:text-xl">Video Player</h1>
      </div>

      {/* Video Player */}
      <div className="w-full md:w-3/4 mx-auto my-4">
        {video ? (
          <video
            key={video}
            src={video}
            controls
            autoPlay
            className="w-full rounded shadow-lg"
          />
        ) : (
          <p className="text-center text-gray-500">No video selected</p>
        )}
      </div>
    </div>
  );
}

export default VideoPlayPage;