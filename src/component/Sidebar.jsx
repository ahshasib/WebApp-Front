import { useState } from "react";
import { Link } from "react-router";

export default function Sidebar() {

  const [taskOpen, setTaskOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen p-4">

      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <ul className="space-y-2">

        <li>
          <Link to="/" className="block p-2 hover:bg-gray-200 rounded">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/spins" className="block p-2 hover:bg-gray-200 rounded">
            Spins
          </Link>
        </li>

        <li>
          <Link to="/credit" className="block p-2 hover:bg-gray-200 rounded">
            Credit Score
          </Link>
        </li>

        {/* Tasks with Submenu */}

        <li>

          <button
            onClick={() => setTaskOpen(!taskOpen)}
            className="w-full flex justify-between p-2 hover:bg-gray-200 rounded"
          >
            Tasks
            <span>{taskOpen ? "▲" : "▼"}</span>
          </button>

          {taskOpen && (
            <ul className="ml-4 mt-2 space-y-1">
              <li>
                <Link to="/task1" className="block p-2 hover:bg-gray-200 rounded">
                  Task 1
                </Link>
              </li>

              <li>
                <Link to="/task2" className="block p-2 hover:bg-gray-200 rounded">
                  Task 2
                </Link>
              </li>
            </ul>
          )}

        </li>

        {/* Payments with submenu */}

        <li>

          <button
            onClick={() => setPaymentOpen(!paymentOpen)}
            className="w-full flex justify-between p-2 hover:bg-gray-200 rounded"
          >
            Customer Payments
            <span>{paymentOpen ? "▲" : "▼"}</span>
          </button>

          {paymentOpen && (
            <ul className="ml-4 mt-2 space-y-1">

              <li>
                <Link to="/deposit" className="block p-2 hover:bg-gray-200 rounded">
                  Deposit
                </Link>
              </li>

              <li>
                <Link to="/withdraw" className="block p-2 hover:bg-gray-200 rounded">
                  Withdraw
                </Link>
              </li>

            </ul>
          )}

        </li>

      </ul>
    </div>
  );
}