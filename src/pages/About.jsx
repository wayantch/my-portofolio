import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBasketballBall, FaMusic, FaTv } from "react-icons/fa";

const About = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    function getDuration(startDateStr, isPresent) {
        const startDate = new Date(startDateStr);
        const now = new Date();

        const startMonth = startDate.getMonth();
        const startYear = startDate.getFullYear();

        const nowMonth = now.getMonth();
        const nowYear = now.getFullYear();

        const totalMonths =
            (nowYear - startYear) * 12 + (nowMonth - startMonth);

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        const startLabel = startDate.toLocaleString("default", {
            month: "short",
            year: "numeric",
        });

        const endLabel = isPresent
            ? "Present"
            : now.toLocaleString("default", {
                  month: "short",
                  year: "numeric",
              });

        let durationStr = "";
        if (years > 0) durationStr += `${years} year${years > 1 ? "s" : ""} `;
        if (months > 0)
            durationStr += `${months} month${months > 1 ? "s" : ""}`;

        return `${startLabel} - ${endLabel} · ${durationStr.trim()}`;
    }

    const experiences = [
        {
            id: 1,
            company: "Takumi Vocational High School",
            role: "Frontend Developer",
            startDate: "2024-09-01",
            isPresent: true,
            description:
                "I am responsible for developing responsive and user-friendly web application interfaces. I use HTML, CSS, Tailwind CSS, and React Js to translate UI/UX designs into appealing and functional code. I collaborate with the backend team to integrate APIs and ensure optimal application performance.",
            skills: "Cascading Style Sheets (CSS), Web Design and +10 skills",
            logo: "assets/images/takumi.jpg",
        },
        {
            id: 2,
            company: "Takumi Vocational High School",
            role: "Account Manager",
            startDate: "2024-09-01",
            isPresent: true,
            description:
                "I act as a liaison between PT Minori and the internal team (lecturers), ensuring effective communication and coordination of projects. I prepare reports and support administrative tasks for the partnership between the company and educational institution.",
            skills: "Search Engine Optimization (SEO), Web Design and +1 skill",
            logo: "assets/images/takumi.jpg",
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
                "I studied Computer and Network Engineering (TKJ) at SMK BINAMITRA, where I developed a strong foundation in networking, computer hardware, and basic programming.",
        },
        {
            id: 2,
            img: "assets/images/takumi.jpg",
            institution: "TAKUMI POLYTECHNIC",
            degree: "Information Technology",
            duration: "2023 - Present",
            description:
                "Currently, I am pursuing a degree in Information Technology at Takumi University. My focus is on Frontend Development, specializing in technologies such as React.js, Laravel, and Tailwind CSS.",
        },
    ];

    const HOBBIES = [
        {
            id: 1,
            icon: <FaBasketballBall className="text-2xl text-gray-300" />,
            name: "Basketball",
            description:
                "I enjoy playing basketball, which helps me stay active and develop teamwork skills.",
        },
        {
            id: 2,
            icon: <FaMusic className="text-2xl text-gray-300" />,
            name: "Music",
            description:
                "I love listening to music and playing musical instruments, which allows me to express my creativity.",
        },
        {
            id: 3,
            icon: <FaTv className="text-2xl text-gray-300" />,
            name: "Watching Anime & Movies",
            description:
                "I enjoy watching movies and series, which helps me relax and gain new perspectives.",
        },
    ];
    return (
        <div>
            <motion.h1
                className="text-3xl font-semibold text-white mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h1>

            <motion.p
                className="text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Hi, I’m <strong>Wayan Deva Adhisthanaya</strong>, a passionate
                frontend developer from Indonesia...
            </motion.p>

            <motion.hr
                className="my-6 border-gray-700"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5 }}
            />

            <motion.div
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {[
                    "I have always been interested in the world of coding, especially in UI/UX design. My goal is to create web interfaces that are not only visually appealing but also efficient and user-friendly. I enjoy the challenge of creating seamless user experiences while maintaining clean and scalable code.",
                    "I am passionate about continuous learning and always looking to improve my skills. I love experimenting with new technologies, and I am particularly interested in React.js and how it allows for building dynamic, high-performance web applications.",
                ].map((text, index) => (
                    <motion.p
                        key={index}
                        className="text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                    >
                        {text}
                    </motion.p>
                ))}
            </motion.div>

            {/* Education Section */}
            <div className="mt-10">
                <h1 className="text-2xl font-semibold text-white">Education</h1>
                {EDUCATION.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        className="mt-4 bg-gray-700 flex flex-wrap gap-4 items-center p-4 rounded-lg"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
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
                    </motion.div>
                ))}
            </div>

            {/* Experience Section */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4 text-white">
                    Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="border p-4 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    className="w-12 h-12"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {exp.company}
                                    </h3>
                                    <p className="text-gray-300">{exp.role}</p>
                                    <p className="text-gray-300 text-sm">
                                        {getDuration(
                                            exp.startDate,
                                            exp.isPresent,
                                        )}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-3 text-gray-400">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
                {/* Hobby Section */}
                <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10">
                    Hobbies
                </h2>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {HOBBIES.map((hobby, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-1 p-6 rounded-lg bg-gray-800/40 text-gray-300 outline-2 outline-gray-600"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 text-lg font-semibold">
                                {hobby.icon} {hobby.name}
                            </div>
                            <p className="text-sm text-gray-400 mt-1 pl-8">
                                {hobby.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
