import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const Invite = () => {

  const navigate = useNavigate();

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const code = "1113525";
  const link = "https://asmtask.com//xml/index.html#/register/1113525";

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="flex items-center p-4 bg-white">

        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-lg"/>
        </button>

      </div>


      {/* Invite Box */}

      <div className="p-4">

        <div className="bg-white rounded-xl p-6 shadow">

          <h2 className="text-center text-lg font-semibold">
            Your best friend 12345678900
          </h2>

          <p className="text-center mt-2">
            Invite you to join the ASM
          </p>


          <p className="text-center mt-4 font-semibold">
            Scan me!
          </p>

          <img
            src="/qr.png"
            className="w-40 mx-auto mt-3"
          />


          {/* Invite Code */}

          <div className="flex justify-between items-center mt-6 bg-gray-100 p-3 rounded">

            <p>{code}</p>

            <button
              onClick={() => copyText(code)}
              className="text-blue-500"
            >
              Copy
            </button>

          </div>


          {/* Invite Link */}

          <div className="flex justify-between items-center mt-3 bg-gray-100 p-3 rounded">

            <p className="text-sm break-all">{link}</p>

            <button
              onClick={() => copyText(link)}
              className="text-blue-500"
            >
              Copy
            </button>

          </div>


        </div>

      </div>

    </div>
  );
};

export default Invite;