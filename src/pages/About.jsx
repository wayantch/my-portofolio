import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { IoMdMenu } from "react-icons/io";

const About = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const experiences = [
        {
            id: 1,
            company: "Takumi Vocational High School",
            role: "Frontend Developer",
            duration: "Sep 2024 - Present · 8 months",
            description:
                "I am responsible for developing responsive and user-friendly web application interfaces. I use HTML, CSS, Tailwind CSS, and React Js to translate UI/UX designs into appealing and functional code. I collaborate with the backend team to integrate APIs and ensure optimal application performance.",
            skills: "Cascading Style Sheets (CSS), Web Design and +10 skills",
            logo: "assets/images/takumi.jpg", // Replace with the correct logo path
        },
        {
            id: 2,
            company: "Takumi Vocational High School",
            role: "Account Manager",
            duration: "Sep 2024 - Present · 8 months",
            description:
                "I act as a liaison between PT Minori and the internal team (lecturers), ensuring effective communication and coordination of projects. I prepare reports and support administrative tasks for the partnership between the company and educational institution.",
            skills: "Search Engine Optimization (SEO), Web Design and +1 skill",
            logo: "assets/images/takumi.jpg", // Replace with the correct logo path
        },
    ];

    const EDUCATION = [
        {
            id: 1,
            img: "assets/images/10290.png",
            institution: "SMK BINAMITRA",
            degree: "Computer and Network Engineering (TKJ)",
            duration: "2020 - 2023",
            description:
                "I studied Computer and Network Engineering (TKJ) at SMK BINAMITRA, where I developed a strong foundation in networking, computer hardware, and basic programming. During my studies, I gained hands-on experience with system troubleshooting, configuring networks, and working with various IT infrastructures.",
        },
        {
            id: 2,
            img: "assets/images/takumi.jpg",
            institution: "TAKUMI UNIVERSITY",
            degree: "Information Technology",
            duration: "2023 - Present",
            description:
                "Currently, I am pursuing a degree in Information Technology at Takumi University. My focus is on Frontend Development, specializing in technologies such as React.js, Laravel, and Tailwind CSS. I have been involved in multiple projects that enhance my skills in web development, UI/UX design, and software engineering.",
        },
    ];
    return (
        <div>
            <h1 className="text-3xl font-semibold text-white mb-4">About Me</h1>
            <p className="text-gray-300 mb-6">
                Hi, I’m <strong>Wayan Deva Adhisthanaya</strong>, a passionate
                frontend developer from Indonesia. I specialize in creating web
                applications with a focus on performance, responsiveness, and
                user-friendly design. I have a strong background in frontend
                technologies like HTML, CSS, JavaScript, and React.js, and I’m
                currently diving deep into Tailwind CSS for rapid UI
                development.
            </p>
            <hr className="my-6 border-gray-700" />
            <div className="space-y-4">
                <p className="text-gray-300">
                    I’ve always had a keen interest in the world of coding,
                    especially in UI/UX design. My goal is to craft web
                    interfaces that are not only aesthetically pleasing but also
                    efficient and user-friendly. I enjoy the challenge of
                    creating seamless user experiences while maintaining clean
                    and scalable code.
                </p>
                <p className="text-gray-300">
                    I’m passionate about continuous learning and am always
                    looking to improve my skills. I love experimenting with new
                    technologies, and I’m particularly interested in React.js
                    and how it allows for building dynamic, high-performance web
                    applications.
                </p>
                <p className="text-gray-300">
                    Outside of coding, I’m involved in{" "}
                    <strong>Japanese language education</strong> on TikTok,
                    where I share educational content with a growing community
                    of over <strong>8K followers</strong>. This gives me a
                    unique opportunity to combine my love for technology and
                    education, as well as connect with learners from around the
                    world.
                </p>
            </div>

            {/* Education Section */}
            <div className="mt-10">
                <h1 className="text-2xl font-semibold text-white">Education</h1>

                {EDUCATION.map((edu) => (
                    <div
                        key={edu.id}
                        className="mt-4 bg-gray-700 flex flex-wrap gap-4 items-center p-4 rounded-lg"
                    >
                        <img
                            src={edu.img}
                            className="w-32 h-32 rounded-full object-cover"
                            alt={edu.institution}
                        />
                        <div className="flex flex-col justify-center md:ml-4">
                            <h3 className="text-xl font-semibold text-white">
                                {edu.institution}
                            </h3>
                            <p className="text-gray-400">{edu.duration}</p>
                            <p className="text-gray-300">{edu.degree}</p>
                            <p className="text-gray-300">{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Experience Section */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="border p-4 rounded-lg shadow-md"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    className="w-12 h-12"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {exp.company}
                                    </h3>
                                    <p className="text-gray-300">{exp.role}</p>
                                    <p className="text-gray-300 text-sm">
                                        {exp.duration}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-3 text-gray-200">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
