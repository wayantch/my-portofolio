import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { IoMdMenu } from "react-icons/io";

const Resume = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto p-6 px-4 md:px-6 bg-gray-900 text-white rounded-lg shadow-lg mt-8"
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-6"
                >
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Wayan Deva Adhisthanaya
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base">
                        Frontend Developer
                    </p>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row md:justify-between gap-2 text-sm md:text-base mb-6 text-left"
                >
                    <p>
                        <strong>Phone:</strong> +62 877 8118 9068
                    </p>
                    <p>
                        <strong>Email:</strong> wayaandeva123@gmail.com
                    </p>
                    <p>
                        <strong>Address:</strong> Perum. Griya Hegar Asri B9 No
                        16
                    </p>
                </motion.div>

                {/* Profile Summary */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6"
                >
                    <h2 className="text-lg md:text-xl font-semibold mb-1">
                        Profile Summary
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base">
                        A Frontend Developer with a strong passion for building
                        responsive and interactive user interfaces...
                    </p>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mb-6"
                >
                    <h2 className="text-lg md:text-xl font-semibold mb-1">
                        Education
                    </h2>
                    <div className="text-sm md:text-base">
                        <p>
                            <strong>SMK Binamitra</strong> | 2020 – 2023
                        </p>
                        <p className="text-gray-300">
                            Computer & Network Engineering
                        </p>
                        <p className="mt-2">
                            <strong>Politeknik Takumi</strong> | 2023 – Present
                        </p>
                        <p className="text-gray-300">
                            D3, Information Technology
                        </p>
                    </div>
                </motion.div>

                {/* Work Experience */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="mb-6"
                >
                    <h2 className="text-lg md:text-xl font-semibold mb-1">
                        Work Experience
                    </h2>
                    <div className="text-sm md:text-base mb-4">
                        <p>
                            <strong>Frontend Developer</strong> | September 2024
                            – Present
                        </p>
                        <p className="text-gray-300">
                            Politeknik Takumi – Indonesia
                        </p>
                        <ul className="list-disc ml-6 text-gray-300 mt-1">
                            <li>Developed responsive web interfaces.</li>
                            <li>
                                Translated designs into code using HTML, CSS,
                                Tailwind, React.
                            </li>
                            <li>Integrated APIs.</li>
                        </ul>
                    </div>

                    <div className="text-sm md:text-base">
                        <p>
                            <strong>Account Manager</strong> | September 2024 –
                            Present
                        </p>
                        <p className="text-gray-300">
                            Politeknik Takumi – Indonesia
                        </p>
                        <ul className="list-disc ml-6 text-gray-300 mt-1">
                            <li>
                                Liaison between PT Minori and internal team.
                            </li>
                            <li>Handled project coordination and reports.</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <h2 className="text-lg md:text-xl font-semibold mb-1">
                        Skills
                    </h2>
                    <ul className="list-disc ml-6 text-gray-300 text-sm md:text-base">
                        <li>
                            <strong>Frontend:</strong> HTML, CSS, Tailwind CSS
                        </li>
                        <li>
                            <strong>Database:</strong> MySQL, PhpMyAdmin
                        </li>
                        <li>
                            <strong>Version Control:</strong> Git, GitHub
                        </li>
                        <li>
                            <strong>Tools:</strong> Figma, Postman
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Resume;
