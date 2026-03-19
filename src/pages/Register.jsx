import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    phone: "",
    password: "",
    confirmPassword: "",
    code: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/register", {
        phone: form.phone,
        password: form.password,
        confirmPassword: form.confirmPassword,
        invitationCode: form.code
      });

      alert(res.data.message);
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="max-w-2xl flex items-center justify-center mx-auto"
     
    >
<div className="bg-cover min-h-screen w-full" 
      style={{ backgroundImage: "url('/loginbg.png')" }}>
      <div className="w-[90%] mx-auto space-y-4">

      <div className="w-[90%] mx-auto">
     <img src="logo-en.png" className="w-36 mx-auto mt-12" alt="" />
     </div>


        <input
  name="phone"
  onChange={handleChange}
  placeholder="+880 Phone Number"
  className="w-full p-3 rounded-lg bg-white/80"
/>

<input
  type="password"
  name="password"
  onChange={handleChange}
  placeholder="Password"
  className="w-full p-3 rounded-lg bg-white/80"
/>

<input
  type="password"
  name="confirmPassword"
  onChange={handleChange}
  placeholder="Confirm Password"
  className="w-full p-3 rounded-lg bg-white/80"
/>

<input
  name="code"
  onChange={handleChange}
  placeholder="Invitation Code"
  className="w-full p-3 rounded-lg bg-white/80"
/>
        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-full bg-[#51bef6] font-semibold text-white"
        >
          Register now
        </button>
        <Link
  to=""
  className="block text-center w-full py-3 rounded-full bg-white text-black"
>
Have an account,download APP
</Link>

        <p className="text-white text-sm">
          Already have account?
          <span
            onClick={() => navigate("/login")}
            className="ml-2 underline cursor-pointer text-[#51bef6]"
          >
            Login
          </span>
        </p>

      </div>
      </div>
    </div>
  );
}