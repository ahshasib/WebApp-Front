import React from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const last30Days = [
  "03-13","03-12","03-11","03-10","03-09","03-08","03-07","03-06","03-05","03-04",
  "03-03","03-02","03-01","02-28","02-27","02-26","02-25","02-24","02-23","02-22",
  "02-21","02-20","02-19","02-18","02-17","02-16","02-15","02-14","02-13","02-12"
];

function DailyStatement() {
    const navigate = useNavigate();
  return (
 <div>
       <div className="min-h-screen bg-white">

{/* Title */}
<div className="text-center py-3 text-lg font-medium">
  

  <button
          onClick={() => navigate(-1)}
          className="absolute left-4"
        >
          <FaArrowLeft />
        </button>

        <h1 className="font-medium">Daily statement</h1>
</div>

{/* Top Card */}
<div className="bg-[#9eb8c2] px-3 py-4">

  <div className="bg-white rounded-2xl shadow p-6 text-center">

    {/* Total Revenue */}
    <p className="text-3xl text-yellow-500 font-bold">0</p>
    <p className="text-gray-500 text-sm mb-4">Total revenue</p>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 gap-6 text-center">

      <div>
        <p className="text-xl text-gray-600">0</p>
        <p className="text-sm text-gray-500">
          My mission(order)
        </p>
      </div>

      <div>
        <p className="text-xl text-gray-600">0</p>
        <p className="text-sm text-gray-500">
          my task income(USDT)
        </p>
      </div>

      <div>
        <p className="text-xl text-gray-600">0</p>
        <p className="text-sm text-gray-500">
          Tasks completed by subordinates(order)
        </p>
      </div>

      <div>
        <p className="text-xl text-gray-600">0</p>
        <p className="text-sm text-gray-500">
          Subordinate task income(USDT)
        </p>
      </div>

    </div>
  </div>
</div>

{/* Last 30 Days */}
<div className="px-3 mt-4">

  <p className="font-semibold mb-2">Last 30 days</p>

  {/* Table Header */}
  <div className="grid grid-cols-5 bg-gray-200 text-gray-500 text-sm font-bold py-3 px-2 rounded-t">
    <span>Date</span>
    <span className="text-center">Quantity</span>
    <span className="text-center">Task</span>
    <span className="text-center">Subordinate</span>
    <span className="text-right">Consumption</span>
  </div>

  {/* Table Rows */}
  <div className="bg-white">

    {last30Days.map((date, index) => (
      <div
        key={index}
        className="grid grid-cols-5 text-sm py-3 px-2 "
      >
        <span>{date}</span>
        <span className="text-center">0</span>
        <span className="text-center">0</span>
        <span className="text-center">0</span>
        <span className="text-right">0</span>
      </div>
    ))}

  </div>
</div>


</div>
<div className="p-3 bg-transparent">

</div>
 </div>
  );
}

export default DailyStatement;