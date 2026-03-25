import React from 'react'
import { NavLink } from 'react-router';
import { BiSolidHome } from "react-icons/bi";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { RiVipDiamondFill } from "react-icons/ri";
import { BsDatabaseFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full max-w-2xl bg-white flex justify-around py-3">

    <NavLink
      to="/"
      className={({ isActive }) =>
        `flex flex-col items-center ${isActive ? "text-gray-500" : "text-green-800"}`
      }
    >
      <BiSolidHome className="text-xl" />
      <p className="text-sm text-black">Home</p>
    </NavLink>
  
    <NavLink
      to="/taskArea"
      className={({ isActive }) =>
        `flex flex-col items-center ${isActive ? "text-gray-500"  : "text-green-800"}`
      }
    >
      <BsFillFileEarmarkTextFill className="text-xl" />
      <p className="text-sm text-black">Task Area</p>
    </NavLink>
  
    <NavLink
      to="/vip"
      className={({ isActive }) =>
        `flex flex-col items-center ${isActive ? "text-gray-500"  : "text-green-800"}`
      }
    >
      <RiVipDiamondFill className="text-xl" />
      <p className="text-sm text-black">Join</p>
    </NavLink>
  
    <NavLink
      to="/profit"
      className={({ isActive }) =>
        `flex flex-col items-center ${isActive ? "text-gray-500" :  "text-green-800"}`
      }
    >
      <BsDatabaseFill className="text-xl" />
      <p className="text-sm text-black">Profit</p>
    </NavLink>
  
    <NavLink
      to="/user"
      className={({ isActive }) =>
        `flex flex-col items-center ${isActive ? "text-gray-500" :  "text-green-800" }`
      }
    >
      <MdManageAccounts className="text-2xl" />
      <p className="text-sm text-black">My</p>
    </NavLink>
  
  </div>
  )
}

export default BottomNav