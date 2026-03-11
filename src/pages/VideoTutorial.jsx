import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

function VideoTutorial() {
  const navigate = useNavigate();

  const tutorials = [
    { title: "Tutorial de Binance", video: "/debi1.mp4" },
    { title: "Tutorial de Binance", video: "/debi2.mp4" },
    { title: "Tutorial de misión", video: "/deme.mp4" },
    { title: "Tutorial de invitación", video: "/dein.mp4" },
    { title: "Tutorial de registro", video: "/dere.mp4" },
  ];

  const handleBack = () => navigate(-1);

  const handleRowClick = (video) => {
    navigate("/playvideo", { state: { video } }); // pass video via state
  };

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
        <h1 className="text-lg md:text-xl">Video Tutorials</h1>
      </div>

      {/* Tutorials Table */}
      <div className="overflow-x-auto w-full my-4">
        <table className="min-w-full rounded-lg">
          <tbody>
            {tutorials.map((tutorial, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-100 bg-white hover:bg-gray-100 cursor-pointer"
                onClick={() => handleRowClick(tutorial.video)}
              >
                <td className="px-4 py-4">{tutorial.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VideoTutorial;