import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

<div className="w-full min-h-screen relative overflow-hidden text-white">

{/* Background GIF */}

<div
className="absolute inset-0 -z-10"
style={{
backgroundImage:"url('/bg.gif')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
/>

{/* Navbar */}

<div className="flex items-center gap-3 p-4 bg-black/30 backdrop-blur-md">

<button onClick={()=>navigate(-1)}>
<ArrowLeft size={28}/>
</button>

<h1 className="text-xl font-bold">
Mystery Box
</h1>

</div>

{/* Marquee */}

<div className="bg-purple-700 py-2 overflow-hidden">

<div className="animate-marquee whitespace-nowrap">

🔥 Win Laptop, TV, Fridge and more amazing prizes in Mystery Box 🔥

</div>

</div>

{/* Floating Product Section */}

<div className="flex justify-center gap-20 mt-10">

<img
src="/laptop.png"
className="w-28 animate-float"
/>

<img
src="/tv.png"
className="w-28 animate-float2"
/>

<img
src="/fridge.png"
className="w-28 animate-float"
/>

</div>

{/* Center Box */}

<div className="flex justify-center mt-16">

<img
src="/mystery-box.png"
className="w-64"
/>

</div>

{/* Slider Section */}

<div className="mt-20 px-4">

<h2 className="text-center text-lg mb-6">
Prize List
</h2>

<div className="flex items-center">

<button
onClick={()=>sliderRef.current.scrollLeft -= 300}
className="px-3 text-2xl"
>
◀
</button>

<div
ref={sliderRef}
className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
>

{[1,2,3,4,5,6].map((item)=>(
<img
key={item}
src={`/products/${item}.png`}
className="w-24"
/>
))}

</div>

<button
onClick={()=>sliderRef.current.scrollLeft += 300}
className="px-3 text-2xl"
>
▶
</button>

</div>

</div>

</div>

)
}