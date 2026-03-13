import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import { TbCopyPlusFilled } from "react-icons/tb";

const Invite = () => {

  const navigate = useNavigate();

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const code = "1113525";
  const link = "https://asmtask.com//xml/index.html#/register/1113525";

  return (
    <div className="min-h-scree">
<div className="w-[95%] h-screen relative mx-auto ">
    
      {/* Navbar */}
      <div className="flex items-center py-4 bg-transparent">

        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-lg"/>
        </button>

      </div>


      {/* Invite Box */}

      <div className=" absolute bottom-8 w-full bg-[rgba(0,0,0,0.3)] rounded-[1rem]">

        <div className=" p-6">

          <h2 className="text-center text-lg font-semibold text-[#ff0]">
            Your best friend 12345678900
          </h2>

          <p className="text-center text-lg text-[#ff0]">
            Invite you to join the ASM
          </p>


          

         <div className="w-35 bg-white p-4 rounded-2xl mx-auto mt-10">
         <img
            src="/download.png"
            className="w-full"
          />
         </div>


          {/* Invite Code */}

          <div className="flex justify-between items-center mt-10 p-3">

            <p className="w-full text-center text-3xl font-bold text-white">{code}</p>

            <button
              onClick={() => copyText(code)}
              className="text-white"
            >
              <TbCopyPlusFilled />
            </button>

          </div>


          {/* Invite Link */}

          <div className="flex justify-between items-center mt-3 p-3">

            <p className="text-sm break-all w-full text-center text-white">{link}</p>

            <button
              onClick={() => copyText(link)}
              className="text-white"
            >
              <TbCopyPlusFilled />
            </button>

          </div>


        </div>

      </div>
</div>

    </div>
  );
};

export default Invite;