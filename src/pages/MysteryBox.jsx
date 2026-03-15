import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function MysteryBox() {

const navigate = useNavigate()
const sliderRef = useRef(null)

useEffect(()=>{
const interval = setInterval(()=>{
if(sliderRef.current){
sliderRef.current.scrollLeft += 200
}
},3000)

return ()=> clearInterval(interval)

},[])

return (

<div className="relative w-full min-h-screen overflow-hidden text-white">

{/* Background GIF */}

<div
className="absolute inset-0 mt-25 z-10"
style={{
backgroundImage:"url('/1.gif')",
backgroundSize:"cover",
}}
/>


{/* Navbar */}

<div className="relative z-10 w-full h-screen">
<div className="flex items-center gap-3 p-4 bg-white backdrop-blur-md text-black">

<button onClick={()=>navigate(-1)}>
<ArrowLeft size={28}/>
</button>

<h1 className="text-xl font-bold">
Mystery Box
</h1>

</div>

{/* Marquee */}

<div className=" py-2 overflow-hidden"
 style={{
    backgroundImage:"url('/noticbg.png')",
  
    }}
 >

<div className="animate-marquee whitespace-nowrap">

🔥 Win Laptop, TV, Fridge and more amazing prizes in Mystery Box 🔥

</div>

</div>

{/* Floating Product Section */}

<div className="flex justify-around mt-10">

{/* Laptop */}

<div className="relative">

<img
src="/ring.png"
className="absolute w-24 animate-spin-slow ring-rotate animate-float"
/>

<img
src="/laptop.png"
className="w-16 relative animate-float"
/>

</div>

{/* TV */}

<div className="relative">

<img
src="/ring.png"
className="absolute w-24 animate-spin-slow ring-rotate animate-float"
/>

<img
src="/tv.png"
className="w-16 relative animate-float"
/>

</div>

{/* Fridge */}

<div className="relative">

<img
src="/ring.png"
className="absolute w-24 animate-spin-slow ring-rotate animate-float"
/>

<img
src="/fridge.png"
className="w-9 relative animate-float"
/>

</div>

</div>

{/* Center Box */}

{/* <div className="flex justify-center mt-16">

<img
src="/mystery-box.png"
className="w-64"
/>

</div> */}

{/* Slider Section */}

<div
className="w-full absolute bottom-10 py-6"
style={{
backgroundImage:"url('/txtbox1.png')",
backgroundSize:"100% 100%",
backgroundRepeat:"no-repeat"
}}
>

<div className="flex justify-center w-full items-center gap-10 -mt-10">

<button
className="w-34 h-12 flex justify-center text-white font-semibold"
style={{
backgroundImage:"url('/botton.png')",
backgroundSize:"100% 100%",
backgroundPosition:"center",
backgroundRepeat:"no-repeat"
}}
>
Open 1 time
</button>

<button
className="w-34 h-12 flex  justify-center text-white font-semibold"
style={{
backgroundImage:"url('/botton.png')",
backgroundSize:"100% 100%",
backgroundPosition:"center",
backgroundRepeat:"no-repeat"
}}
>
Open 5 time
</button>

</div>
<h2 className="text-center text-lg my-6 ">
----- Prize List -----
</h2>

<div className="flex items-center justify-center gap-4">

<button
onClick={()=>sliderRef.current.scrollLeft -= 200}
className="text-3xl"
>
❮
</button>

<div
ref={sliderRef}
className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-4"
>

{["p1.png","p2.png","p3.png","p4.png","p5.png","p6.png","p7.png","p8.png","p9.png","p10.png","p11.png","p12.png","p13.png","p14.png"].map((img)=>(
<div
key={img}
className="min-w-[80px] h-[80px] flex items-center justify-center relative"
>

{/* Rotating Ring */}

<div
className="absolute w-full h-full ring-rotate"
style={{
backgroundImage:"url('/ring.png')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
></div>

{/* Static Product Image */}

<img
src={`${img}`}
className="w-12 relative z-10"
/>

</div>
))}

</div>

<button
onClick={()=>sliderRef.current.scrollLeft += 200}
className="text-3xl"
>
❯
</button>

</div>


<div className="flex justify-center items-center gap-8 my-2">
    <div className="px-5 text-center text-sm text-white bg-[#290833] rounded-full w-[45%]"><p>Number of viewers: <br />
    <span className="text-yellow-400">136520</span> People</p></div>
    <div className="px-5 text-center text-sm text-white bg-[#290833] rounded-full w-[45%]"><p>Number of viewers: <br />
    <span className="text-yellow-400">136520</span> People</p></div>
</div>


</div>
</div>

</div>

)
}