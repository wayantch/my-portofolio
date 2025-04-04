import React, { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import {
    BsBook,
    BsBriefcase,
    BsEnvelope,
    BsFileEarmarkText,
    BsGithub,
    BsLinkedin,
} from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const NAVLINKS = [
        { name: "Beranda", path: "/", icon: <HiHome className="text-xl" /> },
        {
            name: "Tentang",
            path: "/about",
            icon: <BiUser className="text-xl" />,
        },
        {
            name: "Proyek",
            path: "/projects",
            icon: <BsBriefcase className="text-xl" />,
        },
        {
            name: "Kontak",
            path: "/contact",
            icon: <BsEnvelope className="text-xl" />,
        },
        { name: "Blog", path: "/blog", icon: <BsBook className="text-xl" /> },
        {
            name: "Resume",
            path: "/resume",
            icon: <BsFileEarmarkText className="text-xl" />,
        },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 h-screen w-64 bg-gray-950 shadow-lg p-4 z-50 transform transition-transform ${
                isOpen ? "translate-x-0" : "-translate-x-64"
            } md:translate-x-0`}
        >
            {/* Tombol Close untuk Mobile */}
            <button
                className="absolute top-4 right-4 text-white md:hidden"
                onClick={toggleSidebar}
            >
                <IoMdClose className="text-2xl" />
            </button>

            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img
                            src="assets/images/profile.jpg"
                            className="w-32 h-32 rounded-full object-cover"
                            alt="profile"
                        />
                    </div>
                    <div className="card-back">
                        <img
                            src="assets/images/profile-back.jpg"
                            className="w-32 h-32 rounded-full object-cover"
                            alt="profile"
                        />
                    </div>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-white mt-4">Wyntch.</h1>
            <p className="text-gray-400 mb-4 text-sm">
                Junior Frontend Developer✌️
            </p>

            <div className="flex justify-between items-center">
                <button className="flex items-center gap-2 text-white px-3 py-2 outline outline-gray-100 rounded-lg text-sm">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>{" "}
                    Ada project
                </button>
                <div className="flex items-center gap-3">
                    <a href="https://github.com/wayantch" target="_blank">
                        <BsGithub className="w-6 h-6 text-white" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/wayan-deva"
                        target="_blank"
                    >
                        <BsLinkedin className="w-6 h-6 text-white" />
                    </a>
                </div>
            </div>
            <hr className="text-gray-600 my-4" />

            <ul className="relative">
                {NAVLINKS.map((link, index) => (
                    <li key={index} className="mb-2 relative">
                        <Link
                            to={link.path}
                            onClick={() => {
                                setActiveLink(link.path);
                                toggleSidebar(); // Tutup sidebar saat link diklik di mobile
                            }}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition duration-200 relative ${
                                activeLink === link.path
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            <span>{link.icon}</span> {link.name}
                            {activeLink === link.path && (
                                <motion.div
                                    layoutId="activeOutline"
                                    className="absolute inset-0 border-2 border-white rounded-lg text-white"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                />
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;

