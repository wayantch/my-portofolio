import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Resume from "../pages/Resume";

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayouts />} >
                        <Route index element={<Homepage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/resume" element={<Resume />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;
