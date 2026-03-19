import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export default function Login() {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        phone,
        password
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      alert("Login success ✅");
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="flex items-center justify-center max-w-2xl mx-auto"
      
    >

      <div className="bg-cover min-h-screen w-full" 
      style={{ backgroundImage: "url('/loginbg.png')" }}>
      <div className="w-[90%] mx-auto space-y-4">

     <div className="w-[90%] mx-auto">
     <img src="logo-en.png" className="w-36 mx-auto mt-12" alt="" />
     </div>

<input
  onChange={(e) => setPhone(e.target.value)}
  placeholder="Phone Number"
  className="w-full p-3 rounded-lg bg-white/80"
/>

<input
  type="password"
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"
  className="w-full p-3 rounded-lg bg-white/80"
/>

<button
  onClick={handleLogin}
  className="w-full py-3 rounded-full bg-[#51bef6] text-white"
>
  Login
</button>
<Link
  to="/register"
  className="block text-center w-full py-3 rounded-full bg-white text-black"
>
  Register Now
</Link>

</div>
      </div>
    </div>
  );
}