import React from "react";
import { useNavigate } from "react-router";

const buttons = [
  { img: "/11.png", title: "Perfil", path: "/perfil" },
  { img: "/22.png", title: "Video", path: "/videotutoria" },
  { img: "/33.png", title: "Recargar", path: "/recargar" },
  { img: "/44.png", title: "Retirar", path: "/retirar" },
  { img: "/55.png", title: "VIP", path: "/vip" },
  { img: "/66.png", title: "Música", path: "asmxmusic.com" },
  { img: "/77.png", title: "Manual", path: "/manual" },
  { img: "/88.png", title: "Invitar", path: "/invitar" },
];

const FunctionButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-6 px-6 mt-6 text-center">
      {buttons.map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(item.path)}
          className="flex flex-col items-center active:scale-95 transition"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-11 h-11 object-contain"
          />

          <p className="text-xs mt-1">{item.title}</p>
        </button>
      ))}
    </div>
  );
};

export default FunctionButtons;