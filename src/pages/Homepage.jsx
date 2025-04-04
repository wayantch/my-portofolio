import React from "react";
import {
    FaCss3,
    FaHtml5,
    FaJs,
    FaReact,
    FaPhp,
    FaLaravel,
    FaEnvelope,
    FaQuoteRight,
} from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        { name: "PHP", icon: <FaPhp className="text-xl text-indigo-400" /> },
        {
            name: "Laravel",
            icon: <FaLaravel className="text-xl text-red-500" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-xl text-blue-700" /> },
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="relative space-y-12">
            {/* Header */}
            <motion.div
                className="flex flex-wrap justify-between items-center"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div>
                    <p className="text-lg">Hi,</p>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                        I'm Wayan Deva Adhisthanaya
                    </h1>
                </div>
                <div className="md:text-end text-gray-400">
                    <p>Based in Bekasi, Indonesia</p>
                    <p>Onsite & Remote</p>
                </div>
            </motion.div>

            {/* About Section */}
            <motion.div
                className="p-4 outline outline-gray-600 rounded-lg bg-gray-800/30"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
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
            </motion.div>

            {/* Skills Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <h1 className="text-xl font-semibold flex items-center gap-2 text-white">
                    <IoCodeSlash className="text-xl" /> Skills
                </h1>
                <div className="mt-3 flex flex-wrap gap-4">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-3 px-6 py-2 outline-2 outline-gray-600 rounded-lg bg-gray-800/40 text-gray-300"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {skill.icon} {skill.name}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
                className="outline outline-gray-400 bg-gray-600 p-4 rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <h1 className="text-xl font-semibold">Let’s Work Together</h1>
                <p className="text-gray-300">
                    If you’re looking for a passionate developer for your next
                    project, feel free to check out my{" "}
                    <Link to="/projects" className="text-blue-500">
                        projects
                    </Link>
                    . I’d love to collaborate!
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-3 bg-gradient-to-r from-gray-900 to-gray-950 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <FaEnvelope /> Contact Me
                </motion.button>
            </motion.div>

            {/* Testimonials */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold flex items-center gap-2 text-white">
                        <FaQuoteRight className="text-xl" /> Testimonials
                    </h1>
                    <a href="#" className="text-sm text-gray-400">
                        View All
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <motion.div
                            key={item}
                            className="max-w-lg mx-auto p-4 bg-gradient-to-bl from-gray-950 to-gray-900 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            variants={fadeIn}
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"
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
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Homepage;
