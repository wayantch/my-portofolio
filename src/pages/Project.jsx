import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { IoMdMenu } from "react-icons/io";

const projects = [
    {
        id: 1,
        name: "Positivus",
        image: "assets/images/positivus.png",
        link: "#",
        category: "Mini Project",
    },
    {
        id: 2,
        name: "Ethica",
        image: "assets/images/ethica.png",
        link: "#",
        category: "Full Project",
    },
    {
        id: 3,
        name: "Craft",
        image: "assets/images/craft.png",
        link: "#",
        category: "Mini Project",
    },
    {
        id: 4,
        name: "ILP",
        image: "assets/images/ilp.png",
        link: "#",
        category: "Full Project",
    },
];

const categories = ["All", "Mini Project", "Full Project"];

const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Filter projects berdasarkan kategori yang dipilih
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

            {/* Filter Buttons */}
            <div className="flex  justify-end space-x-4 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-md text-white transition-all duration-300 ${
                            selectedCategory === category
                                ? "bg-indigo-400"
                                : "bg-gray-700 hover:bg-gray-600"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-lg w-full h-auto overflow-hidden relative group"
                    >
                        <img
                            src={project.image}
                            className="w-full h-auto max-h-[300px] object-cover rounded-lg sm:max-h-[400px] md:max-h-[500px]"
                            alt={project.name}
                        />

                        <a
                            href={project.link}
                            className="absolute right-0 bottom-0 bg-gray-950 px-4 py-2 rounded-tl-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            View Details
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
