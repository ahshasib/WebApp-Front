import React from "react";
import { useNavigate } from "react-router";
const menuItems = [
  { name: "Invite friends", img: "/888.png", path: "/invite" },
  { name: "Personal information", img: "/222.png" },
  { name: "Recharge", img: "/333.png" },
  { name: "Withdrawal", img: "/444.png" },
  { name: "Financial Records", img: "/555.png" },
  { name: "Daily statement", img: "/666.png" },
  { name: "Team Reports", img: "/777.png" },
  { name: "Employee Handbook", img: "/111.png" },
  { name: "Download APP", img: "/1012.png" },
  { name: "Lucky Roulette", img: "/luckys.png" },
  { name: "Fondo de riqueza", img: "/1011.png" },
  { name: "Mystery Box", img: "/BOX.png" },
  { name: "Points Store", img: "/shop.png" },
  { name: "Exit login", img: "/1013.png" },
];


const User = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20">

      {/* Profile */}
      <div className="text-center pt-6">
        <img
          src="/icons/profile.png"
          alt="profile"
          className="w-16 h-16 rounded-full mx-auto"
        />
        <h2 className="font-bold mt-2 text-lg">12345678900</h2>
      </div>

      {/* Wallet Info */}
      <div className="px-4 mt-6">
        <p className="text-sm text-gray-700">Main Wallet(USDT)</p>
        <div className="flex justify-between items-center">
        <p className="text-3xl text-blue-500 font-bold">0</p>
        <p className="text-2xl text-blue-500 font-bold">Intern</p>
        </div>

        <p className="text-sm text-gray-700 mt-3">Commission Wallet(USDT)</p>
        <p className="text-3xl text-blue-500 font-bold">1.0500</p>
      </div>

      <p className="text-center text-xs mt-3">
        Effective date:2026-03-06~2026-03-09
      </p>

      {/* Earnings Cards */}
      <div className="grid grid-cols-2 gap-3 px-4 mt-4 font-semibold">

        <div className="bg-gray-500/40 rounded-xl p-3 text-center text-white">
          <p className="text-sm">Yesterday's earnings</p>
          <p className="text-lg">0.00</p>
        </div>

        <div className="bg-gray-500/40 rounded-xl p-3 text-center text-white">
          <p className="text-sm">Today's earnings</p>
          <p className="text-lg">0.00</p>
        </div>

        <div className="bg-gray-500/40 rounded-xl p-3 text-center text-white">
          <p className="text-sm">This month's earnings</p>
          <p className="text-lg">1.05</p>
        </div>

        <div className="bg-gray-500/40 rounded-xl p-3 text-center text-white">
          <p className="text-sm">This week's earnings</p>
          <p className="text-lg">0.6</p>
        </div>

      </div>

      {/* Second Row Cards */}
      <div className="grid grid-cols-3 gap-3 px-4 mt-3 font-semibold">

        <div className="bg-gray-500/40 rounded-xl p-3 text-center text-white">
          <p className="text-xs">Total revenue</p>
          <p>1.05</p>
        </div>

        <div className="bg-gray-500/40 rounded-xl p-3 text-center text-white">
          <p className="text-xs">Subordinate task commission</p>
          <p>0.00</p>
        </div>

        <div className="bg-gray-500/40 rounded-xl p-3 text-center text-white">
          <p className="text-xs">Referral rebate</p>
          <p>0.00</p>
        </div>

      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-4 gap-6 px-6 mt-8">

{menuItems.map((item, index) => (
  <div
    key={index}
    onClick={() => item.path && navigate(item.path)}
    className="flex flex-col items-center text-center cursor-pointer"
  >
    <img
      src={item.img}
      alt={item.name}
      className="w-12 h-11 mb-1"
    />

    <p className="text-sm">{item.name}</p>
  </div>
))}

</div>

    </div>
  );
};

export default User;