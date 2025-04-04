import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { IoMdMenu } from "react-icons/io";

const Resume = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative">

            {/* Konten Resume */}
            <div className="max-w-4xl mx-auto p-6 px-4 md:px-6 bg-gray-900 text-white rounded-lg shadow-lg mt-8">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Wayan Deva Adhisthanaya
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base">
                        Frontend Developer
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row md:justify-between gap-2 text-sm md:text-base mb-6 text-left">
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
                </div>

                {/* Profile Summary */}
                <div className="mb-6">
                    <h2 className="text-lg md:text-xl font-semibold mb-1">
                        Profile Summary
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base">
                        A Frontend Developer with a strong passion for building
                        responsive and interactive user interfaces. Experienced
                        in translating UI/UX designs into optimized code and
                        integrating backend APIs. Additionally, I have Japanese
                        language proficiency equivalent to JLPT N4.
                    </p>
                </div>

                {/* Education */}
                <div className="mb-6">
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
                </div>

                {/* Work Experience */}
                <div className="mb-6">
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
                            <li>
                                Developed responsive and user-friendly web
                                interfaces.
                            </li>
                            <li>
                                Translated UI/UX designs into code using HTML,
                                CSS, Tailwind CSS, and React.js.
                            </li>
                            <li>
                                Collaborated with backend teams to integrate
                                APIs and improve application performance.
                            </li>
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
                                Acted as a liaison between PT Minori and the
                                internal team.
                            </li>
                            <li>
                                Ensured effective communication and smooth
                                project coordination.
                            </li>
                            <li>
                                Prepared reports and supported administrative
                                processes in industry-academic collaborations.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <h2 className="text-lg md:text-xl font-semibold mb-1">
                        Skills
                    </h2>
                    <ul className="list-disc ml-6 text-gray-300 text-sm md:text-base">
                        <li>
                            <strong>Frontend Development:</strong> HTML, CSS,
                            Tailwind CSS
                        </li>
                        <li>
                            <strong>Database Management:</strong> MySQL,
                            PhpMyAdmin
                        </li>
                        <li>
                            <strong>Version Control:</strong> Git, GitHub
                        </li>
                        <li>
                            <strong>Tools & Platforms:</strong> Figma (UI/UX),
                            Postman (API Testing)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;
