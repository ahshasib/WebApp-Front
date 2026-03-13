import React, { useState } from "react";
import { FaTimes, FaArrowLeft } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";

const data = [
  {
    title: "Employee Work and Cash Withdrawal Schedule",
    img: "/48.jpg",
  },
  {
    title: "ASM Office Position Salary Manual",
    img: "/63.jpg",
  },
  {
    title: "Recruitment Specialist Job Description",
    img: "/41.jpg",
  },
];

const EmployeeHandbook = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Navbar */}
      <div className="flex items-center justify-center relative bg-white py-3 ">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4"
        >
          <FaArrowLeft />
        </button>

        <h1 className="font-medium">Employee Handbook</h1>
      </div>

      {/* List */}
      <div>

        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveItem(item)}
            className="bg-white p-5 cursor-pointer font-bold flex items-center justify-between "
          >
            <p>{item.title}</p>
            <MdKeyboardArrowRight />
          </div>
        ))}

      </div>


      {/* Image Overlay */}

      <div
        className={`fixed inset-0 bg-black/70 flex items-end justify-center
        transition-all duration-500
        ${activeItem ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >

        <div
          className={`w-full h-full bg-white flex flex-col
          transform transition-transform duration-500
          ${activeItem ? "translate-y-0" : "translate-y-full"}`}
        >

          {/* Image Header */}
          <div className="relative flex items-center justify-center p-4">

  <h2 className="font-medium text-sm text-center">
    {activeItem?.title}
  </h2>

  <button
    onClick={() => setActiveItem(null)}
    className="absolute right-4 text-gray-600 text-xl"
  >
    <FaTimes />
  </button>

</div>
          {/* Image */}
          {activeItem && (
            <img
              src={activeItem.img}
              alt="handbook"
              className="w-full h-full object-contain"
            />
          )}

        </div>

      </div>

    </div>
  );
};

export default EmployeeHandbook;