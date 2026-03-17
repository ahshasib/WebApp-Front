
import Navbar from "../component/Navbar";
import { Outlet } from "react-router";
import Sidebar from './../component/Sidebar';
export default function Layout() {

  return (
    <div className="flex">

      <Sidebar></Sidebar>

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
}