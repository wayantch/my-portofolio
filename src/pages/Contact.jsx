import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { IoMdMenu } from "react-icons/io";

const Contact = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="relative">
            <div className="">
                <h1 className="text-3xl font-semibold text-white">Contact</h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="">
                        <img
                            src="assets/images/customer-support-illustration.png"
                            alt=""
                        />
                    </div>
                    <div className="m-auto">
                        <h1 className="text-3xl font-semibold text-white">
                            Get in Touch
                        </h1>
                        <p className="text-gray-300">
                            If you have any questions or want to work together,
                            feel free to reach out!
                        </p>
                        <form className="mt-4">
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-2 mb-4 rounded-md bg-gray-700 text-white"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-2 mb-4 rounded-md bg-gray-700 text-white"
                                />
                            </div>
                            <textarea
                                rows="4"
                                cols="50"
                                placeholder="Your Message"
                                className="w-full p-2 mb-4 rounded-md bg-gray-700 text-white"
                            ></textarea>
                            <button className="bg-gradient-to-r from-gray-900 to-gray-950 text-white px-4 py-2 rounded-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
