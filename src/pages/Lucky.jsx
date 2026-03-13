import React, { useRef } from "react";
import { LuckyWheel } from "@lucky-canvas/react";

export default function Lucky() {

  const wheelRef = useRef();

  const prizes = [
    {
      fonts: [{ text: "1 USDT", top: "10%" }],
      imgs: [{ src: "/img/1.png", width: "40px", top: "35%" }]
    },
    {
      fonts: [{ text: "7 USDT", top: "10%" }],
      imgs: [{ src: "/img/2.png", width: "40px", top: "35%" }]
    },
    {
      fonts: [{ text: "17 USDT", top: "10%" }],
      imgs: [{ src: "/img/3.png", width: "40px", top: "35%" }]
    },
    {
      fonts: [{ text: "37 USDT", top: "10%" }],
      imgs: [{ src: "/img/4.png", width: "40px", top: "35%" }]
    },
    {
      fonts: [{ text: "57 USDT", top: "10%" }],
      imgs: [{ src: "/img/5.png", width: "40px", top: "35%" }]
    },
    {
      fonts: [{ text: "77 USDT", top: "10%" }],
      imgs: [{ src: "/img/6.png", width: "40px", top: "35%" }]
    },
    {
      fonts: [{ text: "177 USDT", top: "10%" }],
      imgs: [{ src: "/img/7.png", width: "40px", top: "35%" }]
    },
    {
      fonts: [{ text: "777 USDT", top: "10%" }],
      imgs: [{ src: "/img/8.png", width: "40px", top: "35%" }]
    }
  ];

  const startSpin = () => {

    const index = Math.floor(Math.random() * prizes.length);

    wheelRef.current.play();

    setTimeout(() => {
      wheelRef.current.stop(index);
    }, 3000);

  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-yellow-200 to-purple-400">

      <LuckyWheel
        ref={wheelRef}
        width="420px"
        height="420px"

        blocks={[
          { padding: "20px", background: "#ffd700" },
          { padding: "10px", background: "#ffea00" }
        ]}

        prizes={prizes}

        buttons={[
          {
            radius: "60px",
            background: "#111",
            fonts: [{ text: "A", fontSize: "30px", color: "#00ff9c" }]
          }
        ]}

      />

      <button
        onClick={startSpin}
        className="absolute bottom-20 px-6 py-3 bg-green-500 text-white rounded-lg"
      >
        Spin
      </button>

    </div>
  );
}