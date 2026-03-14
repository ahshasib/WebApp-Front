import React from "react";

export default function PointStore() {

  const items = [
    {
      img: "/roulette.png",
      title: "1 Lucky Roulette",
      value: 0,
      points: 2
    },
    {
      img: "/laptop.png",
      title: "A laptop with a value of 350 USDT",
      value: 350,
      points: 160
    },
    {
      img: "/tv.png",
      title: "An LCD TV with a value of 250 USDT",
      value: 250,
      points: 130
    },
    {
      img: "/washing.png",
      title: "A washing machine with a value of 230 USDT",
      value: 230,
      points: 124
    },
    {
      img: "/ac.png",
      title: "An air conditioner with a value of 210 USDT",
      value: 210,
      points: 120
    },
    {
      img: "/phone.png",
      title: "A smartphone with a value of 200 USDT",
      value: 200,
      points: 110
    },
    {
      img: "/vacuum.png",
      title: "A vacuum cleaner with a value of 170 USDT",
      value: 170,
      points: 100
    },
    {
      img: "/microwave.png",
      title: "A microwave oven with a value of 150 USDT",
      value: 150,
      points: 90
    },
    {
      img: "/induction.png",
      title: "An induction cooker with a value of 130 USDT",
      value: 130,
      points: 83
    },
    {
        img: "/induction.png",
        title: "An induction cooker with a value of 130 USDT",
        value: 130,
        points: 83
      },
      {
        img: "/induction.png",
        title: "An induction cooker with a value of 130 USDT",
        value: 130,
        points: 83
      },
      {
        img: "/induction.png",
        title: "An induction cooker with a value of 130 USDT",
        value: 130,
        points: 83
      }
  ];

  return (

    <div className="min-h-screen bg-gray-200">

      {/* HEADER */}
      <div className="text-center py-3  shadow">
        <h1 className="text-lg font-medium">Points Store</h1>
      </div>

      {/* CURRENT POINTS */}
      <div className="px-4 py-4 bg-gray-200">

        <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-center text-white py-3 rounded-full font-semibold">
          Current points: <span className="text-red-500">0</span>
        </div>

      </div>

      {/* TABS */}
      <div className="flex justify-around bg-white border-b border-gray-300">

        <button className="py-3 border-b-2 border-black font-medium">
          Exchange Mall
        </button>

        <button className="py-3 text-gray-500">
          Exchange Record
        </button>

      </div>

      {/* ITEM LIST */}
      <div>

        {items.map((item, i) => (

          <div
            key={i}
            className="flex items-center justify-between p-3 border-b border-gray-300 bg-white"
          >

            {/* LEFT */}
            <div className="flex items-center gap-3">

              <img
                src={item.img}
                className="w-12 h-12 object-contain"
              />

              <div>

                <p className="text-sm font-medium">
                  {item.title}
                </p>

                <p className="text-xs text-gray-500">
                  Value: <span className="text-red-500">{item.value}</span>
                </p>

                <p className="text-xs text-gray-500">
                  Required points:{" "}
                  <span className="text-red-500">{item.points}</span>
                </p>

              </div>

            </div>

            {/* BUTTON */}
            <button className="bg-sky-400 text-white px-4 py-1 rounded-full text-sm">
              Redeem
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}
