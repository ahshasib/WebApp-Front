import { useEffect, useState } from "react";
import axios from "axios";

export default function PersonalInfo() {

  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showFundForm, setShowFundForm] = useState(false);

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:3000/api/user", {
        headers: {
            Authorization: `Bearer ${token}`
          }
    })
    .then(res => setUser(res.data));
  }, []);

  const updateLoginPassword = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/update-password",
        { oldPassword: oldPass, newPassword: newPass },
        { headers: {
            Authorization: `Bearer ${token}`
          } }
      );

      alert(res.data.message);
      setShowLoginForm(false);

    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const updateFundPassword = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/update-fund-password",
        { newPassword: newPass },
        { headers: {
            Authorization: `Bearer ${token}`
          } }
      );

      alert(res.data.message);
      setShowFundForm(false);

    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      <h2 className="text-center text-lg font-semibold mb-4">
        Personal information
      </h2>

      <div className="bg-white rounded-lg shadow p-4 space-y-4">

        <div className="flex justify-between">
          <span>Mobile number</span>
          <span>{user?.phone}</span>
        </div>

        <div className="flex justify-between">
          <span>Name</span>
          <span>Click Settings</span>
        </div>

        <div className="flex justify-between">
          <span>Wallet address</span>
          <span>Click Settings</span>
        </div>

        {/* LOGIN PASSWORD */}
        <div className="flex justify-between">
          <span>Login password</span>
          <button onClick={()=>setShowLoginForm(true)}>
            Click Settings
          </button>
        </div>

        {/* FUND PASSWORD */}
        <div className="flex justify-between">
          <span>Fund password</span>
          <button onClick={()=>setShowFundForm(true)}>
            Click Settings
          </button>
        </div>

      </div>

      {/* LOGIN PASSWORD FORM */}
      {showLoginForm && (
        <div className="bg-white p-4 mt-4 rounded shadow space-y-2">
          <input
            placeholder="Old password"
            onChange={(e)=>setOldPass(e.target.value)}
            className="w-full p-2 border"
          />
          <input
            placeholder="New password"
            onChange={(e)=>setNewPass(e.target.value)}
            className="w-full p-2 border"
          />

          <button
            onClick={updateLoginPassword}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Update
          </button>
        </div>
      )}

      {/* FUND PASSWORD FORM */}
      {showFundForm && (
        <div className="bg-white p-4 mt-4 rounded shadow space-y-2">
          <input
            placeholder="New fund password"
            onChange={(e)=>setNewPass(e.target.value)}
            className="w-full p-2 border"
          />

          <button
            onClick={updateFundPassword}
            className="bg-green-500 text-white px-4 py-2"
          >
            Update
          </button>
        </div>
      )}

      {/* LOGOUT */}
      <button
        onClick={()=>{
          localStorage.clear();
          window.location.href="/login";
        }}
        className="fixed bottom-0 left-0 w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
      >
        Exit login
      </button>

    </div>
  );
}