import React from 'react'
import {FaArrowLeft, FaCopy } from "react-icons/fa";
import { useNavigate } from "react-router";
const RecargerDetail = () => {

  const walletAddress =
    "0x8D6C356491C45FB07df7918aB02512dA6Ba6fA8F";

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Address copied!");
  };
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className='bg-gray-50 w-full h-screen'>

      
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

    <div className="bg-white mx-4 mt-4 p-4">

          <p className="text-center text-teal-400 text-sm mb-4">
            Elija el siguiente método para transferir el monto correspondiente
          </p>

          <p className="text-gray-700 text-sm">
            Complete la transferencia de acuerdo con la siguiente información
          </p>

          <p className="text-gray-400 text-xs mb-4">
            USDT-bep20 transferencia
          </p>

          {/* banco */}
          <div className="flex justify-between items-center py-4">
            <span className="font-semibold">banco</span>

            <div className="flex items-center gap-2">
              <span>USDT-bep20</span>
              <FaCopy
                className="cursor-pointer text-gray-500"
                onClick={() => navigator.clipboard.writeText("USDT-bep20")}
              />
            </div>
          </div>

          {/* número de cuenta */}
          <div className="flex justify-between items-center py-4">
            <span className="font-semibold">número de cuenta</span>

            <div className="flex items-center gap-2">
              <span className="text-sm break-all">
                {walletAddress}
              </span>

              <FaCopy
                className="cursor-pointer text-gray-500"
                onClick={copyAddress}
              />
            </div>
          </div>

          {/* Nombre */}
          <div className="flex justify-between items-center py-4">
            <span className="font-semibold">Nombre</span>

            <div className="flex items-center gap-2">
              <span>auto</span>

              <FaCopy
                className="cursor-pointer text-gray-500"
                onClick={() => navigator.clipboard.writeText("auto")}
              />
            </div>
          </div>

          {/* QR Code */}
          <div className="flex justify-center mt-6">
            <img
              src="/download.png"
              alt="QR Code"
              className="w-25 h-25"
            />
          </div>
        </div>
    </div>
  )
}

export default RecargerDetail