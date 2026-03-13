import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const FinancialRecord = () => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Revenue");

  const tabs = [
    "Revenue",
    "Expenditure",
    "Recharge",
    "Withdrawal record",
  ];

  const records = [1,2,3,4,5,6,7];

  return (
    <div className="min-h-screen ">

      {/* Top Navbar */}
      <div className="relative bg-white py-3 flex justify-center items-center">

        <button
          onClick={() => navigate(-1)}
          className="absolute left-4"
        >
          <FaArrowLeft />
        </button>

        <h1 className="font-medium">Revenue records</h1>

      </div>


      {/* Tab Navigation */}

      <div className="flex justify-around bg-[rgba(0,0,0,0.35)] text-black text-md">

{tabs.map((tab) => (
  <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={`py-3 px-2 relative transition-all duration-300 ${
      activeTab === tab ? "text-[#ff0]" : "text-black"
    }`}
  >

    {tab}

    <div
      className={`absolute bottom-0 left-0 h-[3px] bg-[#ff0] transition-all duration-300 ${
        activeTab === tab ? "w-full" : "w-0"
      }`}
    ></div>

  </button>
))}

</div>


      {/* Records */}

      <div className="p-4 space-y-4">

        {records.map((item, index) => (

          <div
            key={index}
            className="bg-[rgba(0,0,0,0.35)] rounded-xl p-4 text-white"
          >

            <div className="flex justify-between text-sm">

              <div>

                <p>L202603091258086045758406</p>

                <p className="text-[#ff0] font-bold text-lg mt-1">
                  +0.1500
                </p>

              </div>

              <div className="text-right text-xs">

                <p>mission accomplished</p>

                <p className="mt-1">
                  2026-03-09 12:58:08
                </p>

              </div>

            </div>

          </div>

        ))}

        {/* No Data */}

        <p className="text-center text-gray-600 text-sm pt-6">
          No more data
        </p>

      </div>

    </div>
  );
};

export default FinancialRecord;