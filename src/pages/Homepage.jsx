import React from "react";
import {
    FaCss3,
    FaHtml5,
    FaJs,
    FaReact,
    FaPhp,
    FaLaravel,
    FaEnvelope,
    FaQuoteLeft,
    FaQuoteRight,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { Link } from "react-router-dom";

const Homepage = () => {
    const SKILLS = [
        { name: "HTML", icon: <FaHtml5 className="text-xl text-orange-600" /> },
        { name: "CSS", icon: <FaCss3 className="text-xl text-blue-600" /> },
        {
            name: "JavaScript",
            icon: <FaJs className="text-xl text-yellow-500" />,
        },
        { name: "React", icon: <FaReact className="text-xl text-cyan-500" /> },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="text-xl text-blue-400" />,
        },
        { name: "PHP", icon: <FaPhp className="text-xl text-indigo-600" /> },
        {
            name: "Laravel",
            icon: <FaLaravel className="text-xl text-red-500" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-xl text-blue-700" /> },
    ];

    return (
        <div className="relative">
            
            {/* Header */}
            <div className="flex flex-wrap justify-between items-center">
                <div>
                    <p className="text-lg">Hi,</p>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                        I'm Wayan Deva Adhisthanaya
                    </h1>
                </div>
                <div className="md:text-end  text-gray-400">
                    <p>Based in Bekasi, Indonesia</p>
                    <p>Onsite & Remote</p>
                </div>
            </div>

            {/* About Section */}
            <div className="mt-8 p-4 outline outline-gray-600 rounded-lg bg-gray-800/30">
                <p className="text-gray-300">
                    I am an <strong>Information Technology</strong> student at{" "}
                    <strong>
                        <a
                            href="https://takumi.ac.id"
                            target="_blank"
                            className="underline"
                        >
                            Takumi University
                        </a>
                    </strong>
                    , specializing in <strong>Frontend Development</strong>. I
                    enjoy creating designs that are not only visually appealing
                    but also efficient and user-friendly. Currently, I am
                    deepening my expertise in{" "}
                    <strong>React.js, Tailwind CSS, and Flutter</strong> to
                    build fast, responsive, and user-friendly web applications.
                </p>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
                <h1 className="text-xl font-semibold flex items-center gap-2 text-white">
                    <IoCodeSlash className="text-xl" /> Skills
                </h1>
                <div className="mt-3 flex flex-wrap gap-4">
                    {SKILLS.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-2 outline-2 outline-gray-600 rounded-lg bg-gray-800/40 text-gray-300"
                        >
                            {skill.icon} {skill.name}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 outline outline-gray-400 bg-gray-600 p-4 rounded-lg">
                <h1 className="text-xl font-semibold">Let’s Work Together</h1>
                <p className="text-gray-300">
                    If you’re looking for a passionate developer for your next
                    project, feel free to check out my{" "}
                    <Link to="/projects" className="text-blue-500">
                        projects
                    </Link>
                    . I’d love to collaborate!
                </p>
                <button className="mt-3 bg-gradient-to-r from-gray-900 to-gray-950 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <FaEnvelope /> Contact Me
                </button>
            </div>

            <div className="mt-10">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold flex items-center gap-2 text-white mb-4">
                        <FaQuoteRight className="text-xl" /> Testimonials
                    </h1>
                    <a href="" className="text-sm text-gray-400">
                        View All
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="max-w-lg mx-auto p-4 bg-gradient-to-bl from-gray-950 to-gray-900 rounded-lg shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?uid=R171489589&ga=GA1.1.1005288897.1730431901&semt=ais_hybrid&w=740"
                                    alt={`Person ${item}`}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-white">
                                        John Doe {item}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        Software Engineer
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-300 italic">
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin ac odio ac metus gravida
                                tincidunt."
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
