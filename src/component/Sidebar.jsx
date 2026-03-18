import { useState } from "react";
import { Link } from "react-router";

import {
  LayoutDashboard,
  RotateCcw,
  CreditCard,
  Share2,
  Wallet,
  ListTodo,
  Gift,
  Users,
  DollarSign,
  Package,
  Settings,
  ChevronDown
} from "lucide-react";

export default function Sidebar() {

  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="w-64 bg-white shadow-lg p-4 min-h-screen">

      <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

      <ul className="space-y-2 text-md">

        <li>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </li>

        <li>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
            <RotateCcw size={18} />
            Spins
          </Link>
        </li>

        <li>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
            <CreditCard size={18} />
            Credit Score
          </Link>
        </li>

        <li>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
            <Share2 size={18} />
            Share Task Submissions
          </Link>
        </li>

        <li>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
            <Wallet size={18} />
            PV Share Tasks
          </Link>
        </li>

        <li>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
            <DollarSign size={18} />
            Wealth Plans
          </Link>
        </li>

        <li>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
            <Users size={18} />
            User Investments
          </Link>
        </li>

        {/* TASK MENU */}

        <li>

          <button
            onClick={() => toggleMenu("tasks")}
            className="flex items-center justify-between w-full p-2 hover:bg-gray-200 rounded"
          >
            <span className="flex items-center gap-2">
              <ListTodo size={18} />
              Tasks
            </span>

            <ChevronDown
              size={18}
              className={`transition-transform ${
                activeMenu === "tasks" ? "rotate-180" : ""
              }`}
            />

          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeMenu === "tasks" ? "max-h-40" : "max-h-0"
            }`}
          >
            <ul className="ml-6 mt-2 space-y-1">

              <li>
                <Link className="block p-2 hover:bg-gray-200 rounded">
                  All Tasks
                </Link>
              </li>

              <li>
                <Link className="block p-2 hover:bg-gray-200 rounded">
                  Add Task
                </Link>
              </li>

            </ul>
          </div>

        </li>

        {/* BONUS */}

        <li>
          <Link className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
            <Gift size={18} />
            Bonus Code
          </Link>
        </li>

        <li className="text-gray-400 text-xs mt-5 mb-2">APPS</li>

        {/* CUSTOMER PAYMENTS */}

        <li> <Link to="/fund" className="block p-2 rounded hover:bg-gray-200"> Fund </Link> </li>
        <li> <Link to="/Customers" className="block p-2 rounded hover:bg-gray-200"> Manage Customers </Link> </li>
        <li> <Link to="/investRecord" className="block p-2 rounded hover:bg-gray-200"> Invest Record </Link> </li>

        <li>

          <button
            onClick={() => toggleMenu("payments")}
            className="flex items-center justify-between w-full p-2 hover:bg-gray-200 rounded"
          >
            <span className="flex items-center gap-2">
              <DollarSign size={18} />
              Customer Payments
            </span>

            <ChevronDown
              size={18}
              className={`transition-transform ${
                activeMenu === "payments" ? "rotate-180" : ""
              }`}
            />

          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeMenu === "payments" ? "max-h-40" : "max-h-0"
            }`}
          >
            <ul className="ml-6 mt-2 space-y-1">

              <li>
                <Link to={"/dashboard/pendingwithdraw"} className="block p-2 hover:bg-gray-200 rounded">
                  Pending Payment
                </Link>
              </li>

              <li>
                <Link className="block p-2 hover:bg-gray-200 rounded">
                  Approved Payment
                </Link>
              </li>

              <li>
                <Link className="block p-2 hover:bg-gray-200 rounded">
                  Reject Payment
                </Link>
              </li>

            </ul>
          </div>

        </li>

        {/* PACKAGES */}

        <li>

          <button
            onClick={() => toggleMenu("packages")}
            className="flex items-center justify-between w-full p-2 hover:bg-gray-200 rounded"
          >
            <span className="flex items-center gap-2">
              <Package size={18} />
              Packages
            </span>

            <ChevronDown
              size={18}
              className={`transition-transform ${
                activeMenu === "packages" ? "rotate-180" : ""
              }`}
            />

          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeMenu === "packages" ? "max-h-40" : "max-h-0"
            }`}
          >
            <ul className="ml-6 mt-2 space-y-1">

              <li>
                <Link className="block p-2 hover:bg-gray-200 rounded">
                  Manage Packages
                </Link>
              </li>

              <li>
                <Link className="block p-2 hover:bg-gray-200 rounded">
                  Add Package
                </Link>
              </li>

            </ul>
          </div>

        </li>

        {/* SETTINGS */}

        <li>

          <button
            onClick={() => toggleMenu("settings")}
            className="flex items-center justify-between w-full p-2 hover:bg-gray-200 rounded"
          >
            <span className="flex items-center gap-2">
              <Settings size={18} />
              Settings
            </span>

            <ChevronDown
              size={18}
              className={`transition-transform ${
                activeMenu === "settings" ? "rotate-180" : ""
              }`}
            />

          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeMenu === "settings" ? "max-h-40" : "max-h-0"
            }`}
          >
            <ul className="ml-6 mt-2 space-y-1">

              <li>
                <Link className="block p-2 hover:bg-gray-200 rounded">
                  Manage Methods
                </Link>
              </li>

              <li>
                <Link className="block p-2 hover:bg-gray-200 rounded">
                  Settings
                </Link>
              </li>

            </ul>
          </div>

        </li>

      </ul>

    </div>
  );
}