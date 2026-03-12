import React from "react";

const menuItems = [
  { name: "Invite friends", img: "/icons/invite.png" },
  { name: "Personal information", img: "/icons/profile.png" },
  { name: "Recharge", img: "/icons/recharge.png" },
  { name: "Withdrawal", img: "/icons/withdraw.png" },
  { name: "Financial Records", img: "/icons/records.png" },
  { name: "Daily statement", img: "/icons/daily.png" },
  { name: "Team Reports", img: "/icons/team.png" },
  { name: "Employee Handbook", img: "/icons/book.png" },
  { name: "Download APP", img: "/icons/download.png" },
  { name: "Lucky Roulette", img: "/icons/roulette.png" },
  { name: "Fondo de riqueza", img: "/icons/money.png" },
  { name: "Mystery Box", img: "/icons/mystery.png" },
  { name: "Points Store", img: "/icons/store.png" },
  { name: "Exit login", img: "/icons/logout.png" },
];

const User = () => {
  return (
    <div className="min-h-screen  pb-20">

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
        <p className="text-3xl text-blue-500 font-bold">0</p>

        <p className="text-sm text-gray-700 mt-3">Commission Wallet(USDT)</p>
        <p className="text-3xl text-blue-500 font-bold">1.0500</p>
      </div>

      <p className="text-center text-xs mt-3">
        Effective date:2026-03-06~2026-03-09
      </p>

      {/* Earnings Cards */}
      <div className="grid grid-cols-2 gap-3 px-4 mt-4">

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
      <div className="grid grid-cols-3 gap-3 px-4 mt-3">

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
          <div key={index} className="flex flex-col items-center text-center">

            <img
              src={item.img}
              alt={item.name}
              className="w-10 h-10 mb-1"
            />

            <p className="text-xs">{item.name}</p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default User;