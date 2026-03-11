import React from "react";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router";

function Recarger() {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const handleInfoClick = () => {
    navigate("/recarger-detail"); // new page route
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="w-full bg-white p-4 flex items-center ">
        <button
          onClick={handleBack}
          className="mr-4 px-2 py-1 bg-white rounded hover:bg-gray-200 transition"
        >
          <FaArrowLeft className="text-lg" />
        </button>
        <h1 className="text-lg md:text-xl font-bold">recarger</h1>
      </div>

      {/* Balance Section */}
      <div className="flex justify-between items-center p-2 mx-4">
        <span className="text-gray-500 text-sm">balance</span>
        <span className="text-yellow-400 font-bold text-3xl">0USDT</span>
      </div>

      {/* Info Div (clickable) */}
      <div
        onClick={handleInfoClick}
        className="flex items-center justify-between bg-white px-4 py-2 rounded-2xl mx-4 cursor-pointer"
      >
        <div className="flex items-start">
          <img
            src="turn.png" // replace with your small image path
            alt="Info"
            className="w-12 rounded-full mr-3 mt-1"
          />
          <p className="text-gray-500 text-sm">
            <strong className="text-black">USDT-Bep20</strong> <br />
            El monto mínimo para una sola transacción es USDT 0.00, el máximo es
            USDT 1111111.00 y la tarifa de manejo es 0.00%
          </p>
        </div>

        <FaChevronRight className="text-blue-400 text-lg mt-1" />
      </div>
    </div>
  );
}

export default Recarger;