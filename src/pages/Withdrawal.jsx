import React, { useState } from "react";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const Withdrawal = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");

  const amounts = [1.5, 5, 20, 50, 300, 900, 5000, 10000];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="flex items-center justify-center relative bg-white py-3">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4"
        >
          <FaArrowLeft />
        </button>

        <h1 className="font-medium">Withdrawal</h1>
      </div>


      <div className="p-4 space-y-4">

        {/* Wallet Balance */}
        <div className="bg-white rounded-xl p-4  text-md font-semibold">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>Main Wallet:</span>
            <span>0.0000</span>
          </div>

          <div className="flex justify-between pt-2">
            <span>Commission Wallet:</span>
            <span>1.0500</span>
          </div>
        </div>


        {/* Wallet Type */}
        <div className="bg-white rounded-xl p-4 ">

          <div className="flex justify-between items-center border-b border-gray-200 pb-3 text-md">
            <span>Wallet Type</span>

            <div className="flex items-center gap-2 text-gray-600">
              Commission Wallet
              <FaChevronRight className="text-xs"/>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 text-sm">
            <span>Withdrawal method</span>

            <FaChevronRight className="text-xs text-gray-600"/>
          </div>

        </div>


        {/* Withdrawal Amount */}
        <div className="bg-white rounded-xl p-4">

          <p className="text-md text-gray-600 mb-3">
            Withdrawal amount
          </p>

          <div className="grid grid-cols-4 gap-3">

            {amounts.map((item, index) => (
              <button
                key={index}
                onClick={() => setAmount(item)}
                className={`border border-gray-200 rounded-lg py-2 text-sm
                ${
                  amount === item
                    ? "bg-blue-500 text-white"
                    : "bg-gray-50"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>


        {/* Fund Password */}
        <div className="bg-white rounded-xl p-4 ">

          <div className="flex justify-between items-center border-b border-gray-200 pb-2 text-sm">

            <span>Fund password</span>

            <input
              type="password"
              placeholder="Please input fund password"
              className="text-right outline-none text-gray-900"
            />

          </div>

        </div>


        {/* Submit Button */}

        <button className="w-full bg-sky-500 text-white py-3 rounded">
          Submit
        </button>

      </div>

    </div>
  );
};

export default Withdrawal;