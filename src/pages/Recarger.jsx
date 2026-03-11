import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

function Recarger() {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="w-full bg-white p-4 flex items-center shadow-md">
        <button
          onClick={handleBack}
          className="mr-4 px-2 py-1 bg-white rounded hover:bg-gray-200 transition"
        >
          <FaArrowLeft className="text-lg" />
        </button>
        <h1 className="text-lg md:text-xl font-bold">Recarger</h1>
      </div>

      {/* Balance Section */}
      <div className="flex justify-between items-center bg-gray-100 p-4 mt-4 rounded shadow-md mx-4">
        <span className="text-gray-700 font-medium">Balance</span>
        <span className="text-yellow-400 font-bold text-lg md:text-2xl">0USDT</span>
      </div>

      {/* Info Div */}
      <div className="flex items-start bg-white p-4 mt-4 rounded shadow-md mx-4">
        <img
          src="turn.png" // replace with your small image path
          alt="Info"
          className="w-6 h-6 mr-3 mt-1"
        />
        <p className="text-gray-700 text-sm md:text-base">
          El monto mínimo para una sola transacción es USDT 0.00, el máximo es USDT 1111111.00 y la tarifa de manejo es 0.00%
        </p>
      </div>
    </div>
  );
}

export default Recarger;