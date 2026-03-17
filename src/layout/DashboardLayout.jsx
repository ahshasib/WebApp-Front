
import { Outlet } from "react-router";
import Sidebar from "../component/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>

    </div>
  );
}