import React from "react";

const vipData = [
  {
    level: "Intern",
    price: "0",
    order: "USDT 0.1500",
    daily: "5",
    icon: "/S0.png",
  },
  {
    level: "S1",
    price: "30",
    order: "USDT 0.2000",
    daily: "5",
    icon: "/T1.png",
  },
  {
    level: "S2",
    price: "120",
    order: "USDT 0.4100",
    daily: "10",
    icon: "/T2.png",
  },
  {
    level: "S3",
    price: "420",
    order: "USDT 0.7500",
    daily: "20",
    icon: "/T3.png",
  },
  {
    level: "S4",
    price: "1260",
    order: "USDT 1.1200",
    daily: "40",
    icon: "/T4.png",
  },
  {
    level: "S4",
    price: "1260",
    order: "USDT 1.1200",
    daily: "40",
    icon: "/T5.png",
  },
  {
    level: "S4",
    price: "1260",
    order: "USDT 1.1200",
    daily: "40",
    icon: "/T6.png",
  },
  {
    level: "S4",
    price: "1260",
    order: "USDT 1.1200",
    daily: "40",
    icon: "/T7.png",
  },
];

function Vip() {
  return (
    <div className="min-h-screen p-4 space-y-4">

      {vipData.map((vip, index) => (
        <div
        key={index}
        className="relative rounded px-4 pt-6 h-[17vh] flex justify-between  overflow-hidden shadow-sm bg-cover bg-center"
        style={{
          backgroundImage: "url('/brain.jpg')"
        }}
      >
   

          {/* Left Section */}
          <div className="flex  space-x-4 relative">

          <div className="md:pr-10">
          <p className="text-xl font-bold absolute bottom-0 py-2">
                {vip.price}
              </p>
          </div>

            <div className="text-center">
              <img
                src={vip.icon}
                alt="vip"
                className="w-12 h-12 mx-auto mb-1"
              />

              <p className="font-bold text-lg">{vip.level}</p>

              
            </div>

            <div className="text-sm ml-4">
              <p className="font-semibold">Por orden</p>
              <p className="font-bold">{vip.order}</p>

              <p className="mt-1 font-semibold">Diarios:</p>
              <p className="font-bold">{vip.daily}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end">

            {vip.level !== "Intern" && (
              <button
              className="absolute bottom-6 right-6 text-white px-4 py-1 rounded-full font-semibold shadow"
              style={{
                background: "linear-gradient(270deg,#1296db,#04befe)"
              }}
            >
              Únete ahora
            </button>
            )}
          </div>
        </div>
      ))}

    </div>
  );
}

export default Vip;