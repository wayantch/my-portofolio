import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { IoMdMenu } from "react-icons/io";

const MainLayouts = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative">
            <Sidebar
                isOpen={sidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <button
                className="fixed top-4 right-4 md:hidden z-50 bg-gray-900 text-white p-2 rounded-full shadow-lg"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <IoMdMenu className="text-2xl" />
            </button>
            <div className="md:ml-64 p-8 md:p-4 ">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayouts;
