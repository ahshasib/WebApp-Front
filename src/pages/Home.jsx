import React, { useEffect, useRef } from "react";
import {
  FaHome,
  FaPlay,
  FaWallet,
  FaMoneyBill,
  FaCrown,
  FaMusic,
  FaBook,
  FaUsers,
  FaBell,
  FaUser,
  FaChartLine,
} from "react-icons/fa";
import Slider from "../component/HomeSlider";
import FunctionButtons from "../component/HomeFunctionButton";
import BottomNav from "../component/BottomNav";

const Home = () => {
  const reviewRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (reviewRef.current) {
        reviewRef.current.scrollBy({ top: -1 });
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full mx-auto min-h-screen relative">

{/* Top Navbar */}
<div className="flex items-center justify-between px-4 py-2 bg-slate-400 text-black">
  <div className="text-green-700 text-2xl"><img className="w-8" src="lang.png" alt="" /></div>
  <div className="font-bold">ASM</div>
  <FaBell className="text-xl" />
</div>

{/* Banner */}
<div >
  <Slider></Slider>
</div>

{/* Announcement */}
<div className="mx-3 mt-3 bg-linear-120 rounded-xl p-2 shadow-md">
  <div
    ref={reviewRef}
    className="h-[6vh] overflow-hidden text-sm text-gray-700 flex items-center gap-4"
  >
    <img className="w-8 h-auto" src="home_notice.png" alt="" />
    <div className="space-y-2 ">
      
      <p className="text-black"> Felicitaciones ****6231 recibió 6UFelicitaciones ****6231 recibió 6U</p>
    </div>
  </div>
</div>

{/* Function Buttons */}
<div >

<FunctionButtons />
</div>

{/* Member List */}
<div className="px-4 mt-6 pb-20">
  <h2 className="text-lg font-semibold mb-3">Lista de miembros</h2>

  <div className="space-y-4">

    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          className="w-8"
        />
        <div>
          <p className="text-sm">Felicidades ****8347</p>
          <p className="text-xs text-blue-500">
            180 listados completados hoy
          </p>
        </div>
      </div>
      <p className="text-blue-500 font-semibold">2106 USDT</p>
    </div>

    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968520.png"
          className="w-8"
        />
        <div>
          <p className="text-sm">Felicidades ****2086</p>
          <p className="text-xs text-blue-500">
            220 listados completados hoy
          </p>
        </div>
      </div>
      <p className="text-blue-500 font-semibold">3146 USDT</p>
    </div>

    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          className="w-8"
        />
        <div>
          <p className="text-sm">Felicidades ****8347</p>
          <p className="text-xs text-blue-500">
            180 listados completados hoy
          </p>
        </div>
      </div>
      <p className="text-blue-500 font-semibold">2106 USDT</p>
    </div>

  </div>
</div>

{/* Bottom Navigation */}
<BottomNav></BottomNav>

</div>
    </div>
  );
};

export default Home;