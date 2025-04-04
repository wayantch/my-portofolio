import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu } from "react-icons/io";

const projects = [
    {
        id: 1,
        name: "Positivus",
        image: "assets/images/positivus.png",
        link: "https://positivus-omega.vercel.app/",
        category: "Landing Page"
    },
    {
        id: 2,
        name: "Ethica",
        image: "assets/images/ethica.png",
        link: "https://ethica-ecommerce.vercel.app/",
        category: "Mini Project",
    },
    {
        id: 3,
        name: "Craft",
        image: "assets/images/craft.png",
        link: "https://digital-agency-craft.vercel.app/",
        category: "Landing Page"
    },
    {
        id: 4,
        name: "ILP",
        image: "assets/images/ilp.png",
        link: "https://ilp-cikarang.vercel.app/",
        category: "Client Project",
    },
    {
        id: 5,
        name: "Takumi",
        image: "assets/images/takumi.png",
        link: "https://takumi.ac.id",
        category: "Full Project",
    },
];

const categories = ["All", "Landing Page", "Full Project", "Client Project"];

const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory,
              );

    return (
        <div className="relative">
            <h1 className="text-3xl font-semibold text-white">Projects</h1>
            <p className="text-gray-300 mb-6">
                Here are some of my projects that I have worked on:
            </p>

            {/* Filter Buttons with motion */}
            <div className="flex flex-wrap-reverse justify-end gap-4 mb-6">
                {categories.map((category) => (
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        key={category}
                        className={`px-4 py-2 rounded-md text-white transition-all duration-300 ${
                            selectedCategory === category
                                ? "bg-indigo-400"
                                : "bg-gray-700 hover:bg-gray-600"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Project Grid with animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <a href={project.link} key={project.id} target="_blank">
                            <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            layout
                            className="rounded-lg w-full h-auto overflow-hidden relative group"
                        >
                            <img
                                src={project.image}
                                className="w-full h-auto max-h-[300px] object-cover rounded-lg sm:max-h-[400px] md:max-h-[500px]"
                                alt={project.name}
                            />
                        </motion.div>
                        </a>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Project;
