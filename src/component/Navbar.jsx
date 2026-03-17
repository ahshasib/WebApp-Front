import {
    Mail,
    MessageSquare,
    CheckCircle,
    Calendar,
    Star,
    Search,
    Bell,
    Maximize
  } from "lucide-react";
  
  export default function Navbar() {
    return (
      <div className="w-full h-14 bg-white shadow flex items-center justify-between px-6">
  
        {/* LEFT ICONS */}
  
        <div className="flex items-center gap-5 text-gray-600">
  
          <Mail size={18} className="cursor-pointer hover:text-black" />
  
          <MessageSquare size={18} className="cursor-pointer hover:text-black" />
  
          <CheckCircle size={18} className="cursor-pointer hover:text-black" />
  
          <Calendar size={18} className="cursor-pointer hover:text-black" />
  
          <Star size={18} className="cursor-pointer hover:text-yellow-500" />
  
        </div>
  
        {/* RIGHT SECTION */}
  
        <div className="flex items-center gap-6">
  
          {/* LANGUAGE */}
  
          <div className="flex items-center gap-2 text-sm cursor-pointer">
            <img
              src="https://flagcdn.com/us.svg"
              className="w-4"
            />
            English
          </div>
  
          {/* FULLSCREEN */}
  
          <Maximize size={18} className="cursor-pointer text-gray-600" />
  
          {/* SEARCH */}
  
          <Search size={18} className="cursor-pointer text-gray-600" />
  
          {/* NOTIFICATION */}
  
          <div className="relative cursor-pointer">
  
            <Bell size={18} className="text-gray-600" />
  
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              5
            </span>
  
          </div>
  
          {/* USER */}
  
          <div className="flex items-center gap-2 cursor-pointer">
  
            <span className="text-sm text-gray-700">
              Md Admin
            </span>
  
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
  
          </div>
  
        </div>
      </div>
    );
  }