import React, { useRef } from "react";
import { LuckyWheel } from "@lucky-canvas/react";

export default function Lucky() {

  const wheelRef = useRef();

  const prizes = [
    { background:"#fff", fonts:[{ text:"1 USDT", top:"15%", fontSize:"13px"}], imgs:[{src:"/gift1.png", width:"28px", top:"40%"}]},
    { background:"#ffe58a", fonts:[{ text:"7 USDT", top:"15%", fontSize:"13px"}], imgs:[{src:"/gift2.png", width:"30px", top:"40%"}]},
    { background:"#fff", fonts:[{ text:"17 USDT", top:"15%", fontSize:"13px"}], imgs:[{src:"/gift3.png", width:"30px", top:"40%"}]},
    { background:"#ffe58a", fonts:[{ text:"37 USDT", top:"15%", fontSize:"13px"}], imgs:[{src:"/gift4.png", width:"30px", top:"40%"}]},
    { background:"#fff", fonts:[{ text:"57 USDT", top:"15%", fontSize:"13px"}], imgs:[{src:"/gift5.png", width:"30px", top:"40%"}]},
    { background:"#ffe58a", fonts:[{ text:"77 USDT", top:"15%", fontSize:"13px"}], imgs:[{src:"/gift1.png", width:"28px", top:"40%"}]},
    { background:"#fff", fonts:[{ text:"177 USDT", top:"15%", fontSize:"13px"}], imgs:[{src:"/gift2.png", width:"30px", top:"40%"}]},
    { background:"#ffe58a", fonts:[{ text:"777 USDT", top:"15%", fontSize:"13px"}], imgs:[{src:"/gift5.png", width:"30px", top:"40%"}]},
  ];

  const startSpin = () => {
    const index = Math.floor(Math.random() * prizes.length);
    wheelRef.current.play();

    setTimeout(() => {
      wheelRef.current.stop(index);
    }, 3000);
  };

  const users = [
    { name:"****9225", amount:"37 USDT", img:"/amazon.png" },
    { name:"****5207", amount:"177 USDT", img:"/insta.png" },
    { name:"****5951", amount:"77 USDT", img:"/insta.png" },
    { name:"****4521", amount:"77 USDT", img:"/logo.png" },
    { name:"****1429", amount:"777 USDT", img:"/logo.png" },
  ];

  return (

<div className="min-h-screen bg-gray-100">

{/* ---------- NAVBAR ---------- */}

<div className="flex items-center justify-between p-3 bg-white shadow">

<button className="font-semibold">
← Back
</button>

<h1 className="font-semibold text-lg">
Turntable of Luck
</h1>

<div className="text-sm text-gray-500">
Gold:0
</div>

</div>


{/* ---------- WHEEL SECTION WITH BACKGROUND IMAGE ---------- */}

<div className="relative flex justify-center py-8 w-full">

<img
  src="/box_bg.jpg"
  className="absolute inset-0 w-full h-full object-cover"
/>

<div className="relative z-10">

<LuckyWheel
ref={wheelRef}
width="300px"
height="300px"

blocks={[
{ padding: "10px", background: "#f7d358" },
{ padding: "6px", background: "#ffd700" }
]}

prizes={prizes}

buttons={[
{
radius: "25px",
background: "#111",
pointer: true,
imgs:[
{
src:"/lucky.png",
width:"30px",
top:"-60%",
clip:true
}
]
}
]}

onStart={startSpin}
/>

</div>

</div>


{/* ---------- WINNING RECORD ---------- */}

<div className="bg-white mt-8">

<h2 className="font-semibold mb-3 py-3">
Winning User Record
</h2>

<div className="h-80 overflow-hidden p-3">

<div className="animate-scroll">

{users.concat(users).map((u,i)=>(

<div
key={i}
className="flex items-center justify-between py-2 border-b border-gray-100"
>

<div className="flex items-center gap-2">

<img
src={u.img}
className="w-8 h-8 rounded-full"
/>

<div>

<p className="text-sm">
Congratulations {u.name}
</p>

<p className="text-xs text-gray-400">
Get prizes
</p>

</div>

</div>

<p className="text-cyan-500 font-semibold">
{u.amount}
</p>

</div>

))}

</div>

</div>

</div>

</div>

  );
}
